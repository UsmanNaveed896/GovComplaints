import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Box,
  Button,
  Typography,
} from "@mui/material";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

import {
  SFormProvider,
  SRHFSearchSelect,
  SRHFTextField,
} from "@/reuseableFields";





const AddNotesDialog = ({
  open,
  handleClose,
 
}) => {
  const schema = Yup.object().shape({
    typeId: Yup.string().nullable().required("Required"),
    status: Yup.string().nullable().required("Required"),
    content: Yup.string().nullable().required("Required"),
  });

  const debtData = useDebtHook();
  const [dropDownValues, setDropDownValues] = useState({
    noteType: [],
    status: [],
  });

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      content: "",
    },
  });
  const { handleSubmit, watch, reset } = methods;

 


  const onSubmit = async (formData) => {
    try {
    

  
    
    } catch (error) {
  
    }
  };

  return (
    <div>
      {" "}
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <SFormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle
      sx={{
        px: 1, // Padding X
        py: 1, // Padding Y
        display: 'flex',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 10, // Ensure the title stays above content
        backgroundColor: '#ffffff', // Add a background color for clarity
        alignItems: 'center', // Center align vertically
      }}
    >
      <Typography
        variant="table_heading"
        sx={{
          fontSize: { xs: '16px', sm: '18px', md: '20px' },
          fontWeight: 600,
          color: '#334155',
          textTransform: 'capitalize', // Replace "capitalized" from Tailwind
          textAlign: 'left', // Center align text
          flex: 1, // Allow the title to occupy available space
        }}
      >
       Add Notes
      </Typography>
      <IconButton
        onClick={handleClose}
        sx={{
          ml: 1, // Margin left for spacing
          color: '#334155', // Icon color
        }}
      >
        <CloseIcon />
      </IconButton>
    </DialogTitle>

          <DialogContent sx={{ paddingX: 2, paddingY: 1 }} dividers>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: "3px",
              }}
            >
              <SRHFSearchSelect
                name={"typeId"}
                options={dropDownValues?.noteType}
                outerLabel={"Note Type"}
                fullWidth
                style={{ width: "180px" }}
              />
              <SRHFSearchSelect
                name={"status"}
                options={dropDownValues?.status}
                outerLabel={"Life Cycle Status"}
                style={{ width: "180px" }}
              />
            </Box>
            <Box className="mt-4">
              <SRHFTextField
                name="content"
                size="small"
                multiline
                rows={4}
                fullWidth
                placeholder="Enter Description"
                outerLabel="Description"
              />
            </Box>
          </DialogContent>

          <DialogActions
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button
              onClick={handleClose}
              color="primary"
              variant="solve_secondary"
              disableRipple
            >
              Cancel
            </Button>
            <Button type="submit" variant="contained">
              {debtData?.loading ? "Submitting" : "Submit"}
            </Button>
          </DialogActions>
        </SFormProvider>
      </Dialog>
    </div>
  );
};

export default AddNotesDialog;
