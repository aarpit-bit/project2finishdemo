// /* REACT BOOTSTRAP */
// import { Container } from "react-bootstrap";

// /* COMPONENTS */
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import HomeScreen from "./screens/HomeScreen";
// import ProductScreen from "./screens/ProductScreen";
// import CartScreen from "./screens/CartScreen";
// import LoginScreen from "./screens/LoginScreen";
// import RegisterScreen from "./screens/RegisterScreen";
// import ProfileScreen from "./screens/ProfileScreen";
// import ShippingScreen from "./screens/ShippingScreen";
// import PaymentScreen from "./screens/PaymentScreen";
// import PlaceOrderScreen from "./screens/PlaceOrderScreen";
// import OrderScreen from "./screens/OrderScreen";
// import UserListScreen from "./screens/UserListScreen";
// import UserEditScreen from "./screens/UserEditScreen";
// import ProductListScreen from "./screens/ProductListScreen";
// import ProductEditScreen from "./screens/ProductEditScreen";
// import OrderListScreen from "./screens/OrderListScreen";

// /* REACT ROUTER */
// import { HashRouter as Router, Route } from "react-router-dom";

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Container>
//         <main className="py-3">
//           <Route exact path="/" component={HomeScreen} />

//           <Route path="/login" component={LoginScreen} />

//           <Route path="/register" component={RegisterScreen} />

//           <Route path="/profile" component={ProfileScreen} />

//           <Route path="/shipping" component={ShippingScreen} />

//           <Route path="/payment" component={PaymentScreen} />

//           <Route path="/placeorder" component={PlaceOrderScreen} />

//           <Route path="/order/:id" component={OrderScreen} />

//           <Route path="/product/:id" component={ProductScreen} />

//           <Route path="/cart/:id?" component={CartScreen} />

//           <Route path="/admin/userlist" component={UserListScreen} />

//           <Route path="/admin/user/:id/edit" component={UserEditScreen} />

//           <Route path="/admin/product/:id/edit" component={ProductEditScreen} />

//           <Route path="/admin/productlist" component={ProductListScreen} />

//           <Route path="/admin/orderlist" component={OrderListScreen} />
//         </main>
//       </Container>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

/* REACT BOOTSTRAP */
import { Container } from "react-bootstrap";

/* COMPONENTS */
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";

/* REACT ROUTER */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <main className="py-3">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/shipping" element={<ShippingScreen />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/placeorder" element={<PlaceOrderScreen />} />
            <Route path="/order/:id" element={<OrderScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart/:id?" element={<CartScreen />} />
            <Route path="/admin/userlist" element={<UserListScreen />} />
            <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
            <Route path="/admin/product/:id/edit" element={<ProductEditScreen />} />
            <Route path="/admin/productlist" element={<ProductListScreen />} />
            <Route path="/admin/orderlist" element={<OrderListScreen />} />
          </Routes>
        </main>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
