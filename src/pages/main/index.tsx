import React from 'react';
import { Box, Container, Text } from '@chakra-ui/react';

const Main = () => {
  return (
    <Container maxW="7xl">
      <Box bg='teal' w="100%" p={4} color="white">
        <Text>
          «Жизнь - это путь. У одних это путь до булочной и обратно, у других - кругосветное путешествие.»
          «Хватит думать о ямах на дороге, наслаждайся приключением»
        </Text>
      </Box>
    </Container>
  );
};

export default Main;
