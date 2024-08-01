 
import "./globals.css";
 
export const metadata = {
  title: "hyjang's portfolio",
  description: "Next.js를 사용한 포트폴리오",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
