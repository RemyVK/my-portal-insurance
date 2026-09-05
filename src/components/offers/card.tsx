import "./card.css";
import useAllOffer from "../../hooks/use-all-offers";

interface OfferCardProps {
  url: string;
}
export default function OfferCard(props: OfferCardProps) {
  function handleOfferCTA(link: URL) {
    window.open(link, "_blank");
  }

  const { offers, loading, error } = useAllOffer(props.url);

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="infoContainer">
      <input
        id="searchBar"
        type="text"
        placeholder="Search for any Provider or Insurance"
      />
      {offers.map((offer) => (
        <section className="offerContainer" key={offer.id}>
          <div className="offerDetails">
            <p>{offer.name}</p>
            <div className="miniDetailsContainer">
              <div className="miniDetails">
                <p>Provided By</p>
                <p>{offer.ProviderName}</p>
              </div>
              <div className="miniDetails">
                <p>Insurance Tye</p>
                <p>{offer.InsuranceType}</p>
              </div>
              <div className="miniDetails">
                <p>Duration</p>
                <p>{offer.duration} </p>
              </div>
              <div className="miniDetails">
                <p>Monthly Amount</p>
                <p>{offer.monthly_payment}</p>
              </div>
            </div>
          </div>
          <div className="offerCostActionDeatil">
            <p>Total Amount Covered</p>
            <p>{offer.total_covered_amount}</p>

            <button onClick={() => handleOfferCTA(offer.link)}>
              View Offer
            </button>
          </div>
        </section>
      ))}
    </div>
  );
}
