import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#5704aa",
    color: "white",
    fontSize: 18
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    backgroundColor: "#c9a9df"
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover
  },
  "&:last-child td, &:last-child th": {
    border: 0
  }
}));

function createData(No, BookName, Author, Amount) {
  return { No, BookName, Author, Amount };
}

const initialRows = [
  createData(1, "Book A", "1", "Rs.500.00"),
  createData(2, "Book B", "3", "Rs.800.00"),
  createData(3, "Book C", "2", "Rs.400.00"),
  createData(4, "Book D", "14", "Rs.5000.00"),
  createData(5, "Book E", "15", "Rs.5000.00"),
  createData(6, "Book D", "13", "Rs.4000.00"),
  createData(7, "Book E", "15", "Rs.3000.00")
];

const defaultTheme = createTheme();

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

function Orders() {
  // const [open, setOpen] = React.useState(true);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [rows, setRows] = React.useState(initialRows);

  const handleDelete = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  const confirmDelete = () => {
    setRows((prevRows) =>
      prevRows.filter((row) => row.No !== selectedProduct.No)
    );
    setModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[800],
            flexGrow: 1,
            height: "60vh",
            top: "0",
            overflow: "auto"
          }}
        >
          <Toolbar />
          <TableContainer
            component={Paper}
            sx={{
              border: "none",
              boxShadow: "none"
            }}
          >
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">No</StyledTableCell>
                  <StyledTableCell align="left">Book Name</StyledTableCell>
                  <StyledTableCell align="left">Quantity</StyledTableCell>
                  <StyledTableCell align="left">Amount</StyledTableCell>
                  <StyledTableCell align="left">Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.No}>
                    <StyledTableCell align="left">{row.No}</StyledTableCell>
                    <StyledTableCell align="left">
                      {row.BookName}
                    </StyledTableCell>
                    <StyledTableCell align="left">{row.Author}</StyledTableCell>
                    <StyledTableCell align="left">{row.Amount}</StyledTableCell>
                    <StyledTableCell align="right">
                      <IconButton onClick={() => handleDelete(row)}>
                        <DeleteIcon />
                      </IconButton>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>

      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            Delete Confirmation
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Are you sure you want to delete The Book:{" "}
            {selectedProduct?.BookName}?
          </Typography>
          <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
            <Button onClick={handleClose} sx={{ mr: 1 }}>
              Cancel
            </Button>
            <Button onClick={confirmDelete} variant="contained" color="error">
              Remove
            </Button>
          </Box>
        </Box>
      </Modal>
    </ThemeProvider>
  );
}

export default Orders;
