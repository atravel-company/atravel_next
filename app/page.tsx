"use client";

import { useState } from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import FilterSection from "@/app/components/FilterSection";
import DataTable from "@/app/components/DataTable";
import exportToExcel from "@/app/utils/exportToExcel";
import exportToPDF from "@/app/utils/exportToPDF";
import { FileDownload, PictureAsPdf } from "@mui/icons-material";

interface Filters {
  operator: string;
  supplier: string;
  client: string;
  startDate: Date | null;
  endDate: Date | null;
}

interface DataRow {
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

export default function Home() {
  const [filters, setFilters] = useState<Filters>({
    operator: "",
    supplier: "",
    client: "",
    startDate: null,
    endDate: null,
  });

  const [data, setData] = useState<DataRow[]>([]);

  return (
    <Container maxWidth="lg" sx={{ paddingTop: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Payments Control
      </Typography>

      {/* Filter Section */}
      <Box
        sx={{
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
          boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <FilterSection filters={filters} setFilters={setFilters} />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "right", gap: 2, marginTop: 2 }}>
        <Button
          variant="contained"
          color="success"
          startIcon={<FileDownload />} // Excel download icon
          onClick={() => exportToExcel(data)}
        >
          Export to Excel
        </Button>

        <Button
          variant="contained"
          sx={{ backgroundColor: "#D32F2F", "&:hover": { backgroundColor: "#B71C1C" } }} // Red for PDF
          startIcon={<PictureAsPdf />} // PDF icon
          onClick={() => exportToPDF(data)}
        >
          Export to PDF
        </Button>
      </Box>


      {/* Data Table */}
      <Box
        sx={{
          marginTop: 3,
          backgroundColor: "white",
          padding: 2,
          borderRadius: 2,
          boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <DataTable data={data} />
      </Box>
    </Container>
  );
}
