import React from "react";

const TableDisplay = ({ headers, rows, classes }) => {
  return (
    <div className="overflow-x-auto">
      <table className={`border-collapse w-full ${classes}`}>
        <thead>
          <tr className="bg-gray-100">
            {headers.map((value, index) => (
              <th key={index} className="border px-4 py-2 text-left font-bold">{value}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((value, key) => (
            <tr key={key} className={`${key % 2 === 0 ? "bg-gray-200" : "bg-white"}`}>
              <td className="border px-4 py-2">{value.Company}</td>
              <td className="border px-4 py-2">{value.Contact}</td>
              <td className="border px-4 py-2">{value.Country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableDisplay;
