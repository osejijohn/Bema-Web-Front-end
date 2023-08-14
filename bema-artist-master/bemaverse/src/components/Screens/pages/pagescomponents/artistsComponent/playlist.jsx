import React from "react";

const Song = ({ k, title }) => {
  return (
    <tr>
      <th>{k}</th>
      <td>{title}</td>
      <td>1</td>
      <td>15,005,505</td>

      <td>$50</td>
    </tr>
  );
};

export default Song;
