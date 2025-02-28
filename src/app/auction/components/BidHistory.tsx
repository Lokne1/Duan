"use client";
import React from "react";
import styles from "../auction.module.css";

interface BidHistoryProps {
  bidHistory: { user: string; amount: number }[];
}

const BidHistory: React.FC<BidHistoryProps> = ({ bidHistory }) => {
  return (
    <div className={styles.bidHistory}>
      <h3>📜 Diễn biến đấu giá</h3>
      <div className={styles.scrollContainer}>
        <ul>
          {bidHistory.map((bid, index) => (
            <li key={index}>
              {bid.user} - {bid.amount ? bid.amount.toLocaleString() : "0"} đ
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BidHistory;
