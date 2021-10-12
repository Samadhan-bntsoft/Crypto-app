import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { useGetExchangesQuery } from "../services/CryptoApi";
import Loader from "./Loader";
import { Row } from "../ExchangeReuse/Row";

const exchangesTitle = ["Exchanges", "24h Trade Volume", "Markets", "Change"];

export default function Exchanges() {
  const { data } = useGetExchangesQuery();
  const exchanges = data?.data?.exchanges;
  if (!exchanges) return <Loader />;
  return (
    <TableContainer component={Paper}>
      <Typography component="h2" variant="h5" m={2}>
        Exchanges report
      </Typography>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell />
            {exchangesTitle.map((row,i) => (
              <TableCell key={i} align="center">{row}</TableCell>
            ))}
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
