import { memo } from "react";
import { LogoStyled } from "../../styled/Logo.styled";

function Logo() {
  const logoUrl = "./logoblack.webp";

  return <LogoStyled src={logoUrl} alt="logo file" />;
}

export default memo(Logo);
