"use client";
import { Authenticated } from "convex/react";
import Header from "../components/Header";
import { NavigationProvider } from "@/lib/context/navigation";
import { useEffect, useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null;
  }

  return (
    <NavigationProvider>
      <div className="flex  h-screen">
        <Authenticated>
          <h1>Sidebar</h1>
        </Authenticated>

        <div className="bg-red-100 flex-1">
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </NavigationProvider>
  );
}
