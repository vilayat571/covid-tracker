import { useSelector } from "react-redux";
import Form from "../../atoms/Sidebar/Form";

function Sidebar() {
  
  const theme: boolean = useSelector(
    (state: any) => state.themeSwitchReducer.theme
  );

  return (
    <div
      className={`w-1/3 h-screen flex flex-col py-16 rounded-tr-[3.1rem] ${
        theme ? "bg-white text-black" : "bg-[#161616] text-white"
      }`}
    >
      <Form />
    </div>
  );
}

export default Sidebar;
