import Head from 'next/head';
import { HomePage } from '../src/components/home/home-page';

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Flight Development</title>
        <meta name="description" content="Official page for flight development" />
        <link rel="icon" href="/images/logoflightlight.png" />
      </Head>

      <HomePage data={data} />
    </div>
  );
}

export async function getServerSideProps() {
  const { events_categories } = await import('/data/data.json');
  return {
    props: {
      data: events_categories,
    },
  };
}
