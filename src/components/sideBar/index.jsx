import { Link } from 'react-router-dom'

import "./sideBar.css";
import {
    history,
    home,
    like,
    playlist,
    watchLater,
} from "assets/icons";

export function SideNavBar() {
  const navLinks = [
    {name: "Home", icon: home, link:"/"},
    { name: "Playlist", icon: playlist, link:"/playlist" },
    { name: "Watch Later", icon: watchLater, link:"/watchlater" },
    { name: "Liked", icon: like, link:"/liked" },
    { name: "History", icon: history, link:"/history" }
    ];

  return (
    <aside className="side-navigation">
      <ul>
        {navLinks.map(({link, icon, name},index) => {
          return (
            <Link key={index} to={link}
              className="flex-column flex-center nav-pill"
            >
              <li>
                <img className="nav-img" src={icon} />
              </li>
            </Link>
          );
        })}
      </ul>
    </aside>
  );
}
