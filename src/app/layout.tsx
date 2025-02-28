import Header from "./components/header";
import Footer from "./components/footer";

import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <Header />
        <main>{children}</main>
        <Footer /> {/* Footer được thêm vào dưới phần main */}
      </body>
    </html>
  );
}
