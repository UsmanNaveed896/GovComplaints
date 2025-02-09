import {
  FormLabel,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Tooltip,
  Box,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { useState } from "react";


import { NumericFormat } from "react-number-format";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";



export function SRHFTextField({
  name,
  type = "text",
  variant = "outlined",
  readOnly = false,
  StartIcon,
  EndIcon,
  outerLabel,
  fullWidth = true,
  isNumber = false,
  isCurrency = false,
  isCode = false,
  ...other
}) {
  const { control } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  const endAdornment = type === "password" ? (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={() => setShowPassword((prev) => !prev)}
      >
        {showPassword ? <MdOutlineVisibility /> : <MdOutlineVisibilityOff />}
      </IconButton>
    </InputAdornment>
  ) : (
    EndIcon
  );

  const getTextFieldProps = () => ({
    autoComplete: "none",
    readOnly,
    endAdornment,
    startAdornment: StartIcon,
  });

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Stack>
        {/* <Tooltip
  title={error?.message || ""}
  placement="top"
  arrow
  disableFocusListener
  disableTouchListener
  PopperProps={{
    modifiers: [
      {
        name: "preventOverflow",
        options: {
          boundary: "window",
        },
      },
    ],
  }}
  componentsProps={{
    tooltip: {
      sx: {
        fontSize: "0.6rem !important", // Slightly bigger for readability
        backgroundColor: "white",
                color: "#333", 
        boxShadow: "0px 4px 6px rgba(0,0,0,0.3)", 
        padding: "0px 10px", 
        marginBottom: "6px !important", 

      },
    },
    arrow: {
      sx: {
        color: "white", // Match tooltip background
      },
    },
  }}
> */}
            {/* Wrapper box to ensure Tooltip triggers on hover */}
            <Box display="block">
              {isCurrency || isNumber ? (
                <NumericFormat
                  {...field}
                  label={outerLabel}
                  value={field.value ?? ""}
                  customInput={TextField}
                  decimalScale={2}
                  fixedDecimalScale={isCurrency}
                  thousandSeparator={true}
                  prefix={isCurrency ? "£ " : ""}
                  InputProps={{ ...getTextFieldProps(), autoComplete: "off" }} // Added autoComplete here
                  inputProps={{ style: { textAlign: "right" } }}
                  fullWidth={fullWidth}
                  variant={variant}
                                  
                  error={Boolean(error)}
                  helperText={error?.message}
                  size="small"
                  onValueChange={(values) => {
                    const numericValue = values.floatValue ?? null;
                    field.onChange(numericValue);
                  }}
                  onFocus={(e) => {
                    if (e.target instanceof HTMLInputElement) {
                      e.target.select();
                    }
                  }}
                  placeholder={other.placeholder}
                  disabled={other.disabled}
                  InputLabelProps={{ shrink: !!field.value || other.disabled }}
                  {...other}
                />
              ) : (
                <TextField
                  {...field}
                  label={outerLabel}
                  error={Boolean(error)}
                  helperText={error?.message}
                
                  type={showPassword ? "text" : type}
                  variant={variant}
                  InputProps={{ ...getTextFieldProps(), autoComplete: "off" }} // Added autoComplete
                  fullWidth={fullWidth}
                  size="small"
                  onChange={(e) => {
                    let value = e.target.value;
                    if (isCode) {
                      value = value.replace(/[^a-zA-Z0-9_]/g, "");
                    }
                    field.onChange(value);
                  }}
                  onFocus={(e) => e.target.select()}
                  placeholder={other.placeholder}
                  disabled={other.disabled}
                   sx={{
                '& .MuiInputLabel-root': {
                  color: 'green', // Green label
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'green', // Default green border
                  },
                  '&:hover fieldset': {
                    borderColor: 'darkgreen', // Darker green on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'green', // Green border when focused
                  },
                },
                '& .MuiFormHelperText-root': {
                  color: 'error.main',
                  fontSize: '0.75rem',
                  marginLeft: '0px',
                }
              }}
                  InputLabelProps={{ shrink: !!field.value || other.disabled }}
                  {...other}
                />
              )}
            </Box>
          {/* </Tooltip> */}
        </Stack>
      )}
    />
  );
}
