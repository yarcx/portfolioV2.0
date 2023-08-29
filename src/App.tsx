import { useState } from "react";
import "./App.css";
import { Box, Heading } from "@chakra-ui/react";

function App() {
  const [count] = useState(2);

  return (
    <Box bg='brand.100' h='100dvh'>
      <Heading>The Begining ove portfolio version {count}</Heading>
    </Box>
  );
}

export default App;
