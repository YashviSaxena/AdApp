import React,{useState} from 'react';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function DenseTableRight() {

  const [toggleColor, setToggleColor] = useState(false);

  const handleClick = () => {
    console.log("clicked", toggleColor)
    setToggleColor(!toggleColor);
  };
 
  return (
    <>
  
  
    <TableContainer component={Paper} style={{marginLeft:"15px", marginRight:"15px"}} >
      <Table sx={{ minWidth: 500 }} size="small" aria-label="a dense table" style={{position:"relative"}} >
        <TableHead>
            <TableRow>
                <TableCell colSpan={"5"}>Ad Insights</TableCell>
            </TableRow>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div style={{display:"flex", justifyContent:"flex-end", marginTop:"55px", marginRight:"20px", cursor:"pointer"}}>
      <DonutLargeIcon 
      onClick={handleClick} 
      style={{marginRight:"10px", cursor:"pointer"}}
      className={`${toggleColor ? 'bg-white' : 'bg-blue-500 rounded-full p-2'}`}
      
      /> 

      <TableChartOutlinedIcon className={`${toggleColor ? 'bg-white' : 'bg-blue-500 rounded-full p-2'}`}/>
      </div>

     </TableContainer>
  


  </>
  );
}

export default DenseTableRight;
