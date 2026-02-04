// components/VideoPlayer.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, RefreshCw, AlertCircle } from "lucide-react";

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
      } else {
        videoRef.current.play().catch((error) => {
          console.error("播放失败:", error);
          setHasError(true);
        });
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error("播放控制错误:", error);
      setHasError(true);
    }
  };

  // 重试加载视频
  const retryLoad = () => {
    if (videoRef.current) {
      setHasError(false);
      setRetryCount((prev) => prev + 1);
      videoRef.current.load();
    }
  };

  // 初始化视频加载
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      console.log("视频可以播放");
      setIsLoaded(true);
      setHasError(false);

      // 自动播放逻辑
      if (autoPlay) {
        const playPromise = video.play();

        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log("自动播放成功");
              setIsPlaying(true);
            })
            .catch((error) => {
              console.warn("自动播放被阻止:", error);
              // 自动播放失败是正常的，不标记为错误
              setIsPlaying(false);
            });
        }
      }
    };

    const handleError = (e: Event) => {
      console.error("视频加载错误:", e);
      setHasError(true);
      setIsLoaded(false);
    };

    const handlePlay = () => {
      console.log("视频开始播放");
      setIsPlaying(true);
      setHasError(false);
    };

    const handlePause = () => {
      console.log("视频暂停");
      setIsPlaying(false);
    };

    const handleEnded = () => {
      console.log("视频播放结束");
      if (loop && video) {
        video.currentTime = 0;
        video.play().catch(console.error);
      }
    };

    const handleLoadedMetadata = () => {
      console.log("视频元数据加载完成");
      setIsLoaded(true);
    };

    // 添加所有事件监听器
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("error", handleError);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    // 尝试加载视频
    if (video.readyState >= 2) {
      // 视频已经部分加载
      handleCanPlay();
    }

    return () => {
      // 清理事件监听器
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("error", handleError);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [autoPlay, loop, retryCount]); // 当重试次数变化时重新初始化

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
          className={`px-3 py-1 rounded-full text-sm font-medium ${isPlaying ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}
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
          preload="auto" // 改为 auto 以提高加载速度
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
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
            <AlertCircle className="w-12 h-12 text-red-300 mb-3" />
            <p className="text-red-100 text-center mb-4">
              视频加载失败
              <br />
              <span className="text-sm">请检查网络连接或视频文件</span>
            </p>
            <button
              onClick={retryLoad}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              重试加载 (已尝试 {retryCount} 次)
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
                e.currentTarget.style.backgroundColor = isPlaying
                  ? buttonColor.hover
                  : buttonColor.hover;
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
            {hasError ? (
              <AlertCircle className="w-6 h-6 text-white" />
            ) : isPlaying ? (
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
