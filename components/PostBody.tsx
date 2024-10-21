import cssModule from "src/styles/PostBody.module.css";

export default function PostBody({ children }) {
  return <div className={cssModule.stack}>{children}</div>;
}
