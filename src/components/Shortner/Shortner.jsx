import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Shortner = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [allUrls, setAllUrls] = useState([]);

  const handleShorten = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/url/shorten", {
        longUrl: url,
      });
      console.log(res);
      setShortUrl(res.data.shortUrl);
      getAllUrls()
    } catch (err) {
      console.error(err);
    }
  };

  const getAllUrls = async () => {
    try {
      const res = await axios.get("http://localhost:5000/getAll");
      console.log(res);
      setAllUrls(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllUrls();
  }, []);
  return (
    <div className="App">
      <div className="shorten-url">
        <TextField
          label="Long Url"
          placeholder="Enter Long Url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={handleShorten} className="btn">
          Shorten
        </button>
      </div>
      {shortUrl && <div className="shortlabel">Your Shortened Url is: {shortUrl}</div>}
      <div className="shortened-urls">
        {allUrls.map((url) => (
          <Link to={`/${url.urlCode}`}>
            <div>{`${url.longUrl.substring(0, 50)}...`}</div>
            <div className="shortlabel">Your Shortened Url is:</div>
            <span>{url.shortUrl}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shortner;
