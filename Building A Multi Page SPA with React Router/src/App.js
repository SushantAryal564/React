import { Route, Routes, Navigate } from "react-router-dom";
import Welcome from "./Pages/Welcom";
import Products from "./Pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./Pages/productDetail";
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Navigate replace to="/welcome" />} />
          <Route path="/welcome" element={<Welcome />}>
            <Route path="new-user" element={<p>Welcome, new User</p>} />
            <Route path="existing-user" element={<p>Welcome,back</p>} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productID" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

// our-domain-com/ =>component A
// our-domain.com/produccts => component B
