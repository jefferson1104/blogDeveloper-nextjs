import { Flex, Box } from '@chakra-ui/react';

function Topbar() {
  const bgColor = '#FFF';
  const color = '#1A202C';
  const borderColor = '#DDD';

  return (
    <Flex
      w="full"
      position="fixed"
      zIndex={99999}
      bg={bgColor}
      color={color}
      borderBottom={`1px solid ${borderColor}`}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        w="full"
        maxW="1200px"
        margin="0 auto"
        h="60px"
        px={[4, 8]}
      >
        <Box>SoaresDev</Box>
        <Box>Login</Box>
      </Flex>
    </Flex>
  );
}

export default Topbar;
