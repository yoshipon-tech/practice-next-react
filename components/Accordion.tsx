import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import cssModule from "src/styles/accordion.module.css";

type AccordionProps = {
  heading: string;
  children: React.ReactNode;
};
export default function Accordion({ heading, children }: AccordionProps) {
  const [textIsOpen, setTextIsOpen] = useState(false);

  const toggleText = () => {
    setTextIsOpen((prev) => !prev);
  };

  const refText = useRef<HTMLDivElement>(null);

  return (
    <div className={textIsOpen ? cssModule.open : cssModule.close}>
      <h3 className={cssModule.heading}>
        <button onClick={toggleText}>
          {heading}
          <FontAwesomeIcon
            icon={faCircleChevronDown}
            className={cssModule.icon}
          />
        </button>
      </h3>
      <div
        className={cssModule.text}
        ref={refText}
        style={
          {
            "--text-height": refText.current
              ? `${refText.current.scrollHeight}px`
              : "0px",
          } as React.CSSProperties
        }
      >
        <div className={cssModule.textInner}>{children}</div>
      </div>
    </div>
  );
}
