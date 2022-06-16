import { useState } from "react";
import Deck from "../components/Cards/cards";
import Sliders from "../components/Slider";
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

  const [slidersState, setSliderState] = useState<Record<string, any>>({});

  const handleChange = (event: any, id: any) => {
    setSliderState({ ...slidersState, [id]: event.target.value });
  };

  const toFn = (i: number) => to({ i, ...endingState });

  console.log({ toFn });

  const slidersProps = Object.keys(endingState).map((id: string) => {
    return {
      name: id,
      id,
      value: endingState[id],
      min: -1000,
      max: 1000,
      step: 10,
    };
  });

  return (
    <>
      <div className={styles.panel}>
        <Sliders
          slidersProps={slidersProps}
          handleChange={handleChange}
          slidersState={slidersState}
        />
      </div>
      <div className={styles.container}>
        <Deck to={toFn} from={from} trans={trans} />
      </div>
    </>
  );
}
