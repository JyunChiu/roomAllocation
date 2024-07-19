import React, { FC, memo, useState, useCallback } from "react";
import { RoomInfo } from "types/data";
import { FieldLabel } from "types/common";
import { Button, PopoverButton } from "components/Buttons";
import { Box } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TextField from "components/TextField";
import { Container } from "./AddButton.style";

interface Props {
  onConfirm: (item: RoomInfo) => void;
}

const defaultRoomInfo = {
  roomPrice: 0,
  adultPrice: 0,
  childPrice: 0,
  capacity: 0,
};

const AddButton: FC<Props> = ({ onConfirm }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [roomItem, setRoomInfo] = useState<RoomInfo>(defaultRoomInfo);

  const handleConfirm = useCallback(() => {
    setOpen(false);
    onConfirm(roomItem);
  }, [roomItem, onConfirm]);

  const handleButtonStatus = useCallback(() => {
    setRoomInfo(defaultRoomInfo);
    setOpen((prev) => !prev);
  }, []);

  const handleConfigChange = useCallback(
    (name: string, val: string | number) => {
      setRoomInfo((prev) => ({ ...prev, [name]: val }));
    },
    [setRoomInfo]
  );

  return (
    <PopoverButton
      open={open}
      onClick={handleButtonStatus}
      onClose={handleButtonStatus}
      className="btn-add"
      button={{ icon: <AddCircleIcon /> }}
    >
      <Container>
        <div className="fields-box">
          {Object.entries(roomItem).map(([fieldName, fieldVal]) => (
            <div className="field-box" key={fieldName}>
              <TextField
                labelFixed
                name={fieldName}
                label={FieldLabel[fieldName as keyof typeof FieldLabel]}
                value={fieldVal}
                onChange={handleConfigChange}
              />
            </div>
          ))}
        </div>
        <Box className="footer">
          <Button outlined onClick={(): void => setOpen(false)} small>
            Cancel
          </Button>
          <Button onClick={handleConfirm} small>
            Confirm
          </Button>
        </Box>
      </Container>
    </PopoverButton>
  );
};

export default memo(AddButton);
