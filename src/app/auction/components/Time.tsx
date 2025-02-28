"use client";
import React, { useEffect, useState } from "react";
import styles from "../auction.module.css";

const Timer = ({ timeLeft }: { timeLeft: number }) => {
  const [time, setTime] = useState(timeLeft);
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    if (time > 0) {
      const interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            setIsTimeUp(true); // Khi thời gian về 0, kích hoạt thông báo
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, []);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className={styles.timer}>
      {isTimeUp ? (
        <div className={styles.timeUpMessage}>⚠️ Đã hết giờ đấu giá!</div>
      ) : (
        <>
          ⏳ Thời gian còn lại: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </>
      )}
    </div>
  );
};

export default Timer;
