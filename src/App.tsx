import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactMe from "./pages/ContactMe";
import Resume from "./pages/Resume";
import ErrorPage from "./pages/ErrorPage";
import Guestbook from "./pages/Guestbook";
import { CONTACT_ME_LINK, RESUME_LINK, GUESTBOOK_LINK } from "./utils/constants";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path={PROJECT_LINK} element={<Projects />} /> */}
        <Route path={RESUME_LINK} element={<Resume />} />
        <Route path={CONTACT_ME_LINK} element={<ContactMe />} />
        <Route path={GUESTBOOK_LINK} element={<Guestbook />} />
        <Route path='*' element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
