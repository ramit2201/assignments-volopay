import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TableDisplay from './components/TableDisplay'
function App() {
  const [tableData, setTableData] = useState({
    headers: ["Company", "Contact", "Country"],
    rows: [
      { Company: "John Doe", Contact: 30, Country: "New York" },
      { Company: "Jane Smith", Contact: 25, Country: "Los Angeles" },
      { Company: "Tom Brown", Contact: 28, Country: "Chicago" },
    ],
  });
  
console.log(tableData.headers)
 // Access the headers array
 const { headers, rows } = tableData;
  return (
    <>
    {/* {headers.map((value, index) => (
      <p>
        {value}
      </p>
    ))}
    {rows.map((value, index) => (
      <p>
        {value.Company}
      </p>
    ))} */}

    

     <TableDisplay />
    </>
  )
}

export default App
