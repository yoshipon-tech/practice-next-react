import cssModule from "src/styles/postHeader.module.css";

type PostHeaderProps = {
  title: string;
  subtitle: string;
  publish?: any;
};

export default function PostHeader({
  title,
  subtitle,
  publish,
}: PostHeaderProps) {
  return (
    <div className={cssModule.stack}>
      <p className={cssModule.subtitle}>{subtitle}</p>
      <h1 className={cssModule.title}>{title}</h1>
      {publish && <div className={cssModule.publish}>{publish}</div>}
    </div>
  );
}
