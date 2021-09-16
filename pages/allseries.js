import Head from 'next/head';
import { getAllFullSeries } from 'src/lib/dato-cms';
import { Heading, Flex, SimpleGrid } from '@chakra-ui/react';
import SerieCard from 'src/components/SerieCard';
import Layout from 'src/components/Layout';

function Allseries({ series }) {
  return (
    <>
      <Head>
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
              if (!document.cookie || !document.cookie.includes('nextjs-website-auth')) {
                window.location.href = "/"
              }
            `,
          }}
        />
      </Head>
      <Layout>
        <Flex id="series" justify="center" pb={20}>
          <Flex w="full" maxW="1200px" px={[4, 8]} mt={10} direction="column">
            <Heading mb={4}>Todas as séries</Heading>
            <SimpleGrid columns={[1, null, 3]} spacing="40px">
              {series.map((serie) => (
                <SerieCard serie={serie} key={serie.id} />
              ))}
            </SimpleGrid>
          </Flex>
        </Flex>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const series = await getAllFullSeries();

  return {
    props: {
      series,
    },
  };
}

export default Allseries;
