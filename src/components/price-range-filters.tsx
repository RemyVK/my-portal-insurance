import type { Dispatch, SetStateAction } from "react";
import "./price-range-filters.css";

interface PriceRangeFiltersProps {
  minCoveredPrice: number;
  setMinCoveredPrice: Dispatch<SetStateAction<number>>;
  maxCoveredPrice: number;
  setMaxCoveredPrice: Dispatch<SetStateAction<number>>;
}

export default function PriceRangeFilters(props: PriceRangeFiltersProps) {
  return (
    <>
      <p>Covered Price</p>
      <div className="minMaxConatiner">
        <label htmlFor="priceMin"></label>
        <input
          type="number"
          placeholder="Min"
          id="priceMin"
          name="priceMin"
          min={0}
          value={props.minCoveredPrice}
          onChange={(e) => {
            props.setMinCoveredPrice(Number(e.target.value));
          }}
        />
        <p>to</p>
        <label htmlFor="priceMax"></label>
        <input type="number" placeholder="Max" id="priceMax" name="priceMax" />
      </div>

      <p className="title">Monthly Due</p>
      <div className="minMaxConatiner">
        <label htmlFor="premiumMin"></label>
        <input
          type="number"
          placeholder="Min"
          id="premiumMin"
          name="premiumMin"
          min={0}
          value={props.maxCoveredPrice}
          onChange={(e) => {
            props.setMaxCoveredPrice(Number(e.target.value));
          }}
        />
        <p>to</p>
        <label htmlFor="premiumMax"></label>
        <input
          type="number"
          placeholder="Max"
          id="premiumMax"
          name="premiumMax"
          max={99999}
        />
      </div>

      <p>Policy Duration</p>
      <div className="minMaxConatiner">
        <label htmlFor="durationMin"></label>
        <input
          type="number"
          placeholder="Min"
          id="durationMin"
          name="durationMin"
          min={0}
        />
        <p>to</p>
        <label htmlFor="durationMax"></label>
        <input
          type="number"
          placeholder="Max"
          id="durationMax"
          name="durationMax"
        />
      </div>
    </>
  );
}
