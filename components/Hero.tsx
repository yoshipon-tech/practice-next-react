import cssModule from "@/styles/hero.module.css";
import Image from "next/image";
import cube from "images/cube.jpg";

export type IProps = {
  title: string;
  subtitle: string;
  imageOn?: boolean;
};

export default function Hero({ title, subtitle, imageOn = false }: IProps) {
  return (
    <div className={cssModule.flexContainer}>
      <div className={cssModule.text}>
        <h1 className={cssModule.title}>{title}</h1>
        <p className={cssModule.subtitle}>{subtitle}</p>
      </div>
      {imageOn && (
        <figure className={cssModule.image}>
          <Image
            src={cube}
            alt=""
            layout="responsive"
            sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw"
            priority
            placeholder="blur"
          />
        </figure>
      )}
    </div>
  );
}
