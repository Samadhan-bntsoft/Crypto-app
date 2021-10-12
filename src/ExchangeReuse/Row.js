import * as React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import { Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import millify from "millify";
import parse from "html-react-parser";

export const Row = (props) => {
  const { row } = props;
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
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Typography variant="h6" gutterBottom>
              Description
            </Typography>
            <Typography>{parse(`${row.description}`)}</Typography>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
