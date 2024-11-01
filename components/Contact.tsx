import cssModule from "src/styles/Contact.module.css";
import Social from "./Social";
export default function Contact() {
  return (
    <div className={cssModule.stack}>
      <h3 className={cssModule.heading}>
        <Social iconSize="30px" />
        <address>cube@web.mail.addresss</address>
      </h3>
    </div>
  );
}
