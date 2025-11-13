import { useLocation } from "react-router-dom";
import Hero from "../sections/home/Hero";
import FeedBack from "../sections/home/FeedBack";
import Work from "../sections/home/Work";
import { useEffect } from "react";
import Categories from "../sections/home/Categories";
import Trends from "../sections/home/Trends";
import LatestArrivals from "../sections/home/LatestArrivals";
import { useGender } from "../components/Context/GenderContext";

const Home = () => {
  const location = useLocation();
   const { gender } = useGender();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div>
      <Hero />
      <Categories />
      <Trends gender={gender}/>
      <LatestArrivals />
      <Work />
      <FeedBack />
    </div>
  );
};

export default Home;
