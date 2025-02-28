import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TableDisplay from './components/TableDisplay'
function App() {
  const [tableData, setTableData] = useState({
    headers: ["Company", "Contact", "Country"],
    rows: [
      { Company: "Alfreds Futterkiste", Contact: "Maria Anders", Country: "Germany" },
      { Company: "Centro comercial Moctezuma", Contact: "Francisco Chang", Country: "Mexico" },
      { Company: "Ernst Handel", Contact: "Roland Mendel", Country: "Austria" },
      { Company: "Island Trading", Contact: "Helen Bennett", Country: "UK" },
      { Company: "Laughing Bacchus Winecellars", Contact: "Yoshi Tannamuri", Country: "Canada" },
      { Company: "Magazzini Alimentari Riuniti", Contact: "Giovanni Rovelli", Country: "Italy" },
    ],
  });
console.log(tableData.headers)
 // Access the headers array
 const { headers, rows } = tableData;
  return (
    <div className='p-4 mt-20' >
      <TableDisplay headers = {headers} rows = {rows} classes="p-8 w-full bg-red-200"/>
    </div>


  )
}

export default App
