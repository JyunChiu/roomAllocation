import React, {
  FC,
  useCallback,
  useContext,
  useState,
  memo,
  useEffect,
} from "react";
import { AppContext } from "src/contexts";
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
  roomNo: number;
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
  roomNo,
  handleGuestNumberChange,
  handleGuestNumberBlur,
}) => {
  const { guest } = useContext(AppContext);
  const [currCount, setCurrCount] = useState<number>(value);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setCurrCount(value);
  }, [value]);

  const onGuestNumberChange = useCallback(
    (name: string, val: string | number) => {
      if ((val as number) > max || (val as number) < min) return;
      handleGuestNumberChange(name, val);
      setCurrCount(val as number);
    },
    [max, min, handleGuestNumberChange, setCurrCount]
  );

  const onGuestNumberBlur = useCallback(
    (name: string, val?: string | number) => {
      if (!val) {
        handleGuestNumberBlur(name, 0);
        setCurrCount(0);
      }
    },
    [handleGuestNumberBlur]
  );

  const modifyNumber = useCallback(
    (delta: number) => {
      setCurrCount((prev) => {
        if (delta > 0 && prev + delta > max) return prev;
        if (delta < 0 && prev + delta < min) return prev;
        return prev + delta;
      });
    },
    [min, max]
  );

  const startChange = useCallback(
    (delta: number) => {
      modifyNumber(delta);
      const id = setInterval(() => modifyNumber(delta), 200);
      setIntervalId(id);
    },
    [modifyNumber]
  );

  const stopChange = useCallback(() => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
      handleGuestNumberChange(name, currCount);
    }
  }, [intervalId, handleGuestNumberChange, currCount, name]);

  return (
    <Container>
      <Button
        className="button"
        outlined
        disabled={value <= min || !guest[name]}
        onMouseDown={() => startChange(-step)}
        onMouseUp={stopChange}
        onMouseLeave={stopChange}
        onTouchStart={() => startChange(-step)}
        onTouchEnd={stopChange}
      >
        －
      </Button>
      <TextField
        key={`room-${roomNo}--${name}`}
        name={name}
        className="guest-input"
        value={currCount}
        label=""
        disabled={!guest[name] || disabledInput}
        onChange={onGuestNumberChange}
        onBlur={onGuestNumberBlur}
      />
      <Button
        className="button"
        outlined
        disabled={value >= max || !guest[name]}
        onMouseDown={() => startChange(step)}
        onMouseUp={stopChange}
        onMouseLeave={stopChange}
        onTouchStart={() => startChange(step)}
        onTouchEnd={stopChange}
      >
        ＋
      </Button>
    </Container>
  );
};

export default memo(CustomInputNumber);
