import Layout from 'src/components/Layout';
import { getAllFullSeries } from 'src/lib/dato-cms';
import SerieView from 'src/components/SerieView';
import Footer from 'src/components/Footer';

function SeriePage({ serie }) {
  return (
    <Layout
      title={serie.title}
      path={`${serie.slug}`}
      description={serie.description}
    >
      <SerieView serie={serie} />
      <Footer />
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const series = await getAllFullSeries();
  const slugs = series.map((s) => ({ params: { slug: s.slug } }));

  return {
    paths: slugs,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const series = await getAllFullSeries();
  const serie = series.find((s) => s.slug === slug) || null;

  if (!serie) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      serie,
      allSeries: series,
    },
    revalidate: 60 * 30, // 30 minutos
  };
};

export default SeriePage;
