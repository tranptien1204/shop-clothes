import { Route, Router, Routes } from "react-router-dom"
import Home from "../Pages/Home"
// import About from "../Pages/About"
import Collection from "../Pages/Collection"
import Login from "../Pages/Login"
// import Contact from "../Pages/Contact"
// import PlaceOrder from "../Pages/PlaceOrder"
// import Cart from "../Pages/Cart"
import Product from "../Pages/Product"
import ScrollToTop from "../Components/ScrollToTop"
// import UserInfo from "../Pages/UserInfo"
// import EditInfo from "../Pages/EditInfo"


const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}
export default Routers