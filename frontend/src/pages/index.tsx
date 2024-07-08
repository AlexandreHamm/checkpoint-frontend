import Countries from "@/components/Countries";
import Layout from "@/components/Layout";
import NewCountry from "@/components/NewCountry";

export default function Home() {
  return (
    <Layout pageTitle="Home">
      <NewCountry />
      <Countries />
    </Layout>
  );
}
