import React from "react";
import PropTypes from "prop-types";

const TableDisplay = ({ headers, rows, classes }) => {
  return (
    <div className="overflow-x-auto">
      <table className={`border-collapse w-full ${classes}`}>
        <thead>
          <tr className="bg-gray-100">
            {headers.map((value, index) => (
              <th key={index} className="border px-4 py-2 text-left font-bold" scope="col">
                {value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length > 0 ? (
            rows.map((value, key) => (
              <tr key={key} className={`${key % 2 === 0 ? "bg-gray-200" : "bg-white"}`}>
                {headers.map((header, index) => (
                  <td key={index} className="border px-4 py-2">
                    {value[header]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headers.length} className="border px-4 py-2 text-center">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

TableDisplay.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  classes: PropTypes.string,
};

TableDisplay.defaultProps = {
  classes: "",
};

export default TableDisplay;
