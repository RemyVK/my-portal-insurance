import { useEffect, useState } from "react";

interface Offer {
  id: number;
  name: string;
  link: URL;
  total_covered_amount: number;
  monthly_payment: number;
  duration: number;
  ProviderName: string;
  InsuranceType: string;
  activePIDs: number;
}

export default function useAllOffer(url: string) {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setOffers(data.data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { offers, loading, error };
}
