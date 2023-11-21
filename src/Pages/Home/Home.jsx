import Services from "../../Components/Services/Services";
import About from "./About";
import Banner from "./Banner";


const Home = () => {
    return (
        <div className="my-10">
            <Banner></Banner>
            <About></About>
            <Services></Services>

        </div>
    );
};

export default Home;