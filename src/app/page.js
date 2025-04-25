import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-black">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">Welcome to My App</h1>
        <Link
          href="/auth/login"
          className="inline-block bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
        >
          Go to Login
        </Link>
        <Link
          href="/interactive"
          className="inline-block bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition ml-4"
        >
          Try Interactive BG
        </Link>
      </div>
    </main>
  );
}
