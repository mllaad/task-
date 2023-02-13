import React from "react";

export default function Table({ data }) {
  if (!data.length) return <div>Not Found</div>;

  return (
    <table>
      {/* fixed validateDOMNesting by <tbody> */}
      <tbody>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Birth Date</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.birthDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
