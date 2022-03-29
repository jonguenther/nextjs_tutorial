import type { NextPage } from 'next';
import Link from 'next/link';

/* eslint-disable @next/next/no-html-link-for-pages */

const Home: NextPage = () => {
  return (
    <>
      <div style={{ margin: 'auto', textAlign: 'center' }}>
        <h1>Hello world</h1>
        <div>
          <a href="/directlink">This is a direct link</a>
          <Link href={'/nextlink'}>
            <a>
              This is a <code>next/link</code> link
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
