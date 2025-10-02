import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect } from "react";
import Banner from "../components/Banner/Banner";
import SobreNos from "../components/SobreNos/SobreNos";
import NossosProdutos from "../components/NossosProdutos/NossosProdutos";
import ComoFunciona from "../components/ComoFunciona/ComoFunciona";
import PorQueEscolher from "../components/PorQueEscolher/PorQueEscolher";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <Base>
        <Banner/>
        <SobreNos/>
        <NossosProdutos/>
        <ComoFunciona/>
        <PorQueEscolher/>
        <Footer/>
    </Base>
  )
}

export default Home