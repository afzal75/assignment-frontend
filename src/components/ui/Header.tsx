"use client";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Header = () => {
  const bannars = [
    {
      id: 1,
      title: " Plumbing Service",
      subTitle1: "We Provide World Class",
      subTitle2: "House shifting services in Dhaka",
      descripttion:
        "Welcome to PACK & SHIFT Removal group, Professional House Shifting Service to anywhere in Bangladesh from Dhaka City. AlsoInternational movers and packers Any country of the world",
      image: "https://media.istockphoto.com/id/1347150429/photo/professional-mechanic-working-on-the-engine-of-the-car-in-the-garage.webp?b=1&s=612x612&w=0&k=20&c=TzJqI5QOIOzheXEI0RFXYvTWMbzMaTkPk8PvC-SU0OA=",
    },
    {
      id: 2,
      title: "Expert Plumbing Service You Can Trust.",
      subTitle1: "We Provide World Class",
      subTitle2: "House shifting services in Dhaka",
      descripttion:
        "Welcome to PACK & SHIFT Removal group, Professional House Shifting Service to anywhere in Bangladesh from Dhaka City. AlsoInternational movers and packers Any country of the world",
      image: "https://media.istockphoto.com/id/1550848974/photo/professional-caucasian-mechanic-taking-care-of-a-classic-car-engine.webp?b=1&s=612x612&w=0&k=20&c=jdV9ADZ-9VZvrkGRtAwupBY6x8Y_GeeIk5B7OTDQLzk=",
    },
    {
      id: 3,
      title: "Expert Plumbing Service You Can Trust.",
      subTitle1: "We Provide World Class",
      subTitle2: "House shifting services in Dhaka",
      descripttion:
        "Welcome to PACK & SHIFT Removal group, Professional House Shifting Service to anywhere in Bangladesh from Dhaka City. AlsoInternational movers and packers Any country of the world",
      image: "https://cdn.pixabay.com/photo/2017/09/21/19/57/car-engine-2773263_640.jpg",
    },
  ];
  return (
    <AwesomeSlider
      animation="foldOutAnimation"
      className="h-[270px] md:h-[70vh] lg:h-[80vh] w-[100vw]" // You can add a custom class for styling
    >
      {bannars.map((banner) => (
        <>
          <div
            className="hero min-w-[100vw] min-h-[100vh]"
            style={{
              backgroundImage: `url(${banner?.image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content w-full text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </>
      ))}
    </AwesomeSlider>
  );
};

export default Header;
