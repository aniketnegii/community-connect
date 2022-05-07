import React from "react";

const CustomCarousel = () => {
  return (
    <section className="mb-3">
      <div className="m-5 relative left-0 right-0">
        <img
          src="https://i.pinimg.com/736x/62/ac/48/62ac48d0ef2a5754934057355ca3ec44--good-neighbor-free-desktop-wallpaper.jpg"
          alt="Holder"
        />

        <div className="absolute top-2/3 left-auto w-full">
          <div className="flex justify-evenly">
            <button className="px-2 py-1 rounded-md bg-white text-black">
              Sign Up
            </button>
            <button className="px-2 py-1 rounded-md bg-white text-black">
              Login
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomCarousel;
