import { memo } from "react";
import { CountryStyled } from "../../styled/Country.styled";

interface ICountry {
  country: {
    name: string;
    iso2: string;
    iso3: string;
  };
}

function Country({ country }: ICountry) {
  return (
    <CountryStyled color="#474747" value={country.name}>
      {country.name}
    </CountryStyled>
  );
}

export default memo(Country);
