import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Collection from "../Pages/Collection"
import Login from "../Pages/Login"
import Product from "../Pages/Product"


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