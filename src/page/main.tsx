import { useEffect, useState } from "react";
import Deck from "../components/Cards/cards";
import Sliders from "../components/Slider";
import { Button, ButtonBase } from "@mui/material";
//@ts-ignore
import styles from "./styles.module.css";
import { to, from, trans } from "../utils";

export default function App() {
  const [endingState, setEndingState]: any = useState<{
    xV: number;
    yV: number;
    sC: number;
    rot: number;
    delay: number;
  }>({
    xV: 1,
    yV: 1,
    sC: 1,
    rot: 200,
    delay: 100,
  });

  const [reset, setReset] = useState(true);

  const handleChange = (event: any, id: any) => {
    setEndingState({ ...endingState, [id]: event.target.value });
  };

  const toFn = (endingState: any) => (i: number) => to({ i, ...endingState });

  const slidersProps = Object.keys(endingState).map((id: string) => {
    return {
      name: id,
      id,
      value: endingState[id],
      min: id === "sC" ? 0 : -200,
      max: id === "sC" ? 4 : 200,
      step: id === "sC" ? 0.1 : 1,
    };
  });

  const handleReset = () => {
    setReset(!reset);
  };

  return (
    <>
      <Button color="secondary" className={styles.button} onClick={handleReset}>
        reset
      </Button>

      <div className={styles.panel}>
        <Sliders
          slidersProps={slidersProps}
          handleChange={handleChange}
          slidersState={endingState}
        />
      </div>
      <div className={styles.container}>
        {reset ? (
          <Deck
            to={(i: any) => toFn(endingState)(i)}
            from={from}
            trans={trans}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
