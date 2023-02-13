import React, { useState, useRef } from "react";
import Table from "./table";
import { data } from "./data";
import "./style.css";

export default function App() {

  // STATES
  const [defaultData, setDefaultData] = useState(data);
  const [searchField, setSearchField] = useState("");

  // TOGGLES
  const switchSortNameRef = useRef(true);
  const switchSortBirthRef = useRef(false);


  const sortNameHandle = () => {
    // SORT TOGGLE
    if (switchSortNameRef.current) {
      switchSortNameRef.current = false;
    } else {
      switchSortNameRef.current = true;
    }

    setDefaultData((data) => {
      const sortedByName = data.sort((a, b) => {
        if (!switchSortNameRef.current) {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        }
        if (switchSortNameRef.current) {
          if (a.name > b.name) return -1;
          if (a.name < b.name) return 1;
          return 0;
        }
      });
      // MAKE NEW REFRENCE TO FORCE COMPONENT TO RENDER
      return [...sortedByName];
    });
  };

 
  function sortBirthHandle() {
    // SORT TOGGLE
    if (switchSortBirthRef.current) {
      switchSortBirthRef.current = false;
    } else {
      switchSortBirthRef.current = true;
    }

    setDefaultData((data) => {
      const sortedByBirth = data.sort((a, b) => {
        if (switchSortBirthRef.current) {
          if (a.birthDate < b.birthDate) return 1;
          if (a.birthDate > b.birthDate) return -1;
          return 0;
        }
        if (!switchSortBirthRef.current) {
          if (a.birthDate > b.birthDate) return 1;
          if (a.birthDate < b.birthDate) return -1;
          return 0;
        }
      });
      // MAKE NEW REFRENCE TO FORCE COMPONENT TO RENDER
      return [...sortedByBirth];
    });
  }

  // SEARCH BY NAME
  const myData = defaultData.filter((data) =>
    data.name.includes(searchField.toLocaleLowerCase())
  );
  return (
    <div>
      <button onClick={sortNameHandle}>Sort by name</button>
      <button onClick={sortBirthHandle}>Sort by birth date</button>
      <input
        type="text"
        placeholder="Search by name or email"
        value={searchField}
        onChange={(e) => setSearchField(e.target.value)}
      />
      <Table data={myData} />
    </div>
  );
}
