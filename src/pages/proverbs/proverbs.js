import "./Proverbs.css";
import { ProverbCard } from "../../components/proverb-card/ProverbCard";
import { useEffect, useState } from "react";
import api from "../../api-service";

export function Proverbs() {
  const [proverbs, setProverbs] = useState([]);

  useEffect(() => {
    api
      .fetchProverbs()
      .then((payload) => {
        console.log("proverbs gotten from api:", payload);
        setProverbs(payload);
      })
      .catch((e) => {
        console.log("error fetching proverbs from backend");
      });
  }, []);

  return (
    <div className="row">
      {proverbs &&
        proverbs.map((proverb) => (
          <ProverbCard proverb={proverb} key={proverb.id} />
        ))}
    </div>
  );
}
