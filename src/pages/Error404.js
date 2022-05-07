import Header from "../components/Header/Header";
import Error from "../components/Error/Error";
import Footer from "../components/Footer/Footer";

const Error404 = ({activePage, setActivePage}) => {
    return (
        <>
            <Header activePage={activePage} setActivePage={setActivePage} />
            <Error />
            <Footer />
        </>
    );
}
export default Error404;