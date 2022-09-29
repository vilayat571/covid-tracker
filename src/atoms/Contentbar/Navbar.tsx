import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../redux/reducers/themeSwitchReducer";

interface ITheme {
  theme: boolean;
};

interface IFunc {
  (theme: boolean): void;
};

function Navbar() {
  const dispatch = useDispatch();

  const theme: ITheme["theme"] = useSelector(
    (state: any) => state.themeSwitchReducer.theme
  );
  
  
  const handleChangeTheme: IFunc = (theme) => {
    dispatch(changeTheme(theme));
  };

  return (
    <div>
      <button onClick={() => handleChangeTheme(!theme)}>Change Theme</button>
    </div>
  );
}

export default Navbar;
