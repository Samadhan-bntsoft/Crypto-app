import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import { Container, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useGetExchangesQuery } from "../services/CryptoApi";
import millify from "millify";
import parse from "html-react-parser";


 function Row(props) {
   const { row } = props
  const [open, setOpen] = React.useState(false);
   
  return (
    <>
      <TableRow key={row.id}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell component="td" align="center">
          {row.name}
        </TableCell>
        <TableCell component="td" align="center">
          {millify(row.volume)}
        </TableCell>
        <TableCell component="td" align="center">
          {row.numberOfMarkets}
        </TableCell>
        <TableCell component="td" align="center">
          {millify(row.marketShare)}%
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
              <Typography variant="h6" gutterBottom component="h6">
                Description
              </Typography>
              <Typography  component="div">{parse(`${row.description}`)}</Typography>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}


export default function Exchanges() {

  const { data } = useGetExchangesQuery();
  const exchanges = data?.data?.exchanges;
  if (!exchanges) return "Loading...";
  return (
      <TableContainer component={Paper}>
        <Typography component="h2" variant="h5" m={2}>
          Exchanges report
        </Typography>

        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="center">Exchanges</TableCell>
              <TableCell align="center">24h Trade Volume</TableCell>
              <TableCell align="center">Markets</TableCell>
              <TableCell align="center">Change</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {exchanges.map((row) => (
              <Row key={row.id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
  );
}
