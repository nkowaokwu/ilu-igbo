import "./Proverbs.css";
import { ProverbCard } from "../../components/proverb-card/ProverbCard";

export function Proverbs({ proverbs, className: cn, ...rest }) {
  return (
    <div className={`row px-3 ${cn}`} {...rest}>
      {proverbs ? (
        proverbs.map((proverb) => (
          <ProverbCard proverb={proverb} key={proverb.id} />
        ))
      ) : (
        <p>Ooops! No proverbs found</p>
      )}
    </div>
  );
}
