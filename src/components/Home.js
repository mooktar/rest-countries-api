import React, { useState, useEffect, useCallback} from 'react'
import Filters from './Filters'
import Countries from './Countries';
import Pagination from './Pagination';

function Home({ countries, loading, error,tryAgain }) {
    const [value, setValue] = useState("");
    const [region, setRegion] = useState("");
    const [page, setPage] = useState(0);
    
    useEffect(() => {
        setPage(0);
    }, [region, value]);

    const filter = useCallback(() => {
        let showCountries = countries;
        if (region !== "") {
        showCountries = showCountries.filter(
            (country) => country.region === region
        );
        }
        if (value.trim() !== "") {
        showCountries = showCountries.filter((country) => {
            return (
            country.name.toUpperCase().includes(value.toUpperCase()) ||
            country.region.toUpperCase().startsWith(value.toUpperCase()) ||
            (country.capital
                ? country.capital.toUpperCase().startsWith(value.toUpperCase())
                : false) ||
            country.nativeName.toUpperCase().includes(value.toUpperCase())
            );
        });
        }
        return showCountries;
    }, [countries, region, value]);

    return (
        <div className="px-12 py-6 scroll-smooth">
            <Filters
                value={value}
                changeHandler={setValue}
                region={region}
                setRegion={setRegion}
            />
            <div className="grid scroll-smooth sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 mt-5 gap-10 xl:gap-16">
                <Countries tryAgain={tryAgain} error={error} loading={loading} page={page} countries={filter()} />
            </div>
            <Pagination setPage={setPage} pageN={page} countries={filter()} />
        </div>
    )
}

export default Home