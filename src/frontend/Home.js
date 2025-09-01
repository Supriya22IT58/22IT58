import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleShorten = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/url", { originalUrl });
      setShortUrl(res.data.shortUrl);
    } catch (err) {
      console.error(err);
      alert("Error shortening URL");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>URL Shortener</h2>
      <input
        type="text"
        value={originalUrl}
        placeholder="Enter URL"
        onChange={(e) => setOriginalUrl(e.target.value)}
        style={{ width: "300px", marginRight: "10px" }}
      />
      <button onClick={handleShorten}>Shorten</button>
      {shortUrl && (
        <div style={{ marginTop: "20px" }}>
          Short URL: <a href={shortUrl}>{shortUrl}</a>
        </div>
      )}
    </div>
  );
};

export default Home;
