"use client";
import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import Link from "next/link";

const Header = () => {
  // Khai báo state để lưu thời gian & ngày tháng
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
      const day = now.getDate().toString().padStart(2, "0");
      const month = (now.getMonth() + 1).toString().padStart(2, "0");
      const year = now.getFullYear();
      setDate(`${day}/${month}/${year}`);
    };

    const interval = setInterval(updateClock, 1000);
    updateClock();

    return () => clearInterval(interval);
  }, []);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img
            src="https://img.pikbest.com/best/video_preview_img/2309/9211443.jpg!bw700"
            alt="Logo"
            width="50"
            height="50"
          />
        </div>
        <nav className={styles.navbar}>
          <ul>
            <li><Link href="/">Trang chủ</Link></li>
            <li><Link href="/product">Chi tiết sản phẩm</Link></li>
            <li><Link href="/auction">Đấu giá</Link></li>
            <li><Link href="/about">Giới thiệu</Link></li>
            <li><Link href="/profile">Profile</Link></li>
          </ul>
        </nav>
        <div className={styles.clockcontainer}>
          <div className={styles.clock}>{time}</div>
          <div className={styles.date}>{date}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
