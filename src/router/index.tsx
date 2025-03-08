import { Route, Routes } from "react-router"
import Home from "../page/Home"
import ProductDetails from "../page/ProductDetails"
import Category from "../page/Category"
import Cart from "../page/Cart"

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productDetails/:id" element={<ProductDetails />} />
            <Route path="/category" element={<Category />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    )
}

export default Router
