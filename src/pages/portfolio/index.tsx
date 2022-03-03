import type { NextPage } from 'next';
import Head from 'next/head';

import Experience from '../../components/Experience/Experience';
import IntroHero from '../../components/IntroHero/IntroHero';
import Projects from '../../components/Projects/Projects';

import data from '../../../data';

const Portfolio: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Oliver Patrick (Dev) - Portfolio</title>
        <meta
          name="description"
          content="Oliver Patrick - Web Developer. Application programmer and citizen of earth."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IntroHero />
      <Experience />
      <Projects projects={data.projects} />
    </div>
  );
};

export default Portfolio;
