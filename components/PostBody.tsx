import cssModule from "src/styles/PostBody.module.css";

type IProps = {
  children: React.ReactNode;
};

export default function PostBody({ children }: IProps) {
  return <div className={cssModule.stack}>{children}</div>;
}
