import type { NextPage } from 'next';
import Link from 'next/link';

/* eslint-disable @next/next/no-html-link-for-pages */

const Home: NextPage = () => {
  return (
    <>
      <div style={{ margin: 'auto', textAlign: 'center' }}>
        <h1>Hello world</h1>
        <div style={{ display: 'grid' }}>
          <a
            href="/directlink"
            style={{
              paddingBottom: '1rem',
              color: 'green',
              textDecoration: 'underline',
            }}
          >
            This is a direct link
          </a>
          <Link href={'/nextlink'}>
            <a
              style={{
                paddingBottom: '1rem',
                color: 'red',
                textDecoration: 'underline',
              }}
            >
              This is a <code>next/link</code> link
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
