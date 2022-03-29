import type { NextPage } from 'next';

/* eslint-disable @next/next/no-html-link-for-pages */

const DirectLinkPage: NextPage = () => {
  return (
    <>
      <div style={{ margin: 'auto', textAlign: 'center' }}>
        <h1>Direct Link</h1>
        <h3>Did you notice something?</h3>
        <div>
          <a href="/">Go back</a>
        </div>
      </div>
    </>
  );
};

export default DirectLinkPage;
