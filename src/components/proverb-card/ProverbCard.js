import "./ProverbCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faVolumeUp,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";

export function ProverbCard({ proverb }) {
  console.log(
    "proverb card component called with this proverb object:",
    proverb
  );

  const { text, literalTranslation, meaning, likes, audioUrl } = proverb;

  return (
    <div className="col-md-7 mx-auto card my-2 p-0 proverb">
      <div className="text card-body p-3 text-primary">{text}</div>
      <div className="literal-translation small p-3">{literalTranslation}</div>
      <div className="actions d-flex flex-column justify-content-around align-items-center p-3">
        {/* <div className="likes">
          {likes} <FontAwesomeIcon icon={faHeart} className="text-primary" />
        </div> */}
        <div className="audioUrl">
          <a href={audioUrl}>
            <FontAwesomeIcon icon={faVolumeUp} className="" />
          </a>
        </div>
        <div className="more">
          <FontAwesomeIcon icon={faEllipsisV} className="" />
        </div>
      </div>
      <div className="meaning p-3">{meaning}</div>
    </div>
  );
}
