import { Country } from '@/types';
import Link from 'next/link';

type Props = {
  country: Country;
  link: string;
};

export default function CountryCard(
    {
        country,
        link,
    }: Props
) {
    return (
        <div className="card">
            <Link href={link}>
                {country.name} <br /> {country.emoji}
            </Link>
        </div>
    )
}
