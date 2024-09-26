import Footer from "../components/Footer";
import Menu from "../components/Header";
import Main_Card from "../components/Main_Card";


export default function Home() {
  return (
    <>
        <div className="bg-blue-800">
          <Menu/>
          <Main_Card/>
          <Footer/>
        </div>
    </>
  );
}
