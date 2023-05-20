import { useEffect, useState } from "react";

function navbar() {
  const [Data, SetData] = useState([]);
  const [inputvalue, setinputvalue] = useState("");
  const [state, setstate] = useState(false);

  // console.log(inputvalue);
  useEffect(() => {
    const url = `http://universities.hipolabs.com/search?country=${inputvalue}`;

    async function fetchData(url) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        SetData(data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    }
    fetchData(url);
    setinputvalue('')
  }, [state]);

  const Handlesearch = () => {
    setstate(!state);
  };

  return (
    <div>
      <div className="Nav">
        <div className="search">
          <input
            type="search"
            name=""
            id=""
            value={inputvalue}
            onChange={(e) => setinputvalue(e.target.value)}
          />
          <button onClick={Handlesearch}>Search</button>
        </div>
        <ul className="List--item">
          <li>home</li>
          <li>About</li>
          <li>Service</li>
          <li>contact</li>
        </ul>
      </div>
      <p className="search--length">{`There are: ${Data.length} universities`}</p>
      <div className="Container">
        {Data.map((data, index) => {
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
