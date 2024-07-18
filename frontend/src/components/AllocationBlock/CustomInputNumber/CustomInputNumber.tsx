import React, { FC } from "react";
import { FieldLabel } from "types/common";
import { Result } from "types/data";
import { Button } from "components/Buttons";
import TextField from "components/TextField";
import { Container } from "./CustomInputNumber.style";

interface Props {
  value: number;

  // onChange: (updatedResult: Result) => void;
}

const CustomInputNumber: FC<Props> = ({ value }) => {
  return (
    <Container>
      <Button className="button" outlined>
        －
      </Button>
      <TextField className="guest-input" value={value} label="" />
      <Button className="button" outlined>
        ＋
      </Button>
    </Container>
  );
};

export default CustomInputNumber;
