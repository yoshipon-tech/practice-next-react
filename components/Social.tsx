import cssModule from "src/styles/Social.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

type IProps = {
  iconSize?: string;
};

export default function Social({ iconSize }: IProps) {
  return (
    <ul className={cssModule.list} style={{ fontSize: iconSize ?? "24px" }}>
      <li>
        <a href="https://twitter.com/">
          <FontAwesomeIcon icon={faTwitter} />
          <span className="sr-only">X</span>
        </a>
      </li>

      <li>
        <a href="https://facebook.com/">
          <FontAwesomeIcon icon={faFacebook} />
          <span className="sr-only">Facebook</span>
        </a>
      </li>
      <li>
        <a href="https://github.com">
          <FontAwesomeIcon icon={faGithub} />
          <span className="sr-only">Github</span>
        </a>
      </li>
    </ul>
  );
}
