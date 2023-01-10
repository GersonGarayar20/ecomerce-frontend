import React from "react";
import Buscador from "../components/Buscador";
import CategorySlider from "../components/CategorySlider";
import AuthenticateUser from "../components/AuthenticateUser";
import Profile from "../components/Profile";
import View from "../components/View";

const Home = () => {
  return (
    <div className="max-w-7xl m-auto">
      <div className="px-8 py-2 grid grid-cols-[1fr,70px] place-content-center  sm:grid-cols-[70%,15%,15%]">
        <Buscador />
        <AuthenticateUser />
        <Profile />
      </div>
      <CategorySlider />
      <View />
    </div>
  );
};

export default Home;
