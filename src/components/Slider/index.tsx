import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Slider, Typography } from "@mui/material";
import { useEffect } from "react";

export default function Sliders({
  slidersProps,
  handleChange,
  slidersState,
}: {
  slidersProps: Array<Record<string, any>>;
  handleChange: (event: any, id: any) => void;
  slidersState: Record<string, any>;
}) {
  return (
    <Box sx={{ width: 200 }}>
      <Stack
        spacing={2}
        direction="column"
        sx={{ mb: 1, height: "100%" }}
        alignItems="center"
      >
        {slidersProps.map((sliderProp) => {
          return (
            <>
              <Typography id="non-linear-slider" gutterBottom>
                {sliderProp.name}: {sliderProp.value}
              </Typography>
              <Slider
                aria-label="Volume"
                value={slidersState[sliderProp.id]}
                min={sliderProp.min}
                max={sliderProp.max}
                step={sliderProp.step}
                onChange={(e) => handleChange(e, sliderProp.id)}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
              />
            </>
          );
        })}
      </Stack>
    </Box>
  );
}
