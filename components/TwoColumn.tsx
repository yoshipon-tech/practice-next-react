import cssModule from "src/styles/TwoColumn.module.css";

export function TwoColumn({ children }) {
  return <div className={cssModule.flexContainer}>{children}</div>;
}
export function TwoColumnMain({ children }) {
  return <div className={cssModule.main}>{children}</div>;
}

export function TwoColumnSidebar({ children }) {
  return <div className={cssModule.sidebar}>{children}</div>;
}
