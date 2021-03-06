import React from "react";
import { useState } from 'react';
import "./styles/Searchbar.css";
import Dropdown from "react-dropdown";
import "./styles/dropdown.css";


const options = [
   { value: "hot-all", label: "Hot" },
   { value: "new-all", label: "New" },
   {
      type: "group",
      name: "Top",
      items: [
         {
            value: "top-all",
            label: "All",
         },
         { value: "top-year", label: "Year" },
         { value: "top-month", label: "Month" },
         { value: "top-week", label: "Week" },
         { value: "top-day", label: "Day" },
         { value: "top-hour", label: "Hour" },
      ],
   },
];

function Searchbar({ submitFunction, sortFunction, post }) {

   const [dropdownValue, setDropdownValue] = useState(options[0]);
   
   function handleSubmit(event) {
      event.preventDefault();
      let value = document.getElementById("subInput").value;
      submitFunction(value);
   }

   function enterHandler(event) {
      if (event.key === "Enter") {
         handleSubmit(event);
         event.target.blur();
      }
   }

   function handleSort(option) {
      setDropdownValue(option.label);
      sortFunction(option);
   }

   return (
      <div id="searchbar">
         <div id="searchbox">
            <input
               id="subInput"
               type="text"
               placeholder="Subreddit"
               onKeyDown={enterHandler}
            />
            <button onClick={handleSubmit}>
               <i className="fa fa-search"></i>
            </button>
         </div>
         <Dropdown
            id="dropdown"
            options={options}
            value={dropdownValue}
            onChange={handleSort}
            className="dropdown"
            placeholder="Select an option"
         />
         <a target="_blank" rel="noopener noreferrer" id="postTitle" href={"https://www.reddit.com/"+post.permalink}>{post.title}</a>
      </div>
   );
}

export default Searchbar;
