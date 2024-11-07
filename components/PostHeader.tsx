import cssModule from "src/styles/postHeader.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import ConvertDate from "./ConvertDate";

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
      {publish && (
        <div className={cssModule.publish}>
          <FontAwesomeIcon icon={faClock} size="lg" color="var(--gray-25)" />
          <ConvertDate dateISO={publish} />
        </div>
      )}
    </div>
  );
}
