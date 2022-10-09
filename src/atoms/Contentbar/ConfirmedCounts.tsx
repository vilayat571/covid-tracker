import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getConfirmedCountsedCounts } from "../../redux/reducers/confirmedCountsReducer";
import { useAppDispatch } from "../../redux/store/store";
import { CardStyled } from "../../styled/Card.styled";
import { today } from "../../utils/dateTime";
import { intlNumber } from "../../utils/numberUtils";

interface IConfirmed {
  confirmedCounts: {
    countryRegion: string;
    confirmed: number;
    cases28Days: number;
  }[];
}

function ConfirmedCounts() {
  const dispatch = useAppDispatch();

  const confirmedCounts: IConfirmed["confirmedCounts"] = useSelector(
    (state: any) => state.confirmedCountsReducer.confirmedCounts
  );

  useEffect(() => {
    dispatch(getConfirmedCountsedCounts());
  }, []);

  return (
    <CardStyled>
      <h3>Infected</h3>
      <span className="count">
        {intlNumber(confirmedCounts[0] && confirmedCounts[0].confirmed)}
      </span>
      <p>{today}</p>
      <p className="description">Number of infect cases of COVID-19</p>
    </CardStyled>
  );
}

export default memo(ConfirmedCounts);
