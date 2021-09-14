import { Box, Heading } from '@chakra-ui/react';
import useAuth from 'src/hooks/useAuth';

export default function Home() {
  const { user, signin } = useAuth();

  return (
    <Box bg="gray.100" w="100%" p={4}>
      <Heading as="h2" size="3xl" isTruncated>
        Aprenda programação direto ao ponto 100% free.
      </Heading>
      <button type="button" onClick={() => signin()}>
        Entrar com github
      </button>
    </Box>
  );
}
