import cssModule from "src/styles/container.module.css";

export default function Container({ children, large = false }) {
  return (
    <div className={large ? cssModule.large : cssModule.default}>
      {children}
    </div>
  );
}
