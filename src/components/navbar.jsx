import { useEffect, useState } from "react";

function navbar() {
  const [Data, SetData] = useState([]);
  const [inputvalue, setinputvalue] = useState("");

  //   console.log(Data)
  useEffect(() => {
    const url = `http://universities.hipolabs.com/search?country=kenya`;

    async function fetchData(url) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        SetData(data);
        // console.log(Data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    }

    fetchData(url);
  }, [inputvalue]);

  return (
    <div>
      <div className="Nav">
        <div className="search">
          <input type="search" name="" id="" />
          <button>Search</button>
        </div>
        <ul className="List--item">
          <li>home</li>
          <li>About</li>
          <li>Service</li>
          <li>contact</li>
        </ul>
      </div>
      <div className="Container">
        {Data.map((data,index) => {
          return (
            <div key={index} className="Container--item">
              <p>{data.name}</p>
              <p>{data.domains}</p>
              <p>{data.web_pages[0]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default navbar;
