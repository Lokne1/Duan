"use client";
import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-container"]}>
        {/* Thông tin liên hệ */}
        <div className={styles["footer-left"]}>
          <h2>Công ty Đấu giá Hợp danh Việt Nam</h2>
          <p><span className={styles.highlight}>Hotline:</span> 1900.0555.15</p>
          <p><span className={styles.highlight}>Đấu giá đồ cổ:</span> dgbs@vpa.com.vn</p>
          <p><span className={styles.highlight}>Liên hệ hợp tác:</span> info@vpa.com.vn</p>
          <p>Đại diện: Nguyễn Hữu Lộc</p>
        </div>

        {/* Liên kết mạng xã hội và chính sách */}
        <div className={styles["footer-right"]}>
          <h2>Theo dõi chúng tôi trên</h2>
          <div className={styles["social-icons"]}>
            <img src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Black-Logo.wine.svg" alt="Facebook" />
            <img src="https://brandlogos.net/wp-content/uploads/2021/11/zalo-logo.png" alt="Zalo" />
          </div>
          <h2>Chính sách</h2>
          <p className="text-sm">Chính sách bảo vệ dữ liệu cá nhân</p>
        </div>
      </div>
      <hr className={styles["divider"]} />
    </footer>
  );
};

export default Footer;
