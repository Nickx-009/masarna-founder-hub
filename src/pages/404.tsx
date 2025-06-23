import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      router.asPath
    );
  }, [router.asPath]);

  return (
    <>
      <Head>
        <title>Page Not Found | Masarna</title>
        <meta name="description" content="The page you are looking for does not exist. Please check the URL or navigate back to the homepage." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center bg-white p-12 rounded-lg shadow-md max-w-md">
          <h1 className="text-6xl font-bold text-masarna-orange mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link href="/" className="bg-masarna-orange hover:bg-masarna-orange/90 text-white px-6 py-3 rounded-lg inline-block transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;