import React, { FC, useContext, useCallback } from "react";
import { AppContext } from "src/contexts";
import TextField from "components/TextField";
import { Container, GuestArea } from "./BaseInfoBlock.style";

const BaseInfoBlock: FC = () => {
  const { guest, setGuest } = useContext(AppContext);

  const handleConfigChange = useCallback(
    (name: string, val: string | number) => {
      setGuest((prev) => ({ ...prev, [name]: val }));
    },
    [setGuest]
  );

  const handleAdultCountBlur = useCallback(
    (_: string, val?: string | number) => {
      if (!val) setGuest((prev) => ({ ...prev, children: 0 }));
    },
    [setGuest]
  );

  return (
    <Container>
      <GuestArea>
        <div className="field-box">
          <div className="label">Adult</div>
          <TextField
            labelFixed
            name="adult"
            label=""
            value={guest?.adult}
            onBlur={handleAdultCountBlur}
            onChange={handleConfigChange}
          />
        </div>
        <div className="field-box">
          <div className="label">Children</div>
          <TextField
            labelFixed
            name="children"
            label=""
            disabled={!guest?.adult}
            value={guest?.children}
            onChange={handleConfigChange}
          />
        </div>
      </GuestArea>
    </Container>
  );
};

export default BaseInfoBlock;
