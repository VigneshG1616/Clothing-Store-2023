import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation.component";
import Home from "./routes/home/Home.component";
import Shop from "./routes/shop/Shop.component";
import UserAuth from "./routes/auth/UserAuth.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="userauth" element={<UserAuth />} />
      </Route>
    </Routes>
  );
};

export default App;
