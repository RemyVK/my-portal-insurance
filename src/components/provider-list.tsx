import "./provider-list.css";
import { ALL_PROVIDERS_API } from "../constants";
import { useAllProviders } from "../hooks/use-all-providers";

interface AllProviderProps {
  providerIds: number[];
  onToggle: (id: number) => void;
}

export default function AllProviders(props: AllProviderProps) {
  const {
    data: providers,
    loading,
    error,
  } = useAllProviders(ALL_PROVIDERS_API);

  if (loading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <p>Select your provider</p>
      {providers.map((provider) => (
        <div key={provider.id} className="providersList">
          <input
            type="checkbox"
            id={provider.id}
            name={provider.name}
            onChange={() => props.onToggle(Number(provider.id))}
            checked={props.providerIds.includes(Number(provider.id))}
          />
          <label htmlFor={provider.id}>{provider.name}</label>
          <br />
        </div>
      ))}
    </>
  );
}
