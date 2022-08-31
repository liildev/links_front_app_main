import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../hooks/http.hook";
import { CreateStyled } from "../styles/Create";
import { ButtonIn } from "../styles/Auth";

export default function CreatePage() {
  const navigate = useNavigate();
  const { request, error, clearError } = useHttp();
  const { token } = useContext(AuthContext);

  const [link, setLink] = useState("");

  const pressHandler = async (event) => {
    event.preventDefault();

    try {
      const data = await request(
        `${process.env.REACT_APP_URL}links/generate`,
        "POST",
        { from: link },
        {
          Authorization: `Bearer ${token}`,
        }
      );

      navigate(`/detail/${data.link._id}`);
    } catch (e) {}
  };

  useEffect(() => {
    if (link === "") {
      clearError();
    }
  }, [clearError, link]);
  
  return (
    <CreateStyled>
      <h2>Create your link</h2>

      <form>
        <input
          type="input"
          placeholder="Enter link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />
        <ButtonIn onClick={pressHandler}>Create</ButtonIn>
      </form>

      {error ? <p>{error}</p> : <p></p>}
    </CreateStyled>
  );
}
