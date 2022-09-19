import type { AppProps } from 'next/app';

import { AnimatePresence } from 'framer-motion';

import Layout from '../components/layouts/main';
import Chakra from '../components/Chakra';
import Fonts from '../components/Fonts';

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
}

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Chakra cookies={null}>
      <Fonts />
      <Layout seoTitle={'Oliver Patrick'} router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  );
}

export default MyApp;
