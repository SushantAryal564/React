import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./Pages/Welcom";
import Products from "./Pages/Products";
import MainHeader from "./components/MainHeader";
function App() {
  return (
    <div>
      <MainHeader />
      <man>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/products" element={<Products />}></Route>
        </Routes>
      </man>
    </div>
  );
}

export default App;

// our-domain-com/ =>component A
// our-domain.com/produccts => component B
