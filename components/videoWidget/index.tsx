"use client";
import Image from "next/image";
import VideoPreviewImage from "@/public/videoPreviewImage.png";
import VideoPlayButtonSvg from "@/public/playButton.svg";
import VideoPlayCircleSvg from "@/public/videoPlayCircle.svg";
import styles from "./index.module.scss";
import { useEffect, useRef } from "react";

export default function VideoWidget() {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && ref.current) {
        ref.current.pause();
        ref.current.currentTime = 0;
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <>
      <div
        onClick={() => {
          if (ref.current) {
            ref.current.play();
          }
        }}
        className={styles.videoPreview}
      >
        <div className={styles.videoPlayButton}>
          <Image fill src={VideoPlayButtonSvg} alt="play" />
        </div>
        <div className={styles.videoCircleButton}>
          <Image fill src={VideoPlayCircleSvg} alt="playCircle" />
        </div>
        <div className={styles.videoPreviewImage}>
          <Image fill src={VideoPreviewImage} alt="preview" />
        </div>
      </div>
      <video
        ref={ref}
        onPlay={() => {
          if (!ref.current) {
            return;
          }
          if (ref.current.requestFullscreen) {
            ref.current.requestFullscreen();
            // @ts-expect-error: safari api
          } else if (ref.current["webkitRequestFullscreen"]) {
            // @ts-expect-error: safari api
            ref.current["webkitRequestFullscreen"]?.call();
            // @ts-expect-error: ie api
          } else if (ref.current["msRequestFullscreen"]) {
            // @ts-expect-error: ie api
            ref.current.msRequestFullscreen?.call();
          }
        }}
        className={styles.videoPlayer}
        controls
        preload="none"
      >
        <source src="/forestFootage.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
}
