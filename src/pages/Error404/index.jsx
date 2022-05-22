import Header from "../../components/Header";
import Error from "../../components/Error";
import Footer from "../../components/Footer";

/**
 * Component that assembles multiple components and returns the error 404 page
 * 
 * @component
 * @see {@link Header}
 * @see {@link Error}
 * @see {@link Footer}
 * @returns A function that returns the page
 */
const Error404 = () => {
    return (
        <>
            <Header />
            <Error />
            <Footer />
        </>
    );
}
export default Error404;