import {
  useColorModeValue,
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Icon,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import useAuth from 'src/hooks/useAuth';
import withAuthModal from 'src/components/Auth';
import { MdPlayArrow } from 'react-icons/md';

const SerieViewHeader = ({ serie, openAuthModal }) => {
  const bg = useColorModeValue('#FFFFFF', '#1A202C');
  const { user } = useAuth();
  const router = useRouter();

  const handleStartNow = () => {
    if (!user) {
      openAuthModal();
    } else {
      router.push(
        `/player/${serie.slug}/${serie.seasons[0].id}/${serie.seasons[0].episodes[0].slug}`,
      );
    }
  };

  return (
    <Box bgColor={bg}>
      <Flex justifyContent="center" alignItems="center" py={8}>
        <Flex px={[4, 8]} w="full" maxW="1200px" direction="column">
          <Heading as="h3" size="lg">
            {serie.name}
          </Heading>
          <Text fontSize="sm" my={4}>
            {`Última atualização ${new Intl.DateTimeFormat('pt-BR').format(
              new Date(serie.updatedAt),
            )} `}
          </Text>
          <Box>
            <Button
              leftIcon={<Icon as={MdPlayArrow} w={6} h={6} />}
              onClick={handleStartNow}
              variant="outline"
              colorScheme="purple"
            >
              Começar agora
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default withAuthModal(SerieViewHeader);
