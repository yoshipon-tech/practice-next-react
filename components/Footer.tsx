import Container from "./Container";
import Logo from "./Logo";
import cssModule from "src/styles/footer.module.css";
import Social from "./Social";

export default function Footer() {
  return (
    <footer className={cssModule.wrapper}>
      <Container>
        <div className={cssModule.flexContainer}>
          <Logo />
          <Social />
        </div>
      </Container>
    </footer>
  );
}
