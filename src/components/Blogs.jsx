import React from "react";

const Blogs = () => {
  return (
    <section className="mt-8">
      <div>
        <h1 className="text-center text-lg mb-2">Blogs</h1>
        <div className="flex justify-center">
          <hr className="mx-5 w-1/2 text-center h-0.5 bg-black" />
        </div>
      </div>
      <div className="mt-8">
        {[1, 2, 3, 4].map((i) => {
          return (
            <div key={i} className="bg-gray-400 mx-5 my-3 h-28">
              Write...
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blogs;
