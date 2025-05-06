import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

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


const exportToPDF = async (data: DataRow[]) => {
  const doc = new jsPDF();
  doc.text("Payments Report", 14, 10);

  const tableData = data.map((row) => [
    row.id, row.arr, row.client, row.rnts, row.bedN, row.playersN, row.adr,
    row.toper, row.room, row.golf, row.tra, row.car, row.extras, row.kBack,
    row.total, row.vPaid, row.unpaid
  ]);

  (doc as any).autoTable({
    head: [[
      "ID", "Arr", "Client", "RNTS", "Bed N.", "Players N.", "ADR", "T.OPER",
      "Room", "Golf", "TRA", "CAR", "EXTRAS", "K.BACK", "TOTAL", "V.PAID", "UNPAID"
    ]],
    body: tableData,
  });

  doc.save("payments_report.pdf");
};

export default exportToPDF;
