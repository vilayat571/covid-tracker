import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getConfirmedCountsedCounts } from "../../redux/reducers/confirmedCountsReducer";
import { getDeathsCounts } from "../../redux/reducers/deathsReducer";
import { CardStyled } from "../../styled/Card.styled";
import { today } from "../../utils/dateTime";
import { intlNumber } from "../../utils/numberUtils";

function ActiveCard() {
  const dispatch = useDispatch();

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
    /* @ts-ignore */
    dispatch(getDeathsCounts());
    //@ts-ignore
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
