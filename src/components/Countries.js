import React from "react";
import { useNavigate } from "react-router-dom";
// import Country from "./Country";
// import Skeleton from "./Skeleton";


const Countrieslist = ({ countries, page, loading, error, tryAgain }) => {
  return (
    <>
      {!loading ? (
        <>
          {!error ? (
            countries.slice(page * 12, page * 12 + 12).map((country) => {
              return (
                <CountryItem
                  key={country.name}
                  flag={country.flag}
                  name={country.name || ""}
                  population={country.population.toLocaleString("en")}
                  region={country.region}
                  capital={country.capital || "No capital"}
                  alpha3Code={country.alpha3Code}
                />
              );
            })
          ) : (
            <div className="text-2xl mt-7 font-medium space-y-5 text-gray-900 dark:text-white">
              <p>Error. Try again</p>
              <button onClick={tryAgain} className="dark:bg-darkelem shadow-md bg-white text-base px-3 py-2 rounded-md">Refresh</button>
            </div>
          )}
        </>
      ) : (
        <>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((skeleton) => (
            <Skeleton key={skeleton} />
          ))}
        </>
      )}
    </>
  );
};

const CountryItem = ({flag,name,population,region,capital,alpha3Code}) => {
  let navigate = useNavigate();
  return (
    <div onClick={() => navigate(alpha3Code)} className="bg-white rounded-md overflow-hidden cursor-pointer hover:scale-x-[1.02] hover:scale-y-[1.02] transition dark:bg-darkelem dark:text-white text-gray-900 shadow-md">
      <div>
        <img className="w-full h-40 object-cover" src={flag} alt={name} />
      </div>
      <div className="font-medium text-base px-4 py-5">
        <p className="text-lg font-semibold" >{name}</p>
        <p className="mt-2">Population : <span className="font-light opacity-80">{population}</span></p>
        <p>Region : <span className="font-light opacity-80">{region}</span></p>
        <p>Capital : <span className="font-light opacity-80">{capital}</span></p>
      </div>
    </div>
  );
};

const Skeleton = () => {
  return (
    <div className="bg-gray-300 dark:bg-gray-500 animate-pulse w-72 h-80 overflow-hidden rounded-md cursor-pointer shadow-md">
        <div className="h-40">

        </div>
    </div>
  );
};

export default Countrieslist;

