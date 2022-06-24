import { useParams } from "react-router-dom";
import {About,Acerca} from "../components/about/about"

const Yo = () => {
  const lamguage = useParams();
  return (
    <div className="abaut">
      {lamguage.lan === "es" ? <Acerca /> : <About />}
    </div>
  );
};

export default Yo;
 
