import React from "react";
import { Card } from "../styles/Card";

export default function LinkCard({ link }) {
  return (
    <Card>
      <h2>Link</h2>

      <p>
        Your link:{" "}
        <a href={link.to} target="_blank" rel="noopener noreferrer">
          {link.to}
        </a>
      </p>
      <p>
        Where:{" "}
        <a href={link.from} target="_blank" rel="noopener noreferrer">
          {link.from}
        </a>
      </p>
      <p>
        Number of clicks on the link: <strong>{link.clicks}</strong>
      </p>
      <p>
        Date of creation:{" "}
        <strong>{new Date(link.date).toLocaleDateString()}</strong>
      </p>
    </Card>
  );
}
