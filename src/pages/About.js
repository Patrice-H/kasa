import Header from "../components/Header/Header";
import DropDownsSection from "../components/DropDownsSection/DropDownsSection";
import Footer from "../components/Footer/Footer";
import Banner from "../components/Banner/Banner";

const About = ({activePage, setActivePage}) => {
    return (
        <>
            <Header activePage={activePage} setActivePage={setActivePage} />
            <Banner activePage={activePage} />
            <DropDownsSection />
            <Footer />
        </>
    );
}

export default About;