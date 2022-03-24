import React from 'react';
import { FilterSection } from './styles';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { FormikValues, useFormik } from "formik";
import { FormFilter } from "../Home";

interface IFilters {
    initialValue: FormFilter,
    colors: any,
    onFindBykes: (params: FormFilter) => void
}

const Filters = ({ initialValue, colors, onFindBykes }: IFilters) => {
  const form = useFormik({
    initialValues: initialValue,
    onSubmit: (values: FormikValues) => {
      eventSubmit(values);
    }
  });

  const eventSubmit = (values: FormikValues) => {
    onFindBykes(values as FormFilter);
  };
  return (
        <FilterSection onSubmit={form.handleSubmit}>
            <TextField
                onChange={form.handleChange}
                value={form.values.query}
                label="Title"
                name="query"/>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="labelColor">Color</InputLabel>
                <Select
                    labelId="labelColor"
                    id="colors"
                    label="Color"
                    value={form.values.colors}
                    onChange={form.handleChange}
                    name="colors"
                >
                    {colors?.map((color: any, index: number) =>
                        <MenuItem key={`color-${index}`} value={color.id}>{color.name}</MenuItem>
                    )}

                </Select>
            </FormControl>
            <Button title="Find Cases" type={"submit"} color={'primary'} variant="contained">
                <SearchIcon/>
            </Button>
        </FilterSection>

  );
};

export { Filters };
