import React, { FC, useContext, useMemo, useCallback } from "react";
import { AppContext } from "src/contexts";
import { FieldLabel } from "types/common";
import { Result } from "types/data";
import { Button } from "components/Buttons";
import RoomAllocation from "./RoomAllocation";
import { Container } from "./AllocationBlock.style";

const AllocationBlock: FC = () => {
  const { guest, rooms, result, setResult, getDefaultRoomAllocation } =
    useContext(AppContext);

  const totalPrice = useMemo(
    () => result.reduce((acc, val) => acc + (val?.price || 0), 0),
    [result]
  );

  const unassigned = useMemo(
    () =>
      result.reduce(
        (info, curr) => ({
          adult: info.adult - curr.adult,
          child: info.child - curr.child,
        }),
        { adult: guest.adult, child: guest.child }
      ),
    [result, guest]
  );

  const handleResultChange = useCallback(
    (index: number, updatedRoom: Result) => {
      const updatedResult = [...result];
      updatedResult.splice(index, 1, updatedRoom);
      console.log("result :::::", updatedResult);
      setResult(updatedResult);
    },
    [setResult, result]
  );

  const disableAllocate = useMemo(() => {
    const noRoom = !rooms.length;
    const noGuest = !(guest.adult + guest.child);
    return noRoom || noGuest;
  }, [guest, rooms]);

  return (
    <Container>
      <Button
        className="reset-btn"
        small
        onClick={getDefaultRoomAllocation}
        disabled={disableAllocate}
      >
        Recommended Allocation
      </Button>
      <div className="title-box">
        <span className="label">Guest:</span>
        <span className="value">{guest.adult || 0}</span>
        <span className="label">{FieldLabel.adult}</span>
        <span>/</span>
        <span className="value">{guest.child || 0}</span>
        <span className="label">{FieldLabel.child}</span>
        <span>/</span>
        <span className="value">{rooms.length || 0}</span>
        <span className="label">{FieldLabel.room}</span>
        <span className="sub-title">
          <span className="label">{FieldLabel.totalPrice}:</span>
          <span className="value">{totalPrice || 0}</span>
        </span>
      </div>
      <div className="unassigned-box">
        <span>Unassigned Personnel Count：</span>
        <span className="value">{unassigned.adult || 0}</span>
        <span className="label">{FieldLabel.adult}</span>
        <span>/</span>
        <span className="value">{unassigned.child || 0}</span>
        <span className="label">{FieldLabel.child}</span>
      </div>
      <div className="rooms-box">
        {result.map((item, i) => (
          <RoomAllocation
            key={`room-card${i + 1}`}
            roomNo={i + 1}
            data={item}
            roomInfo={rooms[i]}
            unassigned={unassigned}
            handleResultChange={(updatedResult) =>
              handleResultChange(i, updatedResult)
            }
          />
        ))}
      </div>
    </Container>
  );
};

export default AllocationBlock;
