import React, { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import { Loader } from "../components/Loader";
import LinkCard from "../components/LinkCard";

export default function DetailPage() {
  const { token } = useContext(AuthContext);
  const { request, loading } = useHttp();
  const [link, setLink] = useState(null);
  const { id } = useParams();

  const getLink = useCallback(async () => {
    try {
      const fetched = await request(
        `${process.env.REACT_APP_URL}links/${id}`,
        "GET",
        null,
        {
          Authorization: `Bearer ${token}`,
        }
      );
      setLink(fetched);
    } catch (e) {}
  }, [token, id, request]);

  useEffect(() => {
    getLink();
  }, [getLink]);

  if (loading) {
    return <Loader />;
  }

  return <>{!loading && link && <LinkCard link={link} />}</>;
}
