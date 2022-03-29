import type { NextPage } from 'next';
import Link from 'next/link';

const NextLink: NextPage = () => {
  return (
    <>
      <div style={{ margin: 'auto', textAlign: 'center' }}>
        <h1>Next/Link</h1>
        <h3>Did you notice something different?</h3>
        <div>
          <Link href={'/'}>Go back</Link>
        </div>
      </div>
    </>
  );
};

export default NextLink;
