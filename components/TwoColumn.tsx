import cssModule from "src/styles/TwoColumn.module.css";
type IProps = {
  children: React.ReactNode;
};

export function TwoColumn({ children }: IProps) {
  return <div className={cssModule.flexContainer}>{children}</div>;
}
export function TwoColumnMain({ children }: IProps) {
  return <div className={cssModule.main}>{children}</div>;
}

export function TwoColumnSidebar({ children }: IProps) {
  return <div className={cssModule.sidebar}>{children}</div>;
}
