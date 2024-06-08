import React from "react";

const Body = () => {
  return (
    <div className="justify-center mt-10 lg:flex lg:justify-between">
      <div className="flex  items-center justify-center lg:flex-1 lg:order-2">
        <img
          src="./assets/Blue-Shape.svg"
          alt="1"
          className=" h-60 md:h-96 lg:h-[400px] -rotate-45"
        />
        <img
          src="./assets/Pink-Shape.svg"
          alt="2"
          className="absolute h-60 md:h-96 lg:h-[400px] -rotate-[30deg]"
        />
        <img
          src="./assets/Purple-Shape.svg"
          alt="3"
          className="absolute h-60 md:h-96 lg:h-[400px] -rotate-[15deg]"
        />
        <img
          src="./assets/Hero-Model.png"
          alt="hero"
          className="absolute h-60 md:h-96 lg:h-[400px]"
        />
      </div>
      <div className="my-10 flex flex-col gap-6 lg:flex-1 lg:order-1">
        <div className="text-4xl font-bold font-playfair md:text-7xl">
          Host your <br className="md:hidden"/>
          website in less <br className="md:hidden" />
          than 5 minutes.
        </div>
        <div>
          <p className="font-lato md:text-xl">
            With Hosterr, get your website up and running <br className="md:hidden"/> in no less than
            5 minutes with the most <br className="md:hidden"/> competitive pricing package available
            online.
          </p>
        </div>
        <form className="flex flex-col gap-4 md:flex-row">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter e-mail address"
            className="p-5 md:px-16 rounded-md text-black"
          />
          <button className="p-5 bg-blue-700 text-white font-bold rounded-md font-lato hover:bg-blue-200 hover:text-black">
            Join Waitlist
          </button>
        </form>
        <div className="flex gap-3 font-lato text-base md:text-xl">
          <img src="./assets/Checkmark.svg" alt="tick" />
          <p>No spam, ever. Unsubscribe anytime.</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
