import { Box } from "@chakra-ui/react";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Box>inside box</Box>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
