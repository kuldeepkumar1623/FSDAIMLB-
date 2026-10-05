import React, { useState } from "react";
import "./App.css";

function App() {

  const [image, setImage] = useState(null);
  const [rotation, setRotation] = useState(0);

  // Upload image
  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
      setRotation(0);
    }
  };

  // Rotate left
  const rotateLeft = () => {
    setRotation(rotation - 90);
  };

  // Rotate right
  const rotateRight = () => {
    setRotation(rotation + 90);
  };

  // Reset
  const resetImage = () => {
    setRotation(0);
  };

  return (
    <div className="container">

      <h1>Image Rotator</h1>

      {/* Upload */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />

      {/* Image */}
      {image && (
        <>
          <div className="image-box">

            <img
              src={image}
              alt="Uploaded"
              style={{
                transform: `rotate(${rotation}deg)`
              }}
            />

          </div>

          {/* Buttons */}
          <div className="buttons">

            <button onClick={rotateLeft}>
              ↶ Rotate Left
            </button>

            <button onClick={rotateRight}>
              ↷ Rotate Right
            </button>

            <button onClick={resetImage}>
              🔄 Reset
            </button>

          </div>
        </>
      )}

    </div>
  );
}

export default App;