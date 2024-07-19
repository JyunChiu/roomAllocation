import React, {
  FC,
  useCallback,
  useEffect,
  useContext,
  useRef,
  useState,
  memo,
} from "react";
import { AppContext } from "src/contexts";
import { RoomInfo } from "types/data";
import { Button } from "components/Buttons";
import TextField from "components/TextField";
import { Container } from "./CustomInputNumber.style";

interface Props {
  name: "adult" | "child";
  value: number;
  disabledInput?: boolean;
  step: number;
  max: number;
  min: number;
  handleGuestNumberChange: (name: string, val: string | number) => void;
  handleGuestNumberBlur: (name: string, val?: string | number) => void;
}

const CustomInputNumber: FC<Props> = ({
  name,
  value,
  max,
  min,
  step,
  disabledInput,
  handleGuestNumberChange,
  handleGuestNumberBlur,
}) => {
  const { guest } = useContext(AppContext);

  const timer = useRef(null);

  const handleIncrement = () => {
    if (value < max) {
      timer.current = setInterval(
        () => handleGuestNumberChange(name, value + step),
        500
      );
    }
  };

  const handleDecrement = () => {
    if (value > min) {
      timer.current = setInterval(
        () => handleGuestNumberChange(name, value - step),
        500
      );
    }
  };

  const handleClearInterval = () => {
    clearInterval(timer.current);
  };

  // const handleMouseDown = (operation: "increment" | "decrement") => {
  //   // Initial operation
  //   operation === "increment" ? handleIncrement() : handleDecrement();

  //   // Set up interval for continuous operation
  //   holdTimeoutRef.current = setTimeout(() => {
  //     intervalRef.current = setInterval(() => {
  //       operation === "increment" ? handleIncrement() : handleDecrement();
  //     }, 100);
  //   }, 500);
  // };

  // const handleMouseUp = () => {
  //   if (holdTimeoutRef.current) {
  //     clearTimeout(holdTimeoutRef.current);
  //     holdTimeoutRef.current = null;
  //   }
  //   if (intervalRef.current) {
  //     clearInterval(intervalRef.current);
  //     intervalRef.current = null;
  //   }
  // };

  const onGuestNumberChange = useCallback(
    (name: string, val: string | number) => {
      if ((val as number) > max || (val as number) < min) return;
      handleGuestNumberChange(name, val);
    },
    [max, min, handleGuestNumberChange]
  );

  return (
    <Container>
      <Button
        className="button"
        outlined
        disabled={value <= min || !guest[name]}
        // onClick={handleDecrement}
        onMouseDown={handleDecrement}
        onMouseUp={handleClearInterval}
        onMouseLeave={handleClearInterval}
      >
        －
      </Button>
      <TextField
        name={name}
        className="guest-input"
        value={value}
        label=""
        type="number"
        disabled={!guest[name] || disabledInput}
        onChange={onGuestNumberChange}
        onBlur={handleGuestNumberBlur}
      />
      <Button
        className="button"
        outlined
        disabled={value >= max || !guest[name]}
        // onClick={handleIncrement}
        onMouseDown={handleIncrement}
        onMouseUp={handleClearInterval}
        onMouseLeave={handleClearInterval}
      >
        ＋
      </Button>
    </Container>
  );
};

export default memo(CustomInputNumber);
