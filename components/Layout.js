import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import Topbar from './Topbar';

function Layout({ children }) {
  const bgColor = useColorModeValue('#F6F6F8', '#1A202C');

  return (
    <Box bg={bgColor} minH="100vh">
      <Topbar />
      <Flex flexDir="column" pt="62px">
        {children}
      </Flex>
    </Box>
  );
}

export default Layout;
