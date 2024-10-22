import cssModule from "src/styles/Contact.module.css";
export default function Contact() {
  return (
    <div className={cssModule.stack}>
      <h3 className={cssModule.heading}>
        Contact
        <address>cube@web.mail.addresss</address>
      </h3>
    </div>
  );
}
