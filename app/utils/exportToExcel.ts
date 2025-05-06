import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

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


const exportToExcel = async (data: DataRow[]) => {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("Payments Report");

  sheet.addRow([
    "ID", "Arr", "Client", "RNTS", "Bed N.", "Players N.", "ADR", "T.OPER",
    "Room", "Golf", "TRA", "CAR", "EXTRAS", "K.BACK", "TOTAL", "V.PAID", "UNPAID"
  ]);

  data.forEach((row, index) => {
    sheet.addRow([
      row.id, row.arr, row.client, row.rnts, row.bedN, row.playersN, row.adr,
      row.toper, row.room, row.golf, row.tra, row.car, row.extras, row.kBack,
      row.total, row.vPaid, row.unpaid
    ]);
  });

  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
  saveAs(blob, "payments_report.xlsx");
};

export default exportToExcel;
