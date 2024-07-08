import {
    useAddCountryMutation,
    CountriesDocument,
    CountriesQuery,
} from "@/graphql/generated/schema";
import { FormEvent, useRef } from "react";

export default function newCountry() {
    const [addCountry] = useAddCountryMutation();
    const ref = useRef<HTMLFormElement>(null);


    const submitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.target as HTMLFormElement);
        const formJSON: any = Object.fromEntries(data.entries());

        addCountry({
            variables: {
              data: {
                ...formJSON,
              },
            },
            update: (cache, { data }) => {
              if (!data || !data.addCountry) return;
      
              const existingCountries = cache.readQuery<CountriesQuery>({
                query: CountriesDocument,
              });
      
              if (existingCountries && existingCountries.countries) {
                cache.writeQuery({
                  query: CountriesDocument,
                  data: {
                    countries: [...existingCountries.countries, data.addCountry],
                  },
                });
              }
      
              if (ref.current) {
                ref.current.reset();
              }
            },
        });
    };


    return (
        <form 
            ref={ref}
            onSubmit={submitForm}
            className="card p-3 m-3"
            >
            
            <div className="input-group d-flex align-items-center mb-3">
                <span>Name :</span> <input className="form-control ml-1 mr-3" type="text" name="name" />
                <span>Code :</span> <input className="form-control ml-1 mr-3" type="text" name="code" />
                <span>Flag :</span> <input className="form-control ml-1" type="text" name="emoji" />
            </div>

            <button type="submit" className="btn bg-primary text-light">Enregistrer</button>
        </form>
    );
}