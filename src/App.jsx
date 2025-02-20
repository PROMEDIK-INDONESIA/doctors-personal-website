import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClickableHumanBody from './ClickableHumanBody'
import Header from './layouts/header/Header'
import Navbar from './layouts/header/Navbar'
import DoctorWebsite from './pages/DoctorWebsite'
import DoctorSideBar from './pages/DoctorSideBar'
import Banner from './pages/Banner'
import DoctorHeader from './pages/DoctorHeader'
import InstagramEmbed from "./pages/DoctorInstagramEmbed";
import DoctorFooter from "./pages/DoctorFooter";
import DoctorBody from "./pages/DoctorBody";
import Marquee from "react-fast-marquee";
import DoctorReview from "./pages/DoctorReview";

function App() {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Get scrollbar width
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      // Add styles to prevent layout shift
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      // Remove styles when closing sidebar
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
  }, [isOpen]);


  const DataSet = [
    {
      comment: "bagi mereka yang memuji seolah-olah itu adalah kenikmatan yang besar bagi mereka sendiri, saat mereka membutuhkan rasa sakit, tetapi seolah-olah mereka menolak dan menuduh dengan bijak"
    },
    {
      comment: "dilahirkan tanpa tujuan, tidak ada rasa sakit, tidak ada kesenangan, tidak pernah dan semua dibutakan bahwa kesalahan apa pun kesenangan mudah untuk dilahirkantidak ada kesenangan kita yang menolak dan"

    },
    {
      comment: "u adalaketika kita memimpin dan benar-benar kesenangan kecuali untuk alasan yang lembut"

    },
    {
      comment: "bagi merekaereka membutuhkan rasa sakit, tetapi seolah-olah mereka menolak dan menuduh dengan bijak"
    },
    {
      comment: "kenikmatan yang besar bagi mereka sendiri, saat mereka membutuhkan rasa sakit, tetapi seolah-olah mereka menolak dan menuduh dengan bijak"
    },
    {
      comment: "seolah-olah mereka menolak dan menuduh dengan bijak kenikmatan yang besar bagi mereka sendiri, saat mereka membutuhkan rasa sakit, tetapi seolah-olah mereka menolak dan menuduh dengan bijak"
    },

  ]

  return (
    <div>
      <>
        <DoctorSideBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className={`flex-1 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-64" : "translate-x-0"
          }`}>
          <DoctorHeader isOpen={isOpen} setIsOpen={setIsOpen} />
          {/* <div
          className={`transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-64" : "translate-x-0"}`}
        > */}
          <Banner />
          <div className="relative">
            <DoctorReview />
          </div>
          <DoctorBody />
        </div>
      </>

      {/* <h1>{isAuthenticated ? `Welcome, ${user.name}` : "Not logged in"}</h1>
      {isAuthenticated ? (
        <>
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Logout
          </button>
        </>
      ) : (
        <button onClick={() => loginWithRedirect()}>Login</button>
      )} */}

      <DoctorFooter />
    </div>
  );
}

export default App;