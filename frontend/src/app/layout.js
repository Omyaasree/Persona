import "./globals.css";
import AppShell from "../components/AppShell";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
