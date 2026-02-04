// components/MarkdownCodeBlock.tsx
"use client";

import { ReactNode, isValidElement } from "react";
import CodeBlock from "./CodeBlock";

// 定义 MDX 节点的类型
interface MDXNodeProperties {
  title?: string;
  className?: string;
  [key: string]: unknown;
}

interface MDXNode {
  properties?: MDXNodeProperties;
  tagName?: string;
  type?: string;
  value?: string;
}

interface MarkdownCodeBlockProps {
  /** MDX 解析的节点对象 */
  node?: MDXNode;

  /** 是否为行内代码 */
  inline?: boolean;

  /** CSS 类名，通常包含 language-xxx 用于识别语言 */
  className?: string;

  /** 子节点，通常是代码字符串 */
  children?: ReactNode;

  /** 其他可能传入的属性 */
  [key: string]: unknown;
}

// 类型守卫：检查是否是带有字符串 children 的 React 元素
function isReactElementWithStringChildren(
  element: unknown,
): element is { props: { children: string } } {
  return (
    typeof element === "object" &&
    element !== null &&
    "props" in element &&
    typeof (element as Record<string, unknown>).props === "object" &&
    (element as Record<string, unknown>).props !== null &&
    "children" in (element as { props: Record<string, unknown> }).props &&
    typeof (element as { props: { children: unknown } }).props.children ===
      "string"
  );
}

// 类型守卫：检查节点是否有标题属性
function hasTitleProperty(
  node: unknown,
): node is { properties: { title: string } } {
  return (
    typeof node === "object" &&
    node !== null &&
    "properties" in node &&
    typeof (node as Record<string, unknown>).properties === "object" &&
    (node as Record<string, unknown>).properties !== null &&
    "title" in (node as { properties: Record<string, unknown> }).properties &&
    typeof (node as { properties: { title: unknown } }).properties.title ===
      "string"
  );
}

// 安全地获取代码字符串
function getCodeStringFromChildren(children: ReactNode): string {
  if (typeof children === "string") {
    return children;
  }

  if (isValidElement(children) && isReactElementWithStringChildren(children)) {
    return children.props.children;
  }

  // 处理数组类型的 children
  if (Array.isArray(children)) {
    return children
      .map((child) => {
        if (typeof child === "string") {
          return child;
        }
        if (isValidElement(child) && isReactElementWithStringChildren(child)) {
          return child.props.children;
        }
        return "";
      })
      .filter(Boolean)
      .join("");
  }

  console.warn("无法从 children 中提取代码字符串");
  return "";
}

export default function MarkdownCodeBlock({
  node,
  inline,
  className,
  children,
  ...props
}: MarkdownCodeBlockProps) {
  // 如果是行内代码，使用简单的样式
  if (inline) {
    return (
      <code
        className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm font-mono text-red-600 dark:text-red-400"
        {...(typeof props === "object" ? props : {})}
      >
        {children}
      </code>
    );
  }

  // 从 className 中提取语言，例如 "language-typescript"
  const languageMatch = /language-(\w+)/.exec(className || "");
  const language = languageMatch ? languageMatch[1] : "";

  // 从节点属性中提取标题
  const title = hasTitleProperty(node) ? node.properties.title : "";

  // 获取代码字符串
  const codeString = getCodeStringFromChildren(children);

  return (
    <CodeBlock
      language={language}
      title={title}
      className="my-6"
      {...(typeof props === "object" ? props : {})}
    >
      {codeString}
    </CodeBlock>
  );
}
