import React, { useState, useEffect } from "react";
import Button from "./button/Button";
import Card from "./card/card";
import Card2 from "./card/card_2";
import './App.css'



function App() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(0);
 

  useEffect(() => {
    fetch("/data/dataGlasses.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  if (data.length === 0) return <div>Loading...</div>;

  return (
    <div style={{
        Height: "100%",
        backgroundImage: "url('/img/background.jpg')", // Đặt ảnh fashion vào public/img/fashion-bg.jpg
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "40px 0",
      }}
      > 
    <div className="row" 
    
      >
      <div className="col-6">
        <Card
          title={data[selected].name}
          content={data[selected].desc}
          image="/img/model.jpg"
          image2={data[selected].url.replace("./", "/")}
        />
      </div>
      <div className="col-6 mx-auto
        d-flex justify-content-center align-items-center">
        <Card2
          image="/img/model.jpg" // Đường dẫn ảnh trong public/img
        />
        </div>
      </div> 
     

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "20px" }}>
        {data.map((item, idx) => (
          <Button
            key={item.id}
            title={item.name}
            image={item.url.replace("./", "/")}
            onClick={() => setSelected(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
