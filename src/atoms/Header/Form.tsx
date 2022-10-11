import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { getConfirmedCountsedCounts } from "../../redux/reducers/confirmedCountsReducer";
import { fetchCountries } from "../../redux/reducers/countriesReducer";
import { getDeathsCounts } from "../../redux/reducers/deathsReducer";
import { getImgFile } from "../../redux/reducers/imgReducer";
import { useAppDispatch } from "../../redux/store/store";
import { FormLayout } from "../../styled/Formlayout.styled";
import { SelectStyled } from "../../styled/Select.styled";
import Country from "./Country";

interface IForm {
  query: string;
  change(e: React.ChangeEvent<HTMLSelectElement>): void;
  countries: {}[];
}

interface ICountry {
  name: string;
  iso2: string;
  iso3: string;
}

function Form() {
  const dispatch = useAppDispatch();

  const [query, setQuery] = useState<IForm["query"]>("Azerbaijan");

  const countries = useSelector(
    (state: any) => state.countriesReducer.countries
  );

  const handleChange: IForm["change"] = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    dispatch(getConfirmedCountsedCounts(query));
    dispatch(getDeathsCounts(query));
    dispatch(fetchCountries());
    dispatch(getImgFile(query));
  }, [query]);

  return (
    <FormLayout>
      <SelectStyled
        value={query as string}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange(e)}
      >
        {countries.countries !== undefined ? (
          countries.countries.map((country: ICountry, index: number) => (
            <Country key={index} country={country} />
          ))
        ) : (
          <option value="Loading..">Loading..</option>
        )}
      </SelectStyled>
    </FormLayout>
  );
}

export default React.memo(Form);
