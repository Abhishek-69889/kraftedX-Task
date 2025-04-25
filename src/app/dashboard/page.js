"use client";

import { useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/login");
    }
  }, [status, router]);

  if (status === "loading" || !session) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        Loading...
      </div>
    );
  }

  const nameOrEmail = session.user.name ?? session.user.email;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-8">
      <h1 className="text-3xl font-bold mb-4 text-white">
        Welcome, {nameOrEmail}!
      </h1>
      <button
        onClick={async () => {
          await signOut({ redirect: false });
          router.push("/auth/login");
        }}
        className="mt-4 bg-red-600 text-white py-2 px-6 rounded hover:bg-red-700 transition cursor-pointer"
      >
        Sign Out
      </button>
    </div>
  );
}
