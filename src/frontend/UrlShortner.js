import React, { useState } from "react";
import axios from "axios";

const UrlShortner = () => {
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
    <div>
      <input
        type="text"
        value={originalUrl}
        placeholder="Enter URL"
        onChange={(e) => setOriginalUrl(e.target.value)}
      />
      <button onClick={handleShorten}>Shorten</button>
      {shortUrl && <p>Short URL: <a href={shortUrl}>{shortUrl}</a></p>}
    </div>
  );
};

export default UrlShortner;
