import { memo, useEffect } from "react";
import { useSelector } from "react-redux";
import { getConfirmedCountsedCounts } from "../../redux/reducers/confirmedCountsReducer";
import { getDeathsCounts } from "../../redux/reducers/deathsReducer";
import { useAppDispatch } from "../../redux/store/store";
import { CardStyled } from "../../styled/Card.styled";
import { today } from "../../utils/dateTime";
import { intlNumber } from "../../utils/numberUtils";

function ActiveCard() {
  const dispatch = useAppDispatch();

  const deathsCounts = useSelector(
    (state: any) => state.deathsReducer.deathsCounts
  );

  const confirmedCounts = useSelector(
    (state: any) => state.confirmedCountsReducer.confirmedCounts
  );

  const activeCounts = intlNumber(
    (confirmedCounts[0] && confirmedCounts[0].confirmed) -
      (deathsCounts[0] && deathsCounts[0].deaths)
  );

  useEffect(() => {
    dispatch(getDeathsCounts());
    dispatch(getConfirmedCountsedCounts());
  }, []);

  return (
    <CardStyled>
      <h3>Actives</h3>
      <span className="count">{activeCounts}</span>
      <p>{today}</p>
      <p className="description">Number of active cases of COVID-19</p>
    </CardStyled>
  );
}

export default memo(ActiveCard);
