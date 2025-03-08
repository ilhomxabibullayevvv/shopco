import About from "../../components/About"
import Arivvals from "../../components/Arivvals"
import Browse from "../../components/Browse"
import Cloth from "../../components/Cloth"
import Customers from "../../components/Customers"
import Selling from "../../components/Selling"
import Span from "../../components/Span"

const Home = () => {
    return (
        <div>
            <Cloth />
            <Arivvals />
            <Span />
            <Selling />
            <Browse />
            <Customers />
            <About />
        </div>
    )
}

export default Home
