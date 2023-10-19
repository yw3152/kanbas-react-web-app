import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill, BsFillInboxFill, BsClockHistory } from "react-icons/bs";
import { PiTelevisionFill } from "react-icons/pi";
import { HiArrowCircleRight } from "react-icons/hi";
import { FiHelpCircle } from "react-icons/fi";
import "./index.css";
import NUlogo from './NUlogo.png';

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const linkToIconMap = {
        Account: <BiUserCircle className="wd-icon"/>,
        Dashboard: <RiDashboard3Fill className="wd-icon" />,
        Courses: <FaBook className="wd-icon" />,
        Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
        Inbox: <BsFillInboxFill className="wd-icon"/>,
        History: <BsClockHistory className="wd-icon"/>,
        Studio: <PiTelevisionFill className="wd-icon"/>,
        Commons: <HiArrowCircleRight className="wd-icon"/>,
        Help: <FiHelpCircle className="wd-icon"/>
    };
  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation">
        <img src={NUlogo} alt="logo" />
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}>
          {linkToIconMap[link]}<br />
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;