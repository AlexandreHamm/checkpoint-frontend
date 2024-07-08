import { useCountriesQuery } from '@/graphql/generated/schema';
import CountryCard from '@/components/CountryCard';

export default function Countries() {
  const { data, loading } = useCountriesQuery();

  if (loading) return "Loading";

  const countries = data?.countries || [];

  return (
    <div className="d-flex">
      {countries.map((country: Country) => (
        <CountryCard key={country.id} country={country} link={`/country/${country.code}`} />
      ))}
    </div>
  );
}