import React, { useState, useEffect } from "react";

function App() {
  const [image, setimage] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(r => r.json())
      .then(dog => {
        setimage(dog.message);
      });
  }, []);
  if (!image) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={image} alt="A Random Doggo" />
    </div>
  );
}

export default App;
