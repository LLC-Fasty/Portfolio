import { Montserrat } from "next/font/google";
import "./globals.css";

const Mont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "R Bharathi Kumar",
  description: "Portfolio Made by R Bharathi Kumar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={Mont.className}>
        <div className="bg-[#f5f5f5] dark:bg-[#212121]">{children}</div>
      </body>
    </html>
  );
}
