import Link from "next/link";
import cssModule from "@/styles/logo.module.css";

type LogoProps = {
  boxOn?: boolean;
};
export default function Logo({ boxOn = false }: LogoProps) {
  return (
    <Link href="/" className={boxOn ? cssModule.box : cssModule.basic}>
      CUBE
    </Link>
  );
}
