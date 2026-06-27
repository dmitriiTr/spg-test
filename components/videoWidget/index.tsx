"use client";
import { createPortal } from "react-dom";
import Image from "next/image";
import VideoPreviewImage from "@/public/videoPreviewImage.png";
import VideoPlayButtonSvg from "@/public/playButton.svg";
import VideoPlayCircleSvg from "@/public/videoPlayCircle.svg";
import styles from "./index.module.scss";
import { useRef } from "react";

export default function VideoWidget() {
  const ref = useRef<HTMLVideoElement | null>(null);

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
      {createPortal(
        <video
          ref={ref}
          onPlay={() => {
            if (!ref.current) {
              return;
            }
            if (ref.current.requestFullscreen) {
              ref.current.requestFullscreen();
            }
            // else if (ref.current["webkitRequestFullscreen"]) {
            //   /* Safari */
            //   ref.current["webkitRequestFullscreen"]?.call();
            // } else if (ref.current.msRequestFullscreen) {
            //   /* IE11 */
            //   ref.current.msRequestFullscreen();
            // }
          }}
          className={styles.videoPlayer}
          controls
          preload="none"
        >
          <source src="/forestFootage.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>,
        document.body,
      )}
    </>
  );
}
