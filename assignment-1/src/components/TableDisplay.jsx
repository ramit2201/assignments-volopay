import React from 'react'

const TableDisplay = () => {
  return (
    <table >
        <thead>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>30</td>
            <td>New York</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>25</td>
            <td>Los Angeles</td>
          </tr>
          <tr>
            <td>Tom Brown</td>
            <td>28</td>
            <td>Chicago</td>
          </tr>
        </tbody>
      
    </table>
  )
}

export default TableDisplay