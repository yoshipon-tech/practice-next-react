import cssModule from "@/styles/hero.module.css";

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
      {imageOn && <figure>[画像]</figure>}
    </div>
  );
}
