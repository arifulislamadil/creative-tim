import React from 'react';
import "./Project.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(
    name,
    calories,
    fat,
    carbs,
    protein,
  ) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Soft UI XD Version', 159, "$14000", 24, 4.0),
    createData('Add Progress Track', 237, "$3,000"	
    , 37, 4.3),
    createData('Fix Platform Errors', 262, "Not set	", 24, 6.0),
    createData('Launch our Mobile App', 305, "$20,50", 4.3),
    createData('Add the New Pricing Page', "$500", 49, 3.9),
    createData('Redesign New Online Shop', 356, "$2,000", 49, 3.9),
  ];

const Project = () => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <div style={{marginLeft:"10px"}}>
                        <h3>Projects</h3>
                        <h4> 30 done this months</h4>
                    </div>
                    <TableRow>
                        <TableCell>COMPANIES</TableCell>
                        <TableCell align="right">MEMBERS</TableCell>
                        <TableCell align="right">BUDGET</TableCell>
                        <TableCell align="right">COMPLETION</TableCell>
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
                            <TableCell align="center">{row.calories}</TableCell>
                            <TableCell align="center">{row.fat}</TableCell>
                            <TableCell align="center">{row.carbs}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Project;