import cssModule from "src/styles/container.module.css";

type IProps = {
  children: React.ReactNode;
  large?: boolean;
};

export default function Container({ children, large = false }: IProps) {
  return (
    <div className={large ? cssModule.large : cssModule.default}>
      {children}
    </div>
  );
}
