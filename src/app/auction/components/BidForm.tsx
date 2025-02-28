"use client";
import React, { useState } from "react";
import styles from "../auction.module.css";

interface BidFormProps {
  addBid: (bid: { user: string; amount: number }) => void;
  bidHistory: { user: string; amount: number }[];
}

const BidForm: React.FC<BidFormProps> = ({ addBid, bidHistory }) => {
  const [bidStep] = useState(5000000);
  const [multiplier, setMultiplier] = useState(0);

  const generateUserID = () => `VPA-${Math.random().toString(36).substr(2, 5).toUpperCase()}`;
  const currentBid = bidHistory.length > 0 ? bidHistory[0].amount : 50000000;
  const totalBid = currentBid + bidStep * multiplier;

  const handleBid = () => {
    if (totalBid <= currentBid) {
      console.error("Giá thầu phải cao hơn giá hiện tại!");
      return;
    }
    addBid({ user: generateUserID(), amount: totalBid });
    setMultiplier(0);
  };

  return (
    <div className={styles.bidContainer}>
      <div className={styles.bidBox}>
        <h3>📜 Đặt giá thầu</h3>
        <div className={styles.bidRow}>
          <span className={styles.label}>💰 Giá hiện tại:  </span>
          <span className={styles.currentBid}>{currentBid.toLocaleString()} đ</span>
        </div>

        <div className={styles.bidRow}>
          <span className={styles.label}>Bước giá</span>
          <span className={styles.bidStep}>{bidStep.toLocaleString()} đ</span>
        </div>

        <div className={styles.multiplierContainer}>
          <span className={styles.label}>×</span>
          <button onClick={() => setMultiplier(Math.max(multiplier - 1, 0))}>➖</button>
          <span className={styles.multiplier}>{multiplier}</span>
          <button onClick={() => setMultiplier(multiplier + 1)}>➕</button>
          <span className={styles.label}>=</span>
          <span className={styles.totalIncrease}>{(bidStep * multiplier).toLocaleString()} đ</span>
        </div>

        <button className={styles.bidButton} onClick={handleBid}>
          Trả giá {totalBid.toLocaleString()} đ
        </button>
      </div>
    </div>
  );
};

export default BidForm;
