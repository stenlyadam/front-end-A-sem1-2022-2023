import React from "react";
// import { Link } from "react-router-dom";
// import About from "../pages/About";
// import Home from "../pages/Home";

// export default function Header() {
//   return (
//     <nav className="navbar navbar-expand-lg bg-light">
//       <div className="collapse navbar-collapse" id="navbarNavDropdown">
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <Link to={"/"}>Home</Link>
//           </li>
//           <li className="nav-item">
//             <Link to={"/About"}>About</Link>
//           </li>
//           {/* <li className="nav-item dropdown">
//               <a
//                 className="nav-link dropdown-toggle"
//                 href="#"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Dropdown link
//               </a>
//               <ul className="dropdown-menu">
//                 <li>
//                   <a className="dropdown-item" href="#">
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Something else here
//                   </a>
//                 </li>
//               </ul>
//             </li> */}
//         </ul>
//       </div>
//     </nav>
//   );
// }             Action
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Another action
//

export default function Header() {
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a className="nav-link" aria-current="page" href="/">
          Home
        </a>
      </li>

      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          href="/"
          role="button"
          aria-expanded="false"
        >
          Pendidikan
        </a>
        <ul className="dropdown-menu">
          <li>
            <a
              className="dropdown-item"
              href="http://fik.unklab.ac.id/index.php/informatics/"
            >
              Informatika
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="http://fik.unklab.ac.id/index.php/informationsystem/"
            >
              Sistem Informasi
            </a>
          </li>
        </ul>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="/About">
          About
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="/ContactUs">
          Contact Us
        </a>
      </li>
    </ul>
  );
}
