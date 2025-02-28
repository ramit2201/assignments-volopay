import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TableDisplay from './components/TableDisplay'

const TableHeaders = {
  COMPANY: "Company",
  CONTACT: "Contact",
  COUNTRY: "Country"
};

function App() {
  const tableData = {
    headers: [TableHeaders.COMPANY, TableHeaders.CONTACT, TableHeaders.COUNTRY],
    rows: [
      { [TableHeaders.COMPANY]: "Alfreds Futterkiste", [TableHeaders.CONTACT]: "Maria Anders", [TableHeaders.COUNTRY]: "Germany" },
      { [TableHeaders.COMPANY]: "Centro comercial Moctezuma", [TableHeaders.CONTACT]: "Francisco Chang", [TableHeaders.COUNTRY]: "Mexico" },
      { [TableHeaders.COMPANY]: "Ernst Handel", [TableHeaders.CONTACT]: "Roland Mendel", [TableHeaders.COUNTRY]: "Austria" },
      { [TableHeaders.COMPANY]: "Island Trading", [TableHeaders.CONTACT]: "Helen Bennett", [TableHeaders.COUNTRY]: "UK" },
      { [TableHeaders.COMPANY]: "Laughing Bacchus Winecellars", [TableHeaders.CONTACT]: "Yoshi Tannamuri", [TableHeaders.COUNTRY]: "Canada" },
      { [TableHeaders.COMPANY]: "Magazzini Alimentari Riuniti", [TableHeaders.CONTACT]: "Giovanni Rovelli", [TableHeaders.COUNTRY]: "Italy" },
    ],
  };

  console.log(tableData.headers);
  const { headers, rows } = tableData;

  return (
    <div className='p-4 mt-20'>
      <TableDisplay headers={headers} rows={rows} classes="p-8 w-full bg-red-200" />
    </div>
  );
}

export default App;
