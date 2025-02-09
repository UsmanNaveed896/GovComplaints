import React, { useState, useEffect } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import {
  IconButton,
  Stack,
  TextField,
  InputAdornment,
  FormHelperText,
  Tooltip,
} from '@mui/material';
import { toast } from 'react-toastify';
import { FaCloudUploadAlt } from 'react-icons/fa';

export function SRHFFileUpload({
  name,
  label,
  allow,
  maxSize,
  icon,
  outerLabel,
  ...other
}) {
  const { control, watch, setError, clearErrors } = useFormContext();
  const [selectedFile, setSelectedFile] = useState(null);
  const acceptedFileTypes = allow
    .split(',')
    .map((type) => `.${type.trim()}`)
    .join(',');
  const watchedField = watch(name);

  useEffect(() => {
    if (!watchedField || watchedField.length === 0) {
      setSelectedFile(null);
    }
  }, [watchedField]);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const handleChange = (event) => {
          const file = event.target.files?.[0];

          if (file) {
            const maxSizeInBytes = maxSize ? maxSize * 1024 * 1024 : Infinity;

            // Validate file size
            if (maxSize && file.size > maxSizeInBytes) {
              toast.error(`File size must be less than ${maxSize} MB.`);
              setSelectedFile(null);
              return;
            }

            // Validate file type
            if (!acceptedFileTypes.includes(file?.name?.split('.').pop() || '')) {
              toast.error(`Invalid file type. Allowed types: ${allow}`);
              setSelectedFile(null);
              return;
            }

            field.onChange(event.target.files);
            setSelectedFile(file);
            clearErrors(name);
          } else {
            setError(name, {
              type: 'manual',
              message: 'No file selected.',
            });
            setSelectedFile(null);
          }
        };

        return (
          <Stack>  
            <TextField
              {...field}
              fullWidth
              variant="outlined"
              label={outerLabel || label}
              value={selectedFile?.name || ''}
              onClick={() => document.getElementById(name)?.click()}
              error={!!error}
              helperText={error?.message}
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Tooltip title="Upload File">
                      <IconButton
                        component="label"
                        sx={{ color: 'primary.main' }}
                      >
                        {icon || <FaCloudUploadAlt className="text-[24px]" />}
                        <input
                          accept={acceptedFileTypes}
                          id={name}
                          type="file"
                          hidden
                          onChange={handleChange}
                          {...other}
                        />
                      </IconButton>
                    </Tooltip>
                  </InputAdornment>
                ),
              }}
            />

            {error && (
              <FormHelperText error>{error.message}</FormHelperText>
            )}
          </Stack>
        );
      }}
    />
  );
}
