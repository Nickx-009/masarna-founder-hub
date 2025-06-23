import { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

const ServerError = () => {
  useEffect(() => {
    console.error("500 Error: Server-side error occurred");
  }, []);

  return (
    <>
      <Head>
        <title>Server Error | Masarna</title>
        <meta name="description" content="An unexpected server error has occurred. Our team has been notified and is working to fix the issue." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center bg-white p-12 rounded-lg shadow-md max-w-md">
          <h1 className="text-6xl font-bold text-masarna-orange mb-4">500</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Server Error</h2>
          <p className="text-gray-600 mb-8">
            Something went wrong on our servers. We've been notified and are working to fix the issue.
          </p>
          <Link href="/" className="bg-masarna-orange hover:bg-masarna-orange/90 text-white px-6 py-3 rounded-lg inline-block transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServerError;