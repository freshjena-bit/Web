import "./globals.css";

export const metadata = {
  title: "Public Archive Pro",
  description: "Open Data & Public Resources",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
