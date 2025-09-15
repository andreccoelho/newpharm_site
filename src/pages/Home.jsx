import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect } from "react";
import Banner from "../components/Banner/Banner";
import SobreNos from "../components/SobreNos/SobreNos";

const Home = () => {
  return (
    <Base>
        <Banner/>
        <SobreNos/>
    </Base>
  )
}

export default Home