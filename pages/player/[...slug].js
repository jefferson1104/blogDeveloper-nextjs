import Head from 'next/head';
import {
  useColorModeValue,
  AspectRatio,
  Box,
  Flex,
  Text,
  Stack,
  Divider,
  Button,
} from '@chakra-ui/react';
import { getAllEpisodes } from 'src/lib/dato-cms';
import Layout from 'src/components/Layout';
import { useRouter } from 'next/router';
import { ArrowLeftIcon } from '@chakra-ui/icons';
import Footer from 'src/components/Footer';

function Player({ episode }) {
  const bg = useColorModeValue('#FFFFFF', '#1A202C');
  const router = useRouter();

  return (
    <Box bgColor={bg}>
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
        <Box pb={10}>
          <Flex justifyContent="center" alignItems="center" py={4}>
            <Flex
              px={[4, 8]}
              py={[0, 6]}
              w="full"
              maxW="1200px"
              direction="column"
            >
              <Flex justifyContent="flex-start" alignItems="center">
                <Text fontSize={[8, 16]} color="#a1a1a1">
                  <strong>DATA:</strong>
                  {new Intl.DateTimeFormat('pt-BR').format(
                    new Date(episode.createdAt),
                  )}
                </Text>
                <Divider orientation="vertical" m={5} />
                <Text fontSize={[8, 16]} color="#a1a1a1">
                  <strong>AUTOR:</strong> {episode.author.name}
                </Text>
                <Divider orientation="vertical" m={5} />
                <Text fontSize={[8, 16]} color="#a1a1a1">
                  <strong>DURAÇÃO:</strong>
                  {episode.videoTime}
                </Text>
              </Flex>
              <Text
                bgGradient="linear(to-l, #7928CA,#FF0080)"
                bgClip="text"
                fontSize={[20, 36]}
                fontWeight="extrabold"
                mb={5}
              >
                {episode.name}
              </Text>
              <Box pb={10}>
                <Stack direction="row">
                  <Flex flexDirection="column">
                    <Divider />
                    <Stack spacing={3} pt={5}>
                      <Text fontSize="xl">{episode.description}</Text>
                    </Stack>
                  </Flex>
                </Stack>
              </Box>
              <Box>
                <AspectRatio maxW="720px" ratio={16 / 9}>
                  <iframe
                    title={episode.name}
                    src={episode.videoUrl}
                    allowFullScreen
                  />
                </AspectRatio>

                <Button
                  leftIcon={<ArrowLeftIcon />}
                  colorScheme="purple"
                  variant="outline"
                  onClick={() => router.back()}
                  mt={10}
                >
                  Voltar
                </Button>
              </Box>
            </Flex>
          </Flex>
          <Footer />
        </Box>
      </Layout>
    </Box>
  );
}

export async function getServerSideProps({ params }) {
  const slug = params.slug[2];
  const idSeason = params.slug[1];

  const episodes = await getAllEpisodes(idSeason);
  const episode = episodes.find((ep) => ep.slug === slug) || null;

  if (!episode) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      episode,
    },
  };
}

export default Player;
