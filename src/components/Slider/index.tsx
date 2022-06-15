import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Slider, Typography } from "@mui/material";
import { useState } from "react";

export default function Sliders({
  slidersProps,
}: {
  slidersProps: Array<Record<string, any>>;
}) {
  const [slidersState, setSliderState] = useState<Record<string, any>>({});

  const handleChange = (event: any, id: any) => {
    setSliderState({ ...slidersState, [id]: event.target.value });
  };

  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="column" sx={{ mb: 1 }} alignItems="center">
        {slidersProps.map((sliderProp) => {
          return (
            <>
              <Typography id="non-linear-slider" gutterBottom>
                Storage: {valueLabelFormat(calculateValue(value))}
              </Typography>
              <Slider
                aria-label="Volume"
                value={slidersState[sliderProp.id]}
                min={sliderProp.min}
                max={sliderProp.max}
                step={sliderProp.step}
                onChange={(e) => handleChange(e, sliderProp.id)}
              />
            </>
          );
        })}
        <Slider disabled defaultValue={30} aria-label="Disabled slider" />
      </Stack>
    </Box>
  );
}
