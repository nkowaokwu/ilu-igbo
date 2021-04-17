import "./Proverbs.css";
import { ProverbCard } from "../../components/proverb-card/ProverbCard";
import { useEffect, useState } from "react";
import * as api from "../../services/db-service";
import { PROVERBS as allProverbs } from "../../services/constants";

export function Proverbs({ searchQuery }) {
  const [proverbs, setProverbs] = useState([]);

  useEffect(() => {
    // api.fetchProverbs(() => {
    //   setProverbs(api.queryProverbs());
    // });
  }, []);

  // useEffect(() => {
  //   setProverbs(allProverbs);
  // }, []);

  useEffect(() => {
    setProverbs(api.queryProverbs(searchQuery, allProverbs));
  }, [searchQuery]);

  return (
    <div className="row px-3">
      {proverbs &&
        proverbs.map((proverb) => (
          <ProverbCard proverb={proverb} key={proverb.id} />
        ))}
    </div>
  );
}
