import React from "react";

const Questions = () => {
  return (
    <div>
      <div className="mx-auto p-10 md:p-0">
        <form className="flex justify-center gap-5 md:flex-row flex-col">
          {/* sec - 1 */}
          <select
            className="select select-secondary bg-gray-50 border-2 border-gray-300 text-gray-700 py-2 px-8 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition ease-in-out duration-300 hover:shadow-lg active:bg-purple-100 active:border-purple-800 active:text-purple-800 active:shadow-2xl active:scale-105 transform"
            required
          >
            <option disabled selected>
              Depertment
            </option>
            <option>CSE</option>
            <option>EEE</option>
            <option>ME</option>
            <option>CE</option>
            <option>BBA</option>
            <option>English</option>
            <option>JavaScript</option>
            <option>Python</option>
          </select>
          {/* sec - 2 */}
          <select
            className="select select-secondary bg-gray-50 border-2 border-gray-300 text-gray-700 py-2 px-8 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition ease-in-out duration-300 hover:shadow-lg active:bg-purple-100 active:border-purple-800 active:text-purple-800 active:shadow-2xl active:scale-105 transform"
            required
          >
            <option disabled selected>
              Subject
            </option>
            <option>Java</option>
            <option>Go</option>
            <option>C</option>
            <option>C#</option>
            <option>C++</option>
            <option>Rust</option>
            <option>JavaScript</option>
            <option>Python</option>
          </select>
          {/* sec - 3 */}
          <select className="select select-secondary bg-gray-50 border-2 border-gray-300 text-gray-700 py-2 px-8 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition ease-in-out duration-300 hover:shadow-lg active:bg-purple-100 active:border-purple-800 active:text-purple-800 active:shadow-2xl active:scale-105 transform">
            <option disabled selected>
              Batch
            </option>
            <option>Java</option>
            <option>Go</option>
            <option>C</option>
            <option>C#</option>
            <option>C++</option>
            <option>Rust</option>
            <option>JavaScript</option>
            <option>Python</option>
          </select>
          {/* sec - 4 */}
          <select className="select select-secondary bg-gray-50 border-2 border-gray-300 text-gray-700 py-2 px-8 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition ease-in-out duration-300 hover:shadow-lg active:bg-purple-100 active:border-purple-800 active:text-purple-800 active:shadow-2xl active:scale-105 transform">
            <option disabled selected>
              Level & Term
            </option>
            <option>Level-1, Term-(i)</option>
            <option>Level-1, Term-(ii)</option>
            <option>Level-2, Term-(i)</option>
            <option>Level-2, Term-(ii)</option>
            <option>Level-3, Term-(i)</option>
            <option>Level-3, Term-(ii)</option>
            <option>Level-4, Term-(i)</option>
            <option>Level-4, Term-(ii)</option>
          </select>
          {/* sec - 4 */}
          <select className="select select-secondary bg-gray-50 border-2 border-gray-300 text-gray-700 py-2 px-8 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition ease-in-out duration-300 hover:shadow-lg active:bg-purple-100 active:border-purple-800 active:text-purple-800 active:shadow-2xl active:scale-105 transform">
            <option disabled selected>
              Type
            </option>
            <option>CT</option>
            <option>MID</option>
            <option>Semester</option>
            <option>Backlog & referred</option>
          </select>
          {/* //test  */}
          {/* <select className="select select-secondary bg-gray-50 border-2 border-gray-300 text-gray-700 py-2 px-8 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 transition ease-in-out duration-300 hover:shadow-lg active:bg-purple-100 active:border-purple-800 active:text-purple-800 active:shadow-2xl active:scale-105 transform">
            <option disabled selected>
              Type
            </option>
            <option>CT</option>
            <option>MID</option>
            <option>Semester</option>
            <option>Backlog & referred</option>
          </select> */}
        </form>
      </div>
    </div>
  );
};

export default Questions;
