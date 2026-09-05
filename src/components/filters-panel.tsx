import { useState, type Dispatch, type SetStateAction } from "react";
import "./filters-panel.css";
import PriceRangeFilters from "./price-range-filters";
import AllProviders from "./provider-list";
import { ALL_OFFERS_API } from "../constants";

interface FiltersPanelProps {
  setOfferSearchUrl: Dispatch<SetStateAction<string>>;
}

export default function FiltersPanel(props: FiltersPanelProps) {
  const [minCoveredPrice, setMinCoveredPrice] = useState<number>(0);
  const [maxCoveredPrice, setMaxCoveredPrice] = useState<number>(999999);
  const [providerIds, setProvderIds] = useState<number[]>([]);

  function toggleProvider(id: number) {
    setProvderIds((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id],
    );
  }

  function handleApply() {
    const searchParams = new URLSearchParams();
    searchParams.set("coveredMinPrice", `${minCoveredPrice}`);
    searchParams.set("coveredMaxPrice", `${maxCoveredPrice}`);
    providerIds.forEach((id) =>
      searchParams.append("providerIds[]", String(id)),
    );
    props.setOfferSearchUrl(`${ALL_OFFERS_API}?${searchParams.toString()}`);
  }

  return (
    <section className="filtersContainer">
      <p>Filters</p>
      <AllProviders providerIds={providerIds} onToggle={toggleProvider} />
      <PriceRangeFilters
        minCoveredPrice={minCoveredPrice}
        setMinCoveredPrice={setMinCoveredPrice}
        maxCoveredPrice={maxCoveredPrice}
        setMaxCoveredPrice={setMaxCoveredPrice}
      />
      <button className="filterButton" onClick={handleApply}>
        Apply Filters
      </button>
    </section>
  );
}
