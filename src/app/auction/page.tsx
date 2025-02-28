"use client";
import React, { useState } from "react";
import AuctionItem from "./components/AuctionItem";
import BidHistory from "./components/BidHistory";
import BidForm from "./components/BidForm";
import styles from "./auction.module.css";

interface Bid {
  user: string;
  amount: number;
}

const AuctionPage: React.FC = () => {
  // State lưu lịch sử đấu giá
  const [bidHistory, setBidHistory] = useState<Bid[]>([
    { user: "VPA-HFEC15", amount: 50000000 },
    { user: "VPA-QRU2D", amount: 45000000 }
  ]);

  // Hàm thêm giá thầu mới
  const addBid = (newBid: Bid) => {
    const highestBid = bidHistory.length > 0 ? bidHistory[0].amount : 0;
    if (!newBid?.user?.trim() || newBid.amount <= highestBid) {
      console.error("Lỗi: Giá thầu không hợp lệ", newBid);
      return;
    }
    setBidHistory((prev) => [newBid, ...prev]);
  };

  return (
    <div className={styles.container}>
      <AuctionItem />
      <div className={styles.auctionContainer}>
        
        <BidHistory bidHistory={bidHistory} />
        
        <BidForm addBid={addBid} bidHistory={bidHistory} />
      </div>
    </div>
  );
};

export default AuctionPage;
