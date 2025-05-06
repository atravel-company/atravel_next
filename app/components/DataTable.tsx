import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

export interface DataRow {
  id: number;
  arr: string;
  client: string;
  rnts: string;
  bedN: string;
  playersN: string;
  adr: string;
  toper: string;
  room: string;
  golf: string;
  tra: string;
  car: string;
  extras: string;
  kBack: string;
  total: string;
  vPaid: string;
  unpaid: string;
}

interface RowData extends DataRow {} // ✅ Make sure RowData extends DataRow

const DataTable: React.FC<{ data: RowData[] }> = ({ data }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Arr</TableCell>
            <TableCell>Client</TableCell>
            <TableCell>RNTS</TableCell>
            <TableCell>Bed N.</TableCell>
            <TableCell>Players N.</TableCell>
            <TableCell>ADR</TableCell>
            <TableCell>T.OPER</TableCell>
            <TableCell>Room</TableCell>
            <TableCell>Golf</TableCell>
            <TableCell>TRA</TableCell>
            <TableCell>CAR</TableCell>
            <TableCell>EXTRAS</TableCell>
            <TableCell>K.BACK</TableCell>
            <TableCell>TOTAL</TableCell>
            <TableCell>V.PAID</TableCell>
            <TableCell>UNPAID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.arr}</TableCell>
              <TableCell>{row.client}</TableCell>
              <TableCell>{row.rnts}</TableCell>
              <TableCell>{row.bedN}</TableCell>
              <TableCell>{row.playersN}</TableCell>
              <TableCell>{row.adr}</TableCell>
              <TableCell>{row.toper}</TableCell>
              <TableCell>{row.room}</TableCell>
              <TableCell>{row.golf}</TableCell>
              <TableCell>{row.tra}</TableCell>
              <TableCell>{row.car}</TableCell>
              <TableCell>{row.extras}</TableCell>
              <TableCell>{row.kBack}</TableCell>
              <TableCell>{row.total}</TableCell>
              <TableCell>{row.vPaid}</TableCell>
              <TableCell>{row.unpaid}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;

