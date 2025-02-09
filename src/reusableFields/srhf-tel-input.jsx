import { Stack } from "@mui/material";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import { Controller, useFormContext } from "react-hook-form";

export function SRHFTelInput({
  name,
  outerLabel,
  placeholder,
  variant = "outlined",
  readOnly = false,
  defaultCountry = "GB",
  ...other
}) {
  const { control, setError, clearErrors, setValue } = useFormContext();

  const handleChange = (newPhone) => {
    const formattedPhone = newPhone.trim();
    setValue(name, formattedPhone);

    if (matchIsValidTel(formattedPhone)) {
      clearErrors(name);
    } else {
      console.log("Invalid phone number format.");
    }
  };

  const validate = (phone) => {
    const formattedPhone = phone?.trim();
    if (!matchIsValidTel(formattedPhone)) {
      setError(name, { type: "manual", message: " " });
    } else {
      clearErrors(name);
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Stack>
          <MuiTelInput
            {...field}
            error={Boolean(error)}
            helperText={error?.message}
            variant={variant}
            label={outerLabel}
            onChange={(value) => handleChange(value)}
            onBlur={() => validate(field.value)}
            defaultCountry={defaultCountry}
            onlyCountries={[defaultCountry]}
            disableFormatting={false}
            placeholder={placeholder}
            sx={{
              fontSize: "0.8rem", // Decrease text size
              "& .MuiInputBase-root": {
                height: "36px", // Reduce height
                minHeight: "36px",
                borderRadius: "6px", // Rounded corners
                borderColor: "green", // Border color
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "green", // Default green border
                },
                "&:hover fieldset": {
                  borderColor: "darkgreen", // Dark green on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "green", // Green border when focused
                },
              },
              "& .MuiInputLabel-root": {
                color: "green", // Label color
                fontSize: "0.8rem",
              },
              "& .MuiFormHelperText-root": {
                color: "error.main",
                fontSize: "0.7rem",
                marginLeft: "0px",
              },
            }}
            {...other}
          />
        </Stack>
      )}
    />
  );
}
