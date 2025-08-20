import Logo1 from "../assets/Logo/logo.png";
import Homelogo from "../assets/Logo/HomeLogo.png";
import PortfolioLogo from "../assets/Logo/PortfolioLogo.png";
import Marketlogo from "../assets/Logo/Marketlogo.png";
import ReportsLogo from "../assets/Logo/ReportsLogo.png";
import NotificationLogo from "../assets/Logo/NotificationLogo.png";
import SettingsLogo from "../assets/Logo/SettingsLogo.png";
import ProfileLogo from "../assets/Logo/ProfileLogo.png";
import { NavLink,Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-64 bg-[#121721] text-white p-6 h-screen flex flex-col">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <img className="rounded-full h-13 w-13" src={Logo1} alt="" />
          <h1 className="text-lg font-bold leading-loose">
           <Link to="/">MyFinance</Link> 
          </h1>
        </div>

        <ul className="space-y-4 mt-15">
          <li className="flex items-center gap-5 hover:shadow-lg hover:scale-105 transition duration-200  hover:text-amber-100">
            <img className="rounded-half h-6 w-6  " src={Homelogo} alt="" /> 
            <Link to="/">Dashboard</Link>
          </li>
          <li className="flex items-center gap-5 hover:shadow-lg hover:scale-105 transition duration-200  hover:text-amber-100">
            <img className="rounded-half h-6 w-6" src={PortfolioLogo} alt="" />
            <NavLink to="/Portfolio">Portfolio</NavLink>
          </li>
          <li className="flex items-center gap-5 hover:shadow-lg hover:scale-105 transition duration-200  hover:text-amber-100">
            <img className="rounded-half h-6 w-6" src={Marketlogo} alt="" />
            <NavLink to="/Market">Market</NavLink>
          </li>
          <li className="flex items-center gap-5 hover:shadow-lg hover:scale-105 transition duration-200  hover:text-amber-100">
            <img className="rounded-half h-6 w-6" src={ReportsLogo} alt="" />
            <NavLink to="/Reports">Report & Analysis</NavLink>
          </li>
          <li className="flex items-center gap-5 hover:shadow-lg hover:scale-105 transition duration-200 hover:text-amber-100">
            <img
              className="rounded-half h-6 w-6"
              src={NotificationLogo}
              alt=""
            />
            <NavLink to="/Notification">Notifications</NavLink>
          </li>
          <li className="flex items-center gap-5 hover:shadow-lg hover:scale-105 transition duration-200  hover:text-amber-100">
            <img className="rounded-half h-6 w-6" src={SettingsLogo} alt="" />
            <NavLink to="/Settings">Settings</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-3 mt-auto mb-6 hover:shadow-lg hover:scale-105 transition duration-200 hover:text-amber-100">
        <img className="rounded-half h-6 w-6" src={ProfileLogo} alt="" />
        <NavLink to="/Profile">Profile</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
