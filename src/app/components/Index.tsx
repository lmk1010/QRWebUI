import Head from "next/head";
export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold text-blue-600">
                Hello, Tailwind on Next.js 13!
            </h1>
            <p className="mt-4 text-gray-600">
                If you see blue text, Tailwind is working!
            </p>
        </main>
    )
}
