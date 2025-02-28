"use client";
import React, { useState } from "react";
import BidForm from "./BidForm";
import BidHistory from "./BidHistory";
import styles from "../auction.module.css";

interface Bid {
  user: string;
  amount: number;
}

const AuctionPage: React.FC = () => {
  const [bidHistory, setBidHistory] = useState<Bid[]>([
   
  ]);

  const addBid = (newBid: Bid) => {
    if (!newBid?.user || newBid.amount <= (bidHistory[0]?.amount || 0)) {
      console.error("Dữ liệu newBid không hợp lệ hoặc thấp hơn giá hiện tại:", newBid);
      return;
    }
    setBidHistory((prevHistory) => [newBid, ...prevHistory]);
  };

  return (
    <div className={styles.auctionContainer}>
      <h1>🔖 Đấu giá biển số xe</h1>
      <div className={styles.bidSection}>
        <BidForm addBid={addBid} bidHistory={bidHistory} />
        <BidHistory bidHistory={bidHistory} />
      </div>
    </div>
  );
};