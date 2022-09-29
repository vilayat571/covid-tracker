import React, { useState } from "react";
import { useSelector } from "react-redux";

interface IForm {
  query: string;
  change(e: React.ChangeEvent<HTMLInputElement>): void;
  submit(e: React.FormEvent<HTMLFormElement>): void;
}

function Form() {
  const [query, setQuery] = useState<IForm["query"]>("");

  const handleChange: IForm["change"] = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit: IForm["submit"] = (event) => {
    event.preventDefault();
  };

  const theme: boolean = useSelector(
    (state: any) => state.themeSwitchReducer.theme
  );

  return (
    <div className="w-full flex justify-center items-center ">
      <form  className="w-full flex justify-center items-center" onSubmit={(e) => handleSubmit(e)}>
        <input
          className={`outline-none border-none w-5/6 h-10 indent-3 px-2 py-1 rounded-2xl bg-[#f3f4f6]`}
          type="text"
          placeholder="Search For Country"
          value={query}
          onChange={(e) => handleChange(e)}
        />
      </form>
    </div>
  );
}

export default Form;
