// components/VideoPlayer.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, RefreshCw } from "lucide-react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  videoClassName?: string;
  containerClassName?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
}

export default function VideoPlayer({
  src,
  poster,
  title,
  videoClassName = "",
  containerClassName = "",
  autoPlay = false,
  muted = true, // 默认静音，提高自动播放成功率
  loop = true,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  // 用于跟踪组件是否已挂载
  const isMountedRef = useRef(true);
  // 用于跟踪是否正在尝试播放，避免竞态条件
  const isPlayingAttemptRef = useRef(false);

  // 按钮颜色配置
  const buttonColor = {
    default: "#8E8B8C",
    active: "#A5A2A3",
    hover: "#B5B2B3",
  };

  // 处理播放/暂停
  const togglePlay = () => {
    if (!videoRef.current || hasError) return;

    try {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        // 设置标记，防止重复调用
        if (!isPlayingAttemptRef.current) {
          isPlayingAttemptRef.current = true;

          videoRef.current
            .play()
            .then(() => {
              if (isMountedRef.current) {
                setIsPlaying(true);
              }
            })
            .catch((error) => {
              console.warn("播放失败:", error.name, error.message);
              // 如果是中断错误，不视为真正的错误
              if (error.name !== "AbortError" && isMountedRef.current) {
                setHasError(true);
              }
            })
            .finally(() => {
              isPlayingAttemptRef.current = false;
            });
        }
      }
    } catch (error) {
      console.warn("播放控制错误:", error);
      if (isMountedRef.current) {
        setHasError(true);
      }
    }
  };

  // 重试加载视频
  const retryLoad = () => {
    if (videoRef.current) {
      setHasError(false);
      setIsLoaded(false);
      setRetryCount((prev) => prev + 1);

      // 重置视频元素
      videoRef.current.load();
    }
  };

  // 安全地尝试自动播放
  const safeAutoPlay = () => {
    if (!videoRef.current || !autoPlay || hasError) return;

    if (!isPlayingAttemptRef.current) {
      isPlayingAttemptRef.current = true;

      videoRef.current
        .play()
        .then(() => {
          if (isMountedRef.current) {
            setIsPlaying(true);
          }
        })
        .catch((error) => {
          console.warn("自动播放失败:", error.name, error.message);
          // 自动播放失败是正常的，不标记为错误
          if (error.name === "NotAllowedError") {
            console.info("自动播放被浏览器策略阻止，需要用户交互");
          }
        })
        .finally(() => {
          isPlayingAttemptRef.current = false;
        });
    }
  };

  // 初始化视频加载
  useEffect(() => {
    // 组件挂载时设置标记
    isMountedRef.current = true;

    const video = videoRef.current;
    if (!video) return;

    let playAttemptTimeout: NodeJS.Timeout;
    let isWaitingForInteraction = false;

    const handleCanPlay = () => {
      console.log("视频可以播放");
      if (isMountedRef.current) {
        setIsLoaded(true);
        setHasError(false);
      }
    };

    const handleCanPlayThrough = () => {
      console.log("视频可以流畅播放");
      if (isMountedRef.current && autoPlay) {
        // 延迟一下再尝试自动播放，确保视频完全准备好
        playAttemptTimeout = setTimeout(() => {
          safeAutoPlay();
        }, 300);
      }
    };

    const handleError = (e: Event) => {
      console.error("视频加载错误:", e);
      if (isMountedRef.current) {
        setHasError(true);
        setIsLoaded(false);
      }
    };

    const handlePlay = () => {
      console.log("视频开始播放");
      if (isMountedRef.current) {
        setIsPlaying(true);
        setHasError(false);
        isWaitingForInteraction = false;
      }
    };

    const handlePause = () => {
      console.log("视频暂停");
      if (isMountedRef.current) {
        setIsPlaying(false);
      }
    };

    const handleEnded = () => {
      console.log("视频播放结束");
      if (isMountedRef.current && loop && video) {
        video.currentTime = 0;

        // 使用setTimeout避免立即调用play()导致的竞态条件
        setTimeout(() => {
          if (isMountedRef.current && !isPlayingAttemptRef.current) {
            isPlayingAttemptRef.current = true;
            video
              .play()
              .then(() => {
                if (isMountedRef.current) {
                  setIsPlaying(true);
                }
              })
              .catch((error) => {
                console.warn("循环播放失败:", error);
              })
              .finally(() => {
                isPlayingAttemptRef.current = false;
              });
          }
        }, 100);
      }
    };

    const handleLoadedMetadata = () => {
      console.log("视频元数据加载完成");
      if (isMountedRef.current) {
        setIsLoaded(true);
      }
    };

    // 添加所有事件监听器
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("canplaythrough", handleCanPlayThrough);
    video.addEventListener("error", handleError);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    // 检查视频是否已经可以播放
    if (video.readyState >= 2) {
      // HAVE_CURRENT_DATA
      handleCanPlay();

      if (video.readyState >= 3 && isMountedRef.current && autoPlay) {
        // HAVE_FUTURE_DATA
        playAttemptTimeout = setTimeout(() => {
          safeAutoPlay();
        }, 500);
      }
    }

    // 用户交互后尝试自动播放（如果需要）
    const handleUserInteraction = () => {
      if (isWaitingForInteraction && autoPlay && !isPlaying) {
        safeAutoPlay();
      }
    };

    // 添加用户交互监听
    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("touchstart", handleUserInteraction);
    window.addEventListener("keydown", handleUserInteraction);

    // 清理函数
    return () => {
      isMountedRef.current = false;
      isPlayingAttemptRef.current = false;

      if (playAttemptTimeout) {
        clearTimeout(playAttemptTimeout);
      }

      // 移除事件监听器
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("canplaythrough", handleCanPlayThrough);
      video.removeEventListener("error", handleError);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);

      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("touchstart", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);

      // 确保视频暂停
      if (!video.paused) {
        video.pause();
      }
    };
  }, [autoPlay, loop, retryCount]);

  // 处理键盘快捷键
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // 只在没有聚焦到输入框时响应
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.code === "Space" && videoRef.current) {
        e.preventDefault();
        togglePlay();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isPlaying, hasError]);

  return (
    <div className={`flex flex-col ${containerClassName}`}>
      {/* 状态指示器 */}
      <div className="flex justify-between items-center mb-2">
        {/* 循环播放指示器 */}
        {loop && (
          <div className="flex items-center gap-2 text-sm text-sky-600">
            <RefreshCw className="w-4 h-4" />
            <span>循环播放</span>
          </div>
        )}

        {/* 播放状态指示器 */}
        <div
          className={`px-3 py-1 rounded-full text-sm font-medium ${isPlaying ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"} ${hasError ? "!bg-red-100 !text-red-700" : ""}`}
        >
          {hasError ? "加载失败" : isPlaying ? "播放中" : "已暂停"}
        </div>
      </div>

      {/* 视频容器 */}
      <div className="relative overflow-hidden rounded-lg bg-black">
        {/* 视频元素 - 添加关键属性 */}
        <video
          ref={videoRef}
          className={`${videoClassName}`}
          src={src}
          poster={poster}
          muted={muted}
          loop={loop}
          playsInline
          preload="metadata"
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
          onError={() => {
            if (isMountedRef.current) {
              setHasError(true);
              setIsLoaded(false);
            }
          }}
        >
          {/* 备用内容 */}
          <p>您的浏览器不支持 HTML5 视频。</p>
        </video>

        {/* 加载状态指示器 */}
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900/90">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-gray-700 border-t-gray-500 rounded-full animate-spin mx-auto mb-3"></div>
              <p className="text-gray-300 text-sm">视频加载中...</p>
            </div>
          </div>
        )}

        {/* 错误状态 */}
        {hasError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-900/80 p-4">
            <div className="text-red-100 text-center mb-4">
              <p className="font-medium mb-1">视频加载失败</p>
              <p className="text-sm">请检查网络连接或视频文件</p>
              <p className="text-xs mt-2">已尝试 {retryCount} 次</p>
            </div>
            <button
              onClick={retryLoad}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              重试加载
            </button>
          </div>
        )}

        {/* 右下角控制按钮 */}
        <div className="absolute bottom-4 right-4">
          <button
            onClick={togglePlay}
            disabled={hasError}
            className={`flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-sm transition-all duration-200 shadow-lg border-2 border-white/20
              ${hasError ? "opacity-50 cursor-not-allowed" : "hover:scale-105 active:scale-95"}
              ${isPlaying ? "" : ""}`}
            style={{
              backgroundColor: isPlaying
                ? buttonColor.active
                : buttonColor.default,
            }}
            onMouseEnter={(e) => {
              if (!hasError) {
                e.currentTarget.style.backgroundColor = buttonColor.hover;
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = isPlaying
                ? buttonColor.active
                : buttonColor.default;
            }}
            aria-label={isPlaying ? "暂停视频" : "播放视频"}
            title={
              hasError
                ? "视频加载失败"
                : isPlaying
                  ? "暂停 (空格键)"
                  : "播放 (空格键)"
            }
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-white" />
            ) : (
              <Play className="w-6 h-6 text-white ml-1" />
            )}
          </button>
        </div>
      </div>

      {/* 视频标题 */}
      {title && (
        <div className="mt-3">
          <p className="text-center text-lg text-zinc-800 font-bold">{title}</p>
        </div>
      )}
    </div>
  );
}
