import React, { useState } from "react";
import controlBar from '../../Assets/logos/Icon_SideArrow_round.png';
import menu from '../../Assets/logos/menu.png';
import logo1 from '../../Assets/logos/Icon_Vector.png';
import logo2 from '../../Assets/logos/MediDoc.png';
import home from '../../Assets/logos/home.png';
import profile from '../../Assets/logos/profile.png';
import appoinment from '../../Assets/logos/appointment.png';
import medical from '../../Assets/logos/medical.png';
import setting from '../../Assets/logos/setting.png';
import Banner from "./Banner";
import Appointments from "./Appointments";

const Home = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home", src: home },
    { title: "Profile", src: profile },
    { title: "Appoinments", src: appoinment },
    { title: "Medical History ", src: medical },
    { title: "Setting", src: setting },
  ];
  return (
    <div className="flex">
      <div
        className={`${
          open ? " w-64" : "w-20"
        } h-screen p-5 pt-8 duration-300 bg-white relative`}
      >
        <img
          src={controlBar}
          alt="Control Bar"
          className={`absolute cursor-pointer -right-3  top-9 w-8 ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-5 items-center">
          <img
            src={menu}
            alt="Menu Bar"
            className={`cursor-pointer duration-700 ${
              open && "rotate-[360deg]"
            }`}
          />
          <div className={`text-white w-full origin-left duration-300 flex ${
              !open && "scale-0"
            }`}>
            <img src={logo1} className='w-6 mr-3' alt="MediDoc" />
            <img src={logo2} className='' alt="MediDoc" />
          </div>
        </div>
        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`text-text-color text-sm flex gap-x-3 items-center cursor-pointer p-2 hover:bg-light-white rounded-md ${
                menu.gap ? "mt-9" : "mt-2"
              } ${index === 0 && 'bg-light-white'}`}
            >
              <img src={menu.src} className='mr-3' alt="" />
              <span className={`${!open && "hidden duration-300"}`}>
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-7 grid grid-cols-1 md:grid-cols-3 ">
        <div className="col-span-2">
            <Banner></Banner>
        </div>
        <Appointments></Appointments>
      </div>
    </div>
  );
};

export default Home;
