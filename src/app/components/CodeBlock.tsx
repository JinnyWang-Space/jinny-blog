// components/CodeBlock/index.tsx
"use client";

import { ReactNode, useState, useMemo, useEffect, useRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  CheckIcon,
  CopyIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "lucide-react";

interface CodeBlockProps {
  /** 代码内容，可以是字符串或 ReactNode */
  children: string | ReactNode;

  /** 编程语言，如 'typescript', 'javascript', 'python' 等 */
  language?: string;

  /** 代码框标题，通常是文件名 */
  title?: string;

  /** 是否显示行号 */
  showLineNumbers?: boolean;

  /** 自定义 CSS 类名 */
  className?: string;

  /** 默认展开状态 (true: 展开, false: 收起) */
  defaultExpanded?: boolean;

  /** 收起时显示的行数，默认 15 行 */
  collapsedLines?: number;

  /** 是否显示展开/收起功能，默认 true */
  showExpandCollapse?: boolean;

  /** 代码框高度限制，超过此高度时自动添加滚动 */
  maxHeight?: string;

  /** 标题栏背景色，默认从 gray-800 到 gray-900 的渐变 */
  headerBg?: string;

  /** 代码区域背景色，默认 gray-900 */
  codeBg?: string;

  /** 是否显示语言标签，默认 true */
  showLanguageTag?: boolean;

  /** 复制按钮文字 */
  copyText?: string;

  /** 复制成功文字 */
  copiedText?: string;

  /** 展开按钮文字 */
  expandText?: string;

  /** 收起按钮文字 */
  collapseText?: string;
}

export default function CodeBlock({
  children,
  language = "typescript",
  title,
  showLineNumbers = true,
  className = "",
  defaultExpanded = false,
  collapsedLines = 10,
  showExpandCollapse = true,
  maxHeight = "auto",
  headerBg = "from-gray-800 to-gray-900",
  // headerBg = "bg-black-800",
  codeBg = "zinc-950",
  showLanguageTag = true,
  copyText = "复制",
  copiedText = "已复制",
  expandText = "展开全部",
  collapseText = "收起",
}: CodeBlockProps) {
  // 状态管理
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [shouldShowToggle, setShouldShowToggle] = useState(false);
  const codeContainerRef = useRef<HTMLDivElement>(null);

  // 确保children是字符串
  const codeString =
    typeof children === "string"
      ? children
      : (children as any)?.props?.children || "";

  // 计算代码行数
  const totalLines = useMemo(() => {
    return codeString.split("\n").length;
  }, [codeString]);

  // 根据是否展开决定显示的代码
  const displayedCode = useMemo(() => {
    if (isExpanded || !showExpandCollapse || totalLines <= collapsedLines) {
      return codeString.trim();
    }

    // 收起时只显示前 collapsedLines 行
    const lines = codeString.split("\n");
    return lines.slice(0, collapsedLines).join("\n").trim();
  }, [codeString, isExpanded, showExpandCollapse, totalLines, collapsedLines]);

  // 检查是否需要显示展开/收起按钮
  useEffect(() => {
    // 当总行数超过收起时显示的行数时，显示展开/收起按钮
    const needsToggle = showExpandCollapse && totalLines > collapsedLines;
    setShouldShowToggle(needsToggle);
  }, [totalLines, collapsedLines, showExpandCollapse]);

  // 复制功能处理
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
      // 降级方案：使用传统的 document.execCommand
      const textArea = document.createElement("textarea");
      textArea.value = codeString;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // 切换展开/收起状态
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`relative rounded-lg overflow-hidden my-4 border border-gray-700 shadow-lg ${className}`}
    >
      {/* 标题栏 */}
      {(title || language) && (
        <div
          className={`flex justify-between items-center /*bg-gradient-to-r ${headerBg}*/ bg-black px-4 py-3 text-gray-200 text-sm border-b border-gray-700`}
        >
          {/* 左侧：标题和语言标签 */}
          <div className="flex items-center gap-3 overflow-hidden">
            {title && (
              <div className="flex items-center gap-2 min-w-0">
                {/* 窗口控制点（可选装饰） */}
                <div className="flex-shrink-0 flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="font-medium truncate ml-1" title={title}>
                  {/* {title} */}
                  {/* ArkTS */}
                </span>
              </div>
            )}
            {language && showLanguageTag && (
              <span className="flex-shrink-0 px-2.5 py-1 bg-gray-700/50 backdrop-blur-sm rounded-md text-md font-bold border border-gray-600/50">
                {/* {language.toUpperCase()} */}
                ArkTS
              </span>
            )}
          </div>

          {/* 右侧：操作按钮区域 */}
          <div className="flex items-center gap-2">
            {/* 展开/收起按钮（当需要时显示） */}
            {shouldShowToggle && (
              <button
                onClick={toggleExpand}
                className="flex items-center gap-2 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 rounded-md text-xs transition-all duration-200 active:scale-95 group"
                aria-label={isExpanded ? collapseText : expandText}
                title={isExpanded ? collapseText : expandText}
              >
                {isExpanded ? (
                  <>
                    <ChevronUpIcon className="w-3.5 h-3.5 group-hover:animate-pulse" />
                    <span className="hidden sm:inline">{collapseText}</span>
                    {/* 显示收起行数 */}
                    <span className="hidden sm:inline ml-1 text-gray-400">
                      ({totalLines}行)
                    </span>
                  </>
                ) : (
                  <>
                    <ChevronDownIcon className="w-3.5 h-3.5 group-hover:animate-pulse" />
                    <span className="hidden sm:inline">{expandText}</span>
                    {/* 显示剩余行数 */}
                    <span className="hidden sm:inline ml-1 text-gray-400">
                      ({totalLines - collapsedLines}+)
                    </span>
                  </>
                )}
              </button>
            )}

            {/* 复制按钮 */}
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 rounded-md text-xs transition-all duration-200 active:scale-95 group"
              aria-label={copied ? copiedText : `${copyText}代码`}
              title={`${copyText}代码`}
            >
              {copied ? (
                <>
                  <CheckIcon className="w-3.5 h-3.5 text-green-400" />
                  <span className="hidden sm:inline text-green-400">
                    {copiedText}
                  </span>
                </>
              ) : (
                <>
                  <CopyIcon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{copyText}</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* 代码区域 */}
      <div
        ref={codeContainerRef}
        className={`relative bg-${codeBg}`}
        style={{
          maxHeight: maxHeight !== "auto" ? maxHeight : undefined,
          backgroundColor: codeBg.startsWith("#") ? codeBg : undefined,
        }}
      >
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          showLineNumbers={showLineNumbers}
          lineNumberStyle={{
            color: "#6B7280",
            minWidth: "3.5em",
            paddingRight: "1.5em",
            textAlign: "right",
            userSelect: "none",
            backgroundColor: "transparent",
          }}
          customStyle={{
            margin: 0,
            padding: "1.25rem",
            fontSize: "0.875rem",
            lineHeight: "1.6",
            backgroundColor: "transparent",
            borderRadius: 0,
            overflowX: "auto",
          }}
          codeTagProps={{
            className: "font-mono",
          }}
        >
          {displayedCode}
        </SyntaxHighlighter>

        {/* 收起时的底部渐变遮罩（当代码被收起且超过指定行数时显示） */}
        {shouldShowToggle && !isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent pointer-events-none flex items-end justify-center pb-2">
            {/* 遮罩底部的提示文本 */}
            <span className="text-xs text-gray-400 px-3 py-1 bg-gray-800/80 rounded-full backdrop-blur-sm border border-gray-700/50">
              ... 还有 {totalLines - collapsedLines} 行代码
            </span>
          </div>
        )}

        {/* 如果没有标题栏，显示浮动操作按钮 */}
        {!(title || language) && (
          <div className="absolute top-3 right-3 flex items-center gap-2">
            {/* 展开/收起按钮（当需要时显示） */}
            {shouldShowToggle && (
              <button
                onClick={toggleExpand}
                className="p-2 bg-gray-800/80 hover:bg-gray-700/80 backdrop-blur-sm rounded-md transition-all duration-200 hover:scale-105 group"
                aria-label={isExpanded ? collapseText : expandText}
                title={isExpanded ? collapseText : expandText}
              >
                {isExpanded ? (
                  <ChevronUpIcon className="w-4 h-4 text-gray-300 group-hover:text-white" />
                ) : (
                  <ChevronDownIcon className="w-4 h-4 text-gray-300 group-hover:text-white" />
                )}
              </button>
            )}

            {/* 复制按钮 */}
            <button
              onClick={handleCopy}
              className="p-2 bg-gray-800/80 hover:bg-gray-700/80 backdrop-blur-sm rounded-md transition-all duration-200 hover:scale-105"
              aria-label="复制代码"
              title="复制代码"
            >
              {copied ? (
                <CheckIcon className="w-4 h-4 text-green-400" />
              ) : (
                <CopyIcon className="w-4 h-4 text-gray-300" />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// 为了方便使用，可以创建几个预设组件
export const CodeBlockCollapsible = (props: CodeBlockProps) => (
  <CodeBlock showExpandCollapse={true} defaultExpanded={false} {...props} />
);

export const CodeBlockExpanded = (props: CodeBlockProps) => (
  <CodeBlock showExpandCollapse={true} defaultExpanded={true} {...props} />
);

export const CodeBlockSimple = (props: CodeBlockProps) => (
  <CodeBlock showExpandCollapse={false} {...props} />
);

export const CodeBlockCompact = (props: CodeBlockProps) => (
  <CodeBlock
    showExpandCollapse={true}
    defaultExpanded={false}
    collapsedLines={10}
    className="text-sm"
    {...props}
  />
);
