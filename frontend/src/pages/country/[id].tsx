import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useCountryDetailsQuery } from "@/graphql/generated/schema";
import CountryCard from "@/components/CountryCard";

export default function Home() {
    const { query } = useRouter();
    const { data, loading } = useCountryDetailsQuery({variables: { code: query.id as string }});

    console.log(query.id)

  if (loading) return "Loading";

  const country = data?.country || [];

  console.log(country)
  
  return (
    <Layout pageTitle="Country">
      <section className="d-flex justify-content-center mt-5">
        Name : {country.name} [{country.code}] <br /> {country.emoji} <br /> Continent : {country?.continent?.name}
      </section>
    </Layout>
  );
}
