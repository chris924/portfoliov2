import { Link } from "@nextui-org/link";
import { Navbar } from "@/components/navbar";
import FallingBackground from "@/components/animations/fallingbackground";
import { useState } from "react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  return (
    <>
      {!isAnimationComplete ? (
        <FallingBackground onComplete={() => setIsAnimationComplete(true)} />
      ) : (
        <div className="relative flex flex-col min-h-screen">
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: "url('/images/darkbg-lowest-res.jpg')"
            }}
          />
          {/* Content */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <Navbar />
            <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://nextui-docs-v2.vercel.app?utm_source=next-pages-template"
                title="nextui.org homepage"
              >
              </Link>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}