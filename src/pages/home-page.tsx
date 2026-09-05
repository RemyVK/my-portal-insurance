import FiltersPanel from "../components/filters-panel";
import "./home-page.css";
import OfferCard from "../components/offers/card";
import { useState } from "react";
import { ALL_OFFERS_API } from "../constants";

export default function HomePage() {
  const [offerSearchUrl, setOfferSearchUrl] = useState<string>(ALL_OFFERS_API);
  return (
    <>
      <header>
        <h1>InsureCompare</h1>
      </header>
      <div className="content">
        <FiltersPanel setOfferSearchUrl={setOfferSearchUrl} />
        <OfferCard url={offerSearchUrl} />
      </div>
    </>
  );
}
