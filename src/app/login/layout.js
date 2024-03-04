import "../input.css";

export const metadata = {
  title: "Test",
  description: "Let's hope this works",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-800">{children}</body>
    </html>
  );
}