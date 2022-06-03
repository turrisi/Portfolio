import { useParams } from "react-router-dom";
import { Contactame, ContactMe } from "../Modules/contact/contact";

const Contact = () => {
  const lamguage = useParams();
  return (
    <div className="contact">
      {lamguage.lan === "es" ? <Contactame /> : <ContactMe />}
    </div>
  );
};

export default Contact;

