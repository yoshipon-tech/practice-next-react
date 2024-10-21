import Container from "./Container";
import Logo from "./Logo";
import Nav from "./nav";
import cssModule from "src/styles/header.module.css";

export default function Header() {
  return (
    <header>
      <Container large>
        <div className={cssModule.flexContainer}>
          <Logo boxOn />
          <Nav />
        </div>
      </Container>
    </header>
  );
}
