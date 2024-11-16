import Link from "next/link";
import Container from "./Container";
import cssModule from "src/styles/blueFrame.module.css";

type BlueFrameProps = {
  children: React.ReactNode;
};

export default function BlueFrame({ children }: BlueFrameProps) {
  return (
    <div className={cssModule.frame}>
      <Container>{children}</Container>

      <Link href="/blog" className={cssModule.sideBtn}>
        Recent Blog Posts
      </Link>
    </div>
  );
}
