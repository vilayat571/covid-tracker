import { useSelector } from "react-redux";
import Navbar from "../../atoms/Contentbar/Navbar";

function Contentbar() {
  const theme: boolean = useSelector(
    (state: any) => state.themeSwitchReducer.theme
  );

  return (
    <div
      className={`w-2/3 h-screen flex flex-col ${
        theme ? "bg-[#f3f4f6] text-black" : "bg-[#131313] text-white"
      }`}
    >
      <Navbar />
    </div>
  );
}

export default Contentbar;
