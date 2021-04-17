import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="text-center p-3">
      <div>copyright &copy;{new Date().getFullYear()} Ikenga Media</div>
      <div>
        Proverbs collated and curated by @nwa_eneh{" "}
        <a href="https://www.twitter.com/nwa_eneh">
          <FontAwesomeIcon icon={faTwitter} className="dark-link" />
        </a>{" "}
        <a href="https://www.instagram.com/nwa_eneh">
          <FontAwesomeIcon icon={faInstagram} className="dark-link" />
        </a>
      </div>
    </footer>
  );
}
