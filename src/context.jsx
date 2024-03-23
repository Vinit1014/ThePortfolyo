import React, { useContext, useEffect, useState } from "react";

export const API_URL =
  "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [isLoading, setisLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const [about, setAbout] = useState();
  const [projects, setProjects] = useState();
  const [services, setServices] = useState();
  const [skills, setSkills] = useState();
  const [social, setSocial] = useState();
  const [testimonials, setTestimonials] = useState();
  const [timeLine, setTimeLine] = useState();
  const [youTube, setYouTube] = useState();
    
  const getUserData = async (url) => {
    console.log("Hello I got triggered");
    setisLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.success == true) {
        setUserData(data.user);
        setAbout(data.user.about);
        setProjects(data.user.projects);
        setServices(data.user.services);
        setSkills(data.user.skills);
        setSocial(data.user.social_handles);
        setTestimonials(data.user.testimonials);
        setTimeLine(data.user.timeLine);
        setYouTube(data.user.youTube);

        setisLoading(false);
        setIsError({
          show: false,
          msg: "",
        });
      } else {
        setIsError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {}
  };
  useEffect(() => {
    getUserData(API_URL);
  }, []);

  useEffect(() => {
    console.log(userData);
    console.log(about);
  }, [userData,about]);

  return (
    <AppContext.Provider
      value={{
        about,
        services,
        projects,
        skills,
        testimonials,
        social,
        timeLine,
        youTube,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
