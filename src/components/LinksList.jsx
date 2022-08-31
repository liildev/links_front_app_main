import React from "react";
import { Link } from "react-router-dom";
import { P, Table } from "../styles/List";

export default function LinksList({ links }) {
  if (!links.length) {
    return <P>No links yet :(</P>;
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>№</th>
          <th>Original</th>
          <th>Shortcut</th>
          <th>Open</th>
        </tr>
      </thead>

      <tbody>
        {links.map((link, index) => {
          return (
            <tr key={link._id}>
              <td>{index + 1}</td>
              <td>{link.from}</td>
              <td>{link.to}</td>
              <td>
                <Link to={`/detail/${link._id}`}>Open</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
