import Footer from "./Footer";
import Header from "./Header";

type IProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: IProps) {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}
