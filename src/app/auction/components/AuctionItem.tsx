"use client";
import React from "react";
import styles from "../auction.module.css";
import Timer from "./Time";

const AuctionItem = () => {
  return (
    <div className={styles.auctionItem}>
      <div className={styles.auctionHeader}>
        <p className={styles.auctioneer}>🧑‍⚖️ <strong>Đấu giá viên:</strong> Nguyễn Hữu Lộc</p>
        <Timer timeLeft={5} />
      </div>
      <h2>Sản phẩm đang đấu giá</h2>
      <div className={styles.plate}>hihihehe</div>
    </div>
  );
};

export default AuctionItem;
