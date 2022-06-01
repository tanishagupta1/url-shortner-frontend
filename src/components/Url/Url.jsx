import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Url = () => {
  const [uri, setUri] = useState("");

  const { id } = useParams()

  const getUrl = async () => {
    const res = await axios.get(`http://localhost:5000/${id}`)
    console.log(res)
    setUri(res.data)
  }

  useEffect(() => {
    getUrl()
  },[])

  return (
    <>
      <div>Your Url is:</div>
      <div>{uri}</div>
      <div>Your Short Url id is:</div>
      <div>{id}</div>

    </>
  );
};

// exportUrl
