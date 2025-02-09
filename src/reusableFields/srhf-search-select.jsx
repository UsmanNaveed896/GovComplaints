import { Controller, useFormContext } from 'react-hook-form';
import { Stack, TextField, Typography, Autocomplete, Paper } from '@mui/material';
import { MdOutlineExpandMore } from 'react-icons/md';

export const SRHFSearchSelect = ({
  options,
  name,
  getOptionLabel = (option) => option?.label || option.name,
  outerLabel,
  icon,
  dropdownHeight = 'auto',
  disabled = false,
  placeholder = "Select",
  fullWidth = true,
  sx = {},
  ...other
}) => {
  
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Stack 
          
          sx={{ width: '100%', ...sx }}
        >
          {/* {outerLabel && (
            <Typography 
              variant="overline" 
             
            >
              {outerLabel}
              {icon && <span style={{ marginLeft: '0.5rem', marginBottom:0 }}>{icon}</span>}
            </Typography>
          )} */}
          <Autocomplete
            disablePortal={false} // Ensures dropdown renders outside the modal
            options={options || []} 
            getOptionLabel={getOptionLabel}
            isOptionEqualToValue={(option, value) => option?.value == value || option?.value == value.id}
            value={options?.find(option => option.value === field.value) || null}
            onChange={(e, newValue) => {
              field.onChange(newValue ? newValue.value : "");
            }}
            disabled={disabled}
            popupIcon={<MdOutlineExpandMore />}
            PaperComponent={({ children }) => (
              <Paper
                style={{
                  maxHeight: dropdownHeight,
                  overflowY: 'auto',
                }}
              >
                {children}
              </Paper>
            )}
            renderInput={(params) => (
              <TextField
              {...params}
              label={outerLabel}
              placeholder={placeholder}
              error={!!error}
              helperText={error?.message || ""}
              fullWidth={fullWidth}
              size="small"
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
              {...other}
            />
            )}
          />
        </Stack>
      )}
    />
  );
};
