import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta-sans",
});
export const metadata = {
  title: "SunCart - Summer Essentials Store",
  description: "SunCart is your ultimate destination for premium summer essentials. Shop sunglasses, outfits, skincare, and beach accessories with exclusive seasonal deals and modern shopping experience.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${plusJakartaSans.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
