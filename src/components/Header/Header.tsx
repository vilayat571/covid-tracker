import Form from "../../atoms/Header/Form";
import Logo from "../../atoms/Header/Logo";
import { HeaderLayout } from "../../styled/HeaderLayout.styled";

function Header() {
  return (
    <HeaderLayout>
      <Logo />
      <Form />
    </HeaderLayout>
  );
}

export default Header;
