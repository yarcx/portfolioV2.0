import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactMe from "./pages/ContactMe";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import ErrorPage from "./pages/ErrorPage";
import { CONTACT_ME_LINK, PROJECT_LINK, RESUME_LINK } from "./utils/constants";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={PROJECT_LINK} element={<Projects />} />
        <Route path={RESUME_LINK} element={<Resume />} />
        <Route path={CONTACT_ME_LINK} element={<ContactMe />} />
        <Route path='*' element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
