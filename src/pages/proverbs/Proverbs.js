import "./Proverbs.css";
import { ProverbCard } from "../../components/proverb-card/ProverbCard";

export function Proverbs({ proverbs }) {
  return (
    <div className="row px-3">
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
