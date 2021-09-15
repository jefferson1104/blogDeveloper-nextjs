import Layout from 'src/components/Layout';
import {
  Avatar,
  Box,
  Flex,
  Heading,
  Text,
  Icon,
  Stack,
  Link,
} from '@chakra-ui/react';
import {
  SiInstagram,
  SiLinkedin,
  SiGithub,
  SiGooglechrome,
} from 'react-icons/si';

function About() {
  return (
    <Layout>
      <Box>
        <Flex
          justifyContent="center"
          alignItems="center"
          h={['20vh', '40vh']}
          w="100%"
          minW="100%"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          direction="column"
        >
          <Heading as="h3" size="xl" mb={2}>
            @jeffersonsjunior
          </Heading>
          <Stack direction="row" spacing={2}>
            <Link href="https://www.instagram.com/jeffersonsjunior">
              <Icon w={6} h={6} as={SiInstagram} />
            </Link>
            <Link href="https://www.linkedin.com/in/jeffersonsjunior">
              <Icon w={6} h={6} as={SiLinkedin} />
            </Link>
            <Link href="https://github.com/jefferson1104">
              <Icon w={6} h={6} as={SiGithub} />
            </Link>
            <Link href="https://soaresdev.com">
              <Icon w={6} h={6} as={SiGooglechrome} />
            </Link>
          </Stack>
        </Flex>
        <Flex justify="center">
          <Flex
            w="full"
            maxW="1200px"
            px={[4, 8]}
            direction="column"
            position="relative"
          >
            <Box top="-8" position="absolute">
              <Avatar
                size="xl"
                src="https://avatars.githubusercontent.com/u/48356215?v=4"
              />
            </Box>
            <Box ml="105px" mt={1}>
              <Heading as="h3" size="md">
                Jefferson Soares
              </Heading>
              <Text fontSize="sm">Fullstack Developer</Text>
            </Box>
            <Box mt={10}>
              <Text fontSize="sm">
                Profissional apaixonado por tecnologia e um eterno aprendiz.
                Constantemente compartilhando conhecimentos no meu{' '}
                <strong>blog.soaresdev.com</strong> para ajudar a comunidade de
                devs. Experiência em desenvolvimento de software back-end,
                front-end e mobile. Atuei como desenvolvedor web com PHP e
                Laravel, hoje eu atuo como dev front-end utilizando a tecnologia
                React.js em uma das maiores empresas do setor de Loyalt
                Marketplace do Brasil.
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Layout>
  );
}

export default About;
