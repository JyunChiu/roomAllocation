import React, { FC, useContext, useCallback } from "react";
import ErrorIcon from "@mui/icons-material/Error";
import { AppContext } from "src/contexts";
import { FieldLabel } from "types/common";
import { RoomInfo } from "types/data";
import { Delete } from "@mui/icons-material";
import { IconButton } from "components/Buttons";
import TextField from "components/TextField";
import AddButton from "./AddButton";
import {
  Container,
  GuestArea,
  RoomArea,
  PriceBar,
} from "./BaseInfoBlock.style";

const BaseInfoBlock: FC = () => {
  const {
    guest,
    setGuest,
    rooms,
    setRooms,
    result,
    setResult,
    notEnoughCapacity,
  } = useContext(AppContext);

  const handleConfigChange = useCallback(
    (name: string, val: string | number) => {
      setGuest((prev) => ({ ...prev, [name]: val }));
    },
    [setGuest]
  );

  const handleAdultCountBlur = useCallback(
    (_: string, val?: string | number) => {
      if (!val) setGuest({ adult: 0, child: 0 });
    },
    [setGuest]
  );

  const handleRoomDelete = useCallback(
    (index: number) => {
      const tempRooms = [...rooms];
      tempRooms.splice(index, 1);
      setRooms(tempRooms);

      const tempResult = [...result];
      tempResult.splice(index, 1);
      setResult(tempResult);
    },
    [rooms, setRooms, result, setResult]
  );

  const handleRoomInfoChange = useCallback(
    (index: number, name: string, val: string | number) => {
      const tempRooms = [...rooms];
      const updatedRoom = { ...tempRooms[index], [name]: val };
      tempRooms.splice(index, 1, updatedRoom);
      setRooms(tempRooms);
    },
    [rooms, setRooms]
  );

  const handleRoomAdd = useCallback(
    (item: RoomInfo) => {
      setRooms((prev) => [...prev, item]);
      setResult((prev) => [...prev, { adult: 0, child: 0, price: 0 }]);
    },
    [setRooms, setResult]
  );

  return (
    <Container>
      <GuestArea>
        {Object.entries(guest).map(([fieldName, fieldVal]) => (
          <div className="field-box" key={fieldName}>
            <div className="label">
              {FieldLabel[fieldName as keyof typeof FieldLabel]}
            </div>
            <TextField
              labelFixed
              name={fieldName}
              label=""
              type="number"
              value={fieldVal}
              disabled={fieldName === "child" && !guest.adult}
              onBlur={handleAdultCountBlur}
              onChange={handleConfigChange}
            />
          </div>
        ))}
      </GuestArea>
      <RoomArea>
        <div className="title-box">
          <div className="label">Rooms</div>
          <AddButton onConfirm={handleRoomAdd} />
          {notEnoughCapacity && (
            <div className="error-message">
              <ErrorIcon />
              Capacity is less than the number of guests
            </div>
          )}
        </div>

        <div className="rooms-box">
          {rooms.map((item, i) => (
            <PriceBar key={`room#${i}`}>
              <div className="room-no">#{i + 1}</div>
              {Object.entries(item).map(([fieldName, fieldVal]) => (
                <div className="field-box" key={fieldName}>
                  <TextField
                    labelFixed
                    type="number"
                    name={fieldName}
                    label={FieldLabel[fieldName as keyof typeof FieldLabel]}
                    value={fieldVal}
                    onChange={(name: string, val: string | number) =>
                      handleRoomInfoChange(i, name, val)
                    }
                  />
                </div>
              ))}
              <IconButton onClick={(): void => handleRoomDelete(i)}>
                <Delete />
              </IconButton>
            </PriceBar>
          ))}
        </div>
      </RoomArea>
    </Container>
  );
};

export default BaseInfoBlock;
