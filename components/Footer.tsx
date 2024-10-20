import Container from "./Container";
import Logo from "./Logo";
import cssModule from "src/styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={cssModule.wrapper}>
      <Container>
        <div className={cssModule.flexContainer}>
          <Logo />
          [ソーシャル]
        </div>
      </Container>
    </footer>
  );
}
