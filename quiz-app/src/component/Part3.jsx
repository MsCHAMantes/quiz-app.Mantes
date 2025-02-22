import React from "react";

function Part3(props){

    return(
      <div className="flex flex-col item-center justify-center">
        <div className="border-1 border w-200 border-gray-400 p-0 mx-30 rounded-md shadow-lg mt-10">
          <div>
            <h1 className="font-semibold text-xl ml-5 mb-3 mt-3">Which programming language is used for React?</h1>
            <div>
              <h1 classname="bg-red-200 rounded-md text-lg mr-5 ml-5 p-2">{props.option2-1}</h1>
              <h1 classname="bg-green-200 rounded-md text-lg mt-1mr-5 ml-5 p-2">{props.option2-2}</h1>
              <h1 classname="bg-red-200 rounded-md text-lg mt-1 mr-5 ml-5 p-2">{props.option2-3}</h1>
              <h1 classname="bg-red-200 rounded-md text-lg mr-5 mt-1 mb-5 ml-5 p-2">{props.option2-4}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Part3; 