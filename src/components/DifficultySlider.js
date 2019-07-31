import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";


const useStyles = makeStyles({
  root: {
    width: 400
  }
});

export default function ContinuousSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const marks = [
    {
      value: 0,
      label: "Stupid Easy"
    },
    {
      value: 1,
      label: "Pretty Easy"
    },
    {
        value: 2,
        label: 'Easy'
    },
    {
        value: 3,
        label: 'Semi Easy'
    },
    {
        value: 4,
        label: 'Small Challenge'
    },
    {
        value: 5,
        label: 'Challenge'
    },
    {
        value: 6,
        label: 'Harder Challenge'
    },
    {
        value: 7,
        label: 'Kinda Difficult'
    },
    {
        value: 8,
        label: 'Hard'
    },
    {
        value: 9,
        label: 'Very Hard'
    },
    {
        value: 10,
        label: 'Overwhelming Dread'
    }
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="continuous-slider" gutterBottom>
        
      </Typography>
      <Grid container spacing={2}>
        <Grid item />
        <Grid item xs>
          <Slider
            value={value}
            step={10}
            marks={true}
            min={0}
            max={100}
            onChange={handleChange}
            aria-labelledby="continuous-slider"
            valueLabelDisplay="auto"
          />
        </Grid>
        <Grid item />
      </Grid>
    </div>
  );
}
