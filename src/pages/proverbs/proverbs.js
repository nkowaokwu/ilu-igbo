import "./Proverbs.css";
import { ProverbCard } from "../../components/proverb-card/ProverbCard";
import { useEffect, useState } from "react";
import * as api from "../../services/db-service";
import { textToJson } from "../../services/helpers";
import { PROVERBS } from "../../services/constants";

export function Proverbs() {
  const [proverbs, setProverbs] = useState([]);

  useEffect(() => {
    // api.fetchProverbs(() => {
    //   setProverbs(api.queryProverbs());
    // });
  }, []);

  useEffect(() => {
    // console.log("proverbs json:", textToJson(PROVERBS));
    setProverbs(textToJson(PROVERBS));
  }, []);

  return (
    <div className="row px-3">
      {proverbs &&
        proverbs.map((proverb) => (
          <ProverbCard proverb={proverb} key={proverb.id} />
        ))}
    </div>
  );
}
