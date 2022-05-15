import Header from "../../components/Header";
import Error from "../../components/Error";
import Footer from "../../components/Footer";

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