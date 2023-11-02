import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>theteacher.info</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="h-screen w-full bg-white dark:bg-gray-800">
        <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4 dark:border-gray-600 dark:bg-gray-800">
          <section className="flex text-xl font-semibold text-gray-800 dark:text-white">
            theteacher.info
          </section>
        </header>
        <main className="grid h-[85dvh] grid-cols-2 gap-4 p-8">
          <div className="flex flex-col items-center justify-center space-y-2">
            <svg
              className=" h-32 w-32 text-gray-500 dark:text-gray-400"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            <Link
              className="text-2xl text-gray-800 hover:text-blue-500 dark:text-white dark:hover:text-blue-300"
              href="/Programming-Development"
            >
              Programming and Development
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <svg
              className=" h-32 w-32 text-gray-500 dark:text-gray-400"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
              <path d="m15 5 4 4" />
            </svg>
            <Link
              className="text-2xl text-gray-800 hover:text-blue-500 dark:text-white dark:hover:text-blue-300"
              href="/Architecture-data-comms-and-applications"
            >
              Architecture
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <svg
              className=" h-32 w-32 text-gray-500 dark:text-gray-400"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            <Link
              className="text-2xl text-gray-800 hover:text-blue-500 dark:text-white dark:hover:text-blue-300"
              href="/Programmed-Solution"
            >
              Programmed Solution to a Problem
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <svg
              className=" h-32 w-32 text-gray-500 dark:text-gray-400"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <Link
              className="text-2xl text-gray-800 hover:text-blue-500 dark:text-white dark:hover:text-blue-300"
              href="/Database Handbook"
            >
              Database Handbook
            </Link>
          </div>
        </main>
        <footer className="flex items-center justify-end border-t border-gray-200 bg-white px-6 py-4 dark:border-gray-600 dark:bg-gray-800">
          Made by rcn.sh
        </footer>
      </section>
    </>
  );
}
