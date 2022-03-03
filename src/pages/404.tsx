import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const FourOhFour: NextPage = () => {
  return (
    <>
      <Head>
        <title>Oh No!</title>
        <meta name="description" content="404 - Not found." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col justify-center items-center w-full h-screen">
        <h3 className="text-2xl font-semibold">OH NO!</h3>
        <h1 className="text-9xl m-5">4😭4</h1>
        <p className="m-2">How did you get here?</p>
        <Link href="/" passHref>
          <p className="cursor-pointer text-sm text-purple-600 hover:text-purple-900">
            Go back home
          </p>
        </Link>
      </div>
    </>
  );
};

export default FourOhFour;
