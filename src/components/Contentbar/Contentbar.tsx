import { memo } from "react";
import ActiveCard from "../../atoms/Contentbar/ActiveCard";
import ConfirmedCounts from "../../atoms/Contentbar/ConfirmedCounts";
import DeathCard from "../../atoms/Contentbar/DeathCard";
import Imagefile from "../../atoms/Contentbar/Imagefile";
import { CardDivStyled } from "../../styled/Carddiv.styled";
import { ContentBarStyled } from "../../styled/Contentbar.styled";
import { ContentLayout } from "../../styled/ContentLayout.styled";

function Contentbar() {
  return (
    <ContentBarStyled>
      <ContentLayout>
        <CardDivStyled>
          <ConfirmedCounts />
          <DeathCard />
          <ActiveCard />
        </CardDivStyled>
      </ContentLayout>
      <Imagefile />
    </ContentBarStyled>
  );
}

export default memo(Contentbar);
