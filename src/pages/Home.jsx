import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect } from "react";
import Banner from "../components/Banner/Banner";

const Home = () => {
  return (
    <Base>
        <Banner/>
    </Base>
  )
}

export default Home