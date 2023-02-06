import { Route, Routes } from "react-router-dom";

import AllMeetupsPages from "./pages/AllMeetups";
import NewMeetupPages from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPages />}></Route>
        <Route path="/new-meetup" element={<NewMeetupPages />}></Route>
        <Route path="/favorites" element={<FavoritesPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
