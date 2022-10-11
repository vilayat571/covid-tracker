import { memo, useEffect } from "react";
import { useSelector } from "react-redux";
import { getDeathsCounts } from "../../redux/reducers/deathsReducer";
import { useAppDispatch } from "../../redux/store/store";
import { CardStyled } from "../../styled/Card.styled";
import { today } from "../../utils/dateTime";
import { intlNumber } from "../../utils/numberUtils";

function DeathCard() {
  const dispatch = useAppDispatch();
  const deathsCounts = useSelector(
    (state: any) => state.deathsReducer.deathsCounts
  );

  useEffect(() => {
    dispatch(getDeathsCounts());
  }, []);

  return (
    <CardStyled>
      <h3>Deaths</h3>
      <span className="count">
        {intlNumber(deathsCounts[0] && deathsCounts[0].deaths)}
      </span>
      <p>{today}</p>
      <p className="description">Number of death cases of COVID-19</p>
    </CardStyled>
  );
}

export default memo(DeathCard);
