import Image from "next/image";
import Header from "./dashboard/_components/Header";
import Footer from "./dashboard/_components/Footer";
import { AtomIcon, Edit, Share2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Image
        src="/grid.svg"
        className="absolute z-[-10] w-full h-full object-cover"
        layout="fill"
        objectFit="cover"
        alt="Background Grid"
      />
      <Header />
<section className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-6 md:py-16 md:px12">
  <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
    <a
      href="https://github.com/keshavgarg24/interviewprep.AI"
      className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
      role="alert"
    >
      <span className="text-xs bg-gray-100 rounded-full text-white px-4 py-1.5 mr-3">
        <svg
          className="mr-2 -ml-1 w-8 h-8"
          fill="gold"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 15l-5.39 2.834 1.038-5.65L1 7.83l5.695-.79L10 2.5l3.305 4.54 5.695.79-4.648 4.355 1.038 5.65z" />
        </svg>
      </span>
      <span className="text-sm font-medium">Star this repository</span>
    </a>
    <h1 className="mb-4 text-6xl font-black tracking-tight leading-none text-blue-700 md:text-5xl lg:text-6xl dark:text-white">
      Enhance Your Interviews with Personalized AI Coaching
    </h1>
    <p className="mb-8 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
      Boost your job prospects with AI-enhanced interview preparation
    </p>
    <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
      <Link
        href="/dashboard"
        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-700"
      >
        Get Started
        <svg
          className="ml-2 -mr-1 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </Link>
    </div>
  </div>
</section>
<div className="flex justify-center items-center min-h-screen p-2 py-2">
  <div className="border rounded-lg bg-gray-100 p-4 max-w-4xl mx-auto">
    <section className="py-8 px-4 text-center lg:py-16 lg:px-12">
      <h2 className="font-extrabold text-5xl">What Users have experienced after using interviewprep.AI</h2>
      <div className="mt-8 flex flex-col lg:flex-row gap-4 justify-center">
        <div className="flex flex-col items-center">
          <h3 className="text-sm text-gray-400">Without interviewprep.AI</h3>
          <ul className="mt-4 text-lg font-normal text-gray-500">
            <li className="mb-4">
              <div className="inline-block border rounded-lg bg-red-100 p-3">
              <span className="text-red-600">✖ Unprepared</span>
              </div>
            </li>
            <li className="mb-4">
            <div className="inline-block border rounded-lg bg-red-100 p-3">
              <span className="text-red-600">✖ Nervous</span>
              </div>
            </li>
            <li className="mb-4">
            <div className="inline-block border rounded-lg bg-red-100 p-3">
              <span className="text-red-600">✖ Ghosted</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-sm text-gray-400">With interviewprep.AI</h3>
          <ul className="mt-4 text-lg font-normal text-gray-500">
            <li className="mb-4">
            <div className="inline-block border rounded-lg bg-green-100 p-3">
              <span className="text-green-600">✔ Organized and ready</span>
            </div>
            </li>
            <li className="mb-4">
            <div className="inline-block border rounded-lg bg-green-100 p-3">
              <span className="text-green-600">✔ Confident answers</span>
            </div>
            </li>
            <li className="mb-4">
              <div className="inline-block border rounded-lg bg-green-100 p-3">
              <span className="text-green-600">✔ Receive final offers</span>
            </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</div>
<div className="flex justify-center items-center p-2 mb-8">
  <div className="border rounded-lg bg-gray-100 p-4 max-w-4xl mx-auto">
  <section className="py-8 px-4 text-center lg:py-16 lg:px-12">
    <h2 className="font-extrabold text-3xl">Ready to excel in refining your interview skills?</h2>
    <Link href="/dashboard">
    <div className="mt-6 inline-block p-3 border rounded-lg border-blue-600 bg-blue-100 cursor-pointer">
      <h2 className="text-md text-blue-600">Try now</h2>
    </div>
    </Link>
  </section>
  </div>
</div>

<Footer />
    </div>
  );
}
