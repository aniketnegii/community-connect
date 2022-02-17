import React from "react";

const Resources = () => {
  return (
      <section>
          {[1,2,3,4,5].map((i) => 
          <div className="h-90 m-">
              Resource {i}
          </div>
          )}
      </section>
  );
};

export default Resources;
