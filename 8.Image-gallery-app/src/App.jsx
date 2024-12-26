import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const res = await axios.get("https://picsum.photos/v2/list");
    const result = res.data;
    setImages(result);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="w-100 text-light">Image Gallery</div>
      </nav>
      <div className="row">
        {images.map((image) => (
          <div key={image.id} className="col-lg-4 col-md-4 col-sm-12 p-1">
            <img
              src={image.download_url}
              alt={image.author}
              width={300}
              height={400}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
