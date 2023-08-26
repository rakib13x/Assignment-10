import React from "react";
import DateFormat from "../DateFormat";

const Details = (props) => {
  return (
    <div className="container mx-auto p-9">
      <h1 className="font-semibold text-justify pt-[60px] pb-[20px] text-xl">
        {props.blog?.title}
      </h1>
      <div className="grid p-x-9 grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-1">
        {props.blog ? (
          <div className="card w-100 glass">
            <figure>
              <img src={props.blog?.img} alt={props.blog?.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{props.blog?.title}</h2>
              <p>{props.blog?.content}</p>
              <span className="badge badge-outline text-right mr-2 mb-2">
                <DateFormat dateString={props.blog?.created_at} />
              </span>
            </div>
          </div>
        ) : (
          <span className="text-center font-semibold text-xl text-red-500">
            <p>There is nothing to show here.Please Go Back</p>
          </span>
        )}
      </div>
    </div>
  );
};

export default Details;
