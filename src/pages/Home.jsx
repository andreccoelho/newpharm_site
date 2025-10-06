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
        <section id={"banner"}><Banner/></section>
        <section id={"sobre"}><SobreNos/></section>
        <section id={"produtos"}><NossosProdutos/></section>
        <section id={"como-funciona"}><ComoFunciona/></section>
        <section id={"por-que-nos"}><PorQueEscolher/></section>
    </Base>
)
}

export default Home