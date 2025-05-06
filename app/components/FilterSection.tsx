"use client";

import { Box, TextField, MenuItem, Button } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useState } from "react";


const operators = ["Operator A", "Operator B"];
const suppliers = ["Supplier X", "Supplier Y"];

interface Filters {
    operator: string;
    supplier: string;
    client: string;
    startDate: Date | null;
    endDate: Date | null;
}


const FilterSection = ({
    filters,
    setFilters,
  }: {
    filters: Filters;
    setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 2,
        backgroundColor: "#fff",
        padding: 3,
        borderRadius: 2,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Operator Selection */}
      <TextField
        select
        label="Operator"
        value={filters.operator}
        onChange={(e) => setFilters({ ...filters, operator: e.target.value })}
        sx={{ minWidth: 300 }}
      >
        <MenuItem value="">Select</MenuItem>
        {operators.map((op) => (
          <MenuItem key={op} value={op}>
            {op}
          </MenuItem>
        ))}
      </TextField>

      {/* Supplier Selection */}
      <TextField
        select
        label="Supplier"
        value={filters.supplier}
        onChange={(e) => setFilters({ ...filters, supplier: e.target.value })}
        sx={{ minWidth: 300 }}
      >
        <MenuItem value="">Select</MenuItem>
        {suppliers.map((sup) => (
          <MenuItem key={sup} value={sup}>
            {sup}
          </MenuItem>
        ))}
      </TextField>

      {/* Client Free Text Field */}
      <TextField
        label="Client"
        value={filters.client}
        onChange={(e) => setFilters({ ...filters, client: e.target.value })}
        sx={{ minWidth: 300 }}
      />

        <LocalizationProvider dateAdapter={AdapterDateFns}>
        {/* Start Date Picker */}
        <DatePicker
            label="Start Date"
            value={filters.startDate}
            onChange={(date: Date | null) => setFilters({ ...filters, startDate: date })}
            slotProps={{ textField: { fullWidth: false } }} 
        />

        {/* End Date Picker */}
        <DatePicker
            label="End Date"
            value={filters.endDate}
            onChange={(date: Date | null) => setFilters({ ...filters, endDate: date })}
            slotProps={{ textField: { fullWidth: false } }} 
        />
        </LocalizationProvider>


      {/* Search Button */}
      <Button
        variant="contained"
        color="primary"
        sx={{ height: "56px" }} // Align button height with inputs
        onClick={() => console.log("Filters:", filters)}
      >
        Search
      </Button>
    </Box>
  );
};

export default FilterSection;
