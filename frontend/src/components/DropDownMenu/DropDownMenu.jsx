import { FiLogOut, FiMoon } from "react-icons/fi";
import "./DropDownMenu.css";

const DropDownMenu = () => {
  const logOut = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const toggleTheme = () => {
    const currentTheme = document
      .getElementsByTagName("html")[0]
      .getAttribute("data-theme");
    document
      .getElementsByTagName("html")[0]
      .setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex flex-col dropDownMenu min-w-fit">
      <ul className="flex flex-col gap-4">
        <li className="flex items-center" onClick={toggleTheme}>
          <FiMoon className="mr-2" /> Change Theme
        </li>
        <li className="flex items-center" onClick={logOut}>
          <FiLogOut className="mr-2" /> Log out
        </li>
      </ul>
    </div>
  );
};

export default DropDownMenu;
