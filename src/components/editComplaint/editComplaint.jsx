import React, { useState } from "react";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SFormProvider } from "../../reusableFields/sform-provider";
import { SRHFTextField } from "../../reusableFields/srhf-textfield";
import { SRHFSearchSelect } from "../../reusableFields/srhf-search-select";
import { SRHFTelInput } from "../../reusableFields/srhf-tel-input";
import { SRHFFileUpload } from "../../reusableFields/srhf-fileupload";
import { useNavigate } from "react-router-dom";
const EditComplaint = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    source: "WhatsApp Complaints",
    department: "NADRA",
    userName: "Fatima",
    cnic: "4210141965724",
    userNumber: "923242107209",
    telephone: "",
    address: "House #E/248 moosa colony F.b area karachi",
    note: "13",
  });

 
  const schema = Yup.object().shape({
    typeId: Yup.string().nullable().required("Required"),
    status: Yup.string().nullable().required("Required"),
    content: Yup.string().nullable().required("Required"),
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
    } catch (error) {}
  };

  const handleCancel=()=>{
    navigate(-1)
  }
  return (
    <div className="p-4 bg-white rounded-2xl h-[100%] overflow-y-auto">
      <SFormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Edit Complaint
          </Typography>

          <Grid container spacing={2}>
            {/* Source */}
            <Grid size={{ xs: 12, md: 12 }}>
              <SRHFTextField
                name="content"
                size="small"
                multiline
                rows={1}
                fullWidth
                outerLabel="Source"
              />
            </Grid>

            {/* Department */}
            <Grid size={{ xs: 12, md: 12 }}>
              <SRHFSearchSelect
                name={"status"}
                options={[]}
                outerLabel={"Department *"}
              />
            </Grid>

            {/* User Name */}
            <Grid size={{ xs: 12, md: 12 }}>
              <SRHFTextField
                name="content"
                size="small"
                multiline
                rows={1}
                fullWidth
                outerLabel="User Name *"
              />
            </Grid>

            {/* CNIC */}
            <Grid size={{ xs: 12, md: 12 }}>
              <SRHFTextField
                name="content"
                size="small"
                multiline
                rows={1}
                fullWidth
                outerLabel="Cnic *"
              />
            </Grid>

            {/* User Number */}
            <Grid size={{ xs: 12, md: 12 }}>
              <SRHFTelInput
                name={`contacts.1.addressReference`}
                outerLabel="User Number"
                defaultCountry="PK"
              />
            </Grid>

            {/* Telephone Number */}
            <Grid size={{ xs: 12, md: 12 }}>
              <SRHFTextField
                name="content"
                size="small"
                multiline
                rows={1}
                fullWidth
                outerLabel="Telephone Number "
              />
            </Grid>

            {/* Address */}
            <Grid size={{ xs: 12, md: 12 }}>
              <SRHFTextField
                name="content"
                size="small"
                multiline
                rows={1}
                fullWidth
                outerLabel="Address *"
              />
            </Grid>

            {/* Note */}
            <Grid size={{ xs: 12, md: 12 }}>
              <SRHFTextField
                name="content"
                size="small"
                multiline
                rows={4}
                fullWidth
                outerLabel="Note *"
              />
            </Grid>

            {/* File Upload */}
            <Grid size={{ xs: 12, md: 2 }}>
              <SRHFFileUpload
                name="uploadedFile"
                outerLabel="Upload file"
                allow={""}
                fullWidth
              />
            </Grid>
            <Divider sx={{ borderBottomWidth: "1px" }} />
            {/* Actions */}
            <Grid
              size={{ xs: 12, md: 12 }}
              display="flex"
              justifyContent="space-between"
            >
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{
                  minWidth: "30px",
                  padding: "6px 6px",
                  fontSize: "0.75rem",
                  bgcolor: "#004512",
                }}
              >
                Update and go back to list
              </Button>

              <Button vvariant="outlined"
                color="primary"
                size="small"
                sx={{
                  minWidth: "30px",
                  padding: "6px 6px",
                  fontSize: "0.75rem",
                  bgcolor: "#f4f5fd",
                }}
                onClick={handleCancel}
                >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Box>
      </SFormProvider>
    </div>
  );
};

export default EditComplaint;
