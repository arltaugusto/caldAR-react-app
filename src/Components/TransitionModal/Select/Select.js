import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 240,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const FormSelect = (props) => {
  const classes = useStyles();

  return (
        <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">{props.selectLabel}</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    value={props.input.value}
                    label={props.selectLabel}
                    onChange={props.input.onChange}
                    name={props.name}
                  >
                    {props.options.map((option) => <MenuItem
                            key={option.value}
                            name={props.id}
                            value={option.value}
                        >
                            {option.label}
                        </MenuItem>)}
                  </Select>
        </FormControl>
  );
};

export default FormSelect;
