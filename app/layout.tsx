import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ACCA Tuition | Ahmedabad",
  description:
    "Structured ACCA exam prep — FA, MA, BT, TX, FR, FM, AA, ATX, SBL, SBR. 1:1 calls, live batches, exam-focused answer drafting.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
