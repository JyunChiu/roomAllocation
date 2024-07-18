import React, { FC, useCallback, memo } from "react";
import { RoomInfo } from "types/data";
import { Button } from "components/Buttons";
import TextField from "components/TextField";
import { Container } from "./CustomInputNumber.style";

interface Props {
  name: string;
  value: number;
  disabled: boolean;
  step: number;
  max: number;
  min: number;

  onGuestNumberChange: (name: string, val: string | number) => void;
}

const CustomInputNumber: FC<Props> = ({
  name,
  value,
  disabled,
  max,
  min,
  onGuestNumberChange,
}) => {
  console.log("max", name, max);
  return (
    <Container>
      <Button className="button" outlined disabled={value === min || disabled}>
        －
      </Button>
      <TextField
        name={name}
        className="guest-input"
        value={value}
        label=""
        type="number"
        disabled={disabled}
        onChange={onGuestNumberChange}
      />
      <Button className="button" outlined disabled={value === max || disabled}>
        ＋
      </Button>
    </Container>
  );
};

export default memo(CustomInputNumber);
