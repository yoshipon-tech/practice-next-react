import cssModule from "src/styles/container.module.css";

export default function Container({ children }) {
  return <div className={cssModule.default}>{children}</div>;
}
