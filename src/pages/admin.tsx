import Footer from "../components/Footer";
import Menu from "../components/Header";
import Main_List from "../components/Main_List";


export default function Home() {
    return (
        <>
            <div className="bg-blue-800">
                <Menu />
                <Main_List />
                <Footer />
            </div>
        </>
    );
}
