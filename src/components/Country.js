import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const CountryPage = ({ countries, loading }) => {
  let { countryName } = useParams();
  let navigate = useNavigate();
  let country = countries.find((item) => {
    return item.alpha3Code === countryName;
  });
  return (
    <div className="mt-4  px-12 py-8">
      {!loading ? (
        <>
          <button
            onClick={() => navigate("/")}
            className="flex items-center py-2 px-6 hover:!bg-opacity-80 bg-white text-gray-800 shadow-gray-300 dark:shadow-sm rounded-md dark:bg-darkelem dark:text-white shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back
          </button>
          <div className="mt-10 space-y-10 md:space-y-0 gap-6 md:grid grid-cols-2 items-center">
            <div className="flex items-center justify-center">
              <img
                className="w-[26rem] shadow-xl object-contain"
                src={country.flag}
                alt={country.name}
              />
            </div>
            <div className="dark:text-white text-gray-900 text-left">
              <h1 className="font-bold  text-2xl">{country.name}</h1>
              <div className="flex flex-col sm:flex-row font-medium mt-4 space-y-8 sm:space-y-0 sm:space-x-16">
                <div>
                  <p>
                    <strong>Native Name: </strong>
                    <span className="font-light text-gray-500 dark:!text-gray-100">
                      {country.nativeName}
                    </span>
                  </p>
                  <p>
                    <strong>Population: </strong>
                    <span className="font-light text-gray-500 dark:!text-gray-100">
                      {country.population.toLocaleString("en")}
                    </span>
                  </p>
                  <p>
                    <strong>Region: </strong>
                    <span className="font-light text-gray-500 dark:!text-gray-100">
                      {country.region}
                    </span>
                  </p>
                  <p>
                    <strong>Sub Region: </strong>
                    <span className="font-light text-gray-500 dark:!text-gray-100">
                      {country.subregion}
                    </span>
                  </p>
                  <p>
                    <strong>Capital: </strong>
                    <span className="font-light text-gray-500 dark:!text-gray-100">
                      {country.capital || "No Capital"}
                    </span>
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Top Level Domain: </strong>
                    <span className="font-light text-gray-500 dark:!text-gray-100">
                      {country.topLevelDomain && country.topLevelDomain[0]}
                    </span>
                  </p>
                  <p>
                    <strong>Currencies: </strong>
                    <span className="font-light text-gray-500 dark:!text-gray-100">
                      {country.currencies && country.currencies
                        .map((currency) => currency.name)
                        .join(", ")}
                    </span>
                  </p>
                  <p>
                    <strong>Languages: </strong>
                    <span className="font-light text-gray-500 dark:!text-gray-100">
                      {country.languages && country.languages.map((lang) => lang.name).join(", ")}
                    </span>
                  </p>
                </div>
              </div>
              <div className="mt-8 flex items-center flex-wrap">
                <p className="font-medium w-full lg:w-auto mr-2 mb-3">
                    <strong>Border Countries: </strong>
                </p>
                {country["borders"] && country.borders.map((border) => {
                  let bCountry = countries.find((count) => {
                    return count.alpha3Code === border;
                  });
                  if (!bCountry) return <span key={-1}></span>;
                  return (
                    <p
                      onClick={() =>
                        navigate(`/${bCountry.alpha3Code}`)
                      }
                      className="dark:bg-darkelem hover:opacity-80 font-light cursor-pointer mr-4 mb-2 bg-white rounded-md px-3 py-1"
                      key={bCountry.alpha3Code}
                    >
                      {bCountry.name}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="flex justify-center mt-5">
          <svg role="status" class="text-center mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
          </svg>
        </p>
      )}
    </div>
  );
};

export default CountryPage;
