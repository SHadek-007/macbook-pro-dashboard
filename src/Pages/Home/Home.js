import React, { useState } from "react";
import controlBar from '../../Assets/logos/Icon_SideArrow_round.png';
import menu from '../../Assets/logos/menu.png';
import logo1 from '../../Assets/logos/Icon_Vector.png';
import logo2 from '../../Assets/logos/MediDoc.png';

const Home = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex">
      <div
        className={`${
          open ? " w-72" : "w-20"
        } h-screen p-5 pt-8 duration-300 bg-baby-peach relative`}
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
      </div>
    </div>
  );
};

export default Home;
