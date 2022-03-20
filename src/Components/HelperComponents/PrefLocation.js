import {
  Select,
  FormControl,
  MenuItem,
  Checkbox,
  OutlinedInput,
  ListItemText,
} from "@mui/material";
import React from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export function PrefLocation(props) {
  //location
  const locationArray = ["Chennai", "Bangalore", "Pune"];
  const { handleChange, values, className, optionalTextClass } = props;
  return (
    <div className={`${className} select`}>
      <span>Pref. Location</span>
      <FormControl fullWidth>
        <Select
          name="prefLocation"
          value={values.prefLocation}
          onChange={handleChange}
          labelId="demo-multiple-checkbox-label"
          multiple
          input={<OutlinedInput />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {locationArray.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={values?.prefLocation?.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <p className={optionalTextClass}>(optional)</p>
    </div>
  );
}
