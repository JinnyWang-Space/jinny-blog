// components/MarkdownCodeBlock.tsx
"use client";

import { ReactNode } from "react";
import CodeBlock from "./CodeBlock";

interface MarkdownCodeBlockProps {
  node?: any;
  inline?: boolean;
  className?: string;
  children?: ReactNode;
}

export default function MarkdownCodeBlock({
  inline,
  className,
  children,
  ...props
}: MarkdownCodeBlockProps) {
  // 如果是行内代码
  if (inline) {
    return (
      <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-sm font-mono">
        {children}
      </code>
    );
  }

  // 从className中提取语言，例如 "language-typescript"
  const match = /language-(\w+)/.exec(className || "");
  const language = match ? match[1] : "";

  // 提取标题（从children的第一个元素的props中）
  const title = props.node?.properties?.title || "";

  return (
    <CodeBlock language={language} title={title}>
      {String(children).replace(/\n$/, "")}
    </CodeBlock>
  );
}
