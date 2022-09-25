import React from "react";
import { products } from "../../data/product";
import { MdDelete, MdEdit } from "react-icons/md";

const AllProducts = () => {
  const editClickHandler = (e) => {
    e.preventDefault();
    console.log("Edit is clicked");
  };
  const deleteClickHandler = (e) => {
    e.preventDefault();
    console.log("Delete is clicked");
  };
  return (
    <div className="py-10 px-8 text-center space-y-7">
      <div>
        <h1 className="text-4xl font-bold">Product List</h1>
      </div>

      <div className="p-4">
        <ul className="space-y-5">
          {products.map((product, index) => {
            return (
              <li
                className="flex justify-between items-center border rounded-lg px-8 shadow-md hover:shadow-lg"
                key={index}
              >
                <div className="flex items-center p-2 space-x-10">
                  <img
                    className="w-20 h-20 rounded-md"
                    src={product.img}
                    alt="img"
                  />
                  <h1 className="h-fit w-fit text-center px-3 text-[1.2rem] font-[600]">
                    {product.h1}
                  </h1>
                  <h2 className="h-fit w-fit text-center px-3">
                    {product.price}
                  </h2>
                </div>

                <div className="flex p-2 space-x-8 items-center">
                  <button
                    className="flex bg-green-300 px-4 items-center space-x-2 py-1 rounded-full hover:bg-green-400 hover:shadow-md"
                    onClick={editClickHandler}
                  >
                    <MdEdit/>
                    <h1>Edit</h1>
                  </button>
                  <button
                    className="flex bg-red-400 px-4 items-center space-x-2 py-1 rounded-full hover:bg-red-500 hover:shadow-md"
                    onClick={deleteClickHandler}
                  >
                    <MdDelete />
                    <h1>Delete</h1>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AllProducts;