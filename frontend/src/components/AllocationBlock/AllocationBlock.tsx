import React, { FC, useContext, useState, useMemo, useCallback } from "react";
import { AppContext } from "src/contexts";
import { FieldLabel } from "types/common";
import { Result } from "types/data";
import RoomAllocation from "./RoomAllocation";
import { Container } from "./AllocationBlock.style";

const AllocationBlock: FC = () => {
  const { guest, rooms } = useContext(AppContext);
  const [result, setResult] = useState<Result[]>([
    { adult: 1, child: 2, price: 0 },
    { adult: 0, child: 3, price: 0 },
    { adult: 4, child: 0, price: 0 },
  ]);

  const totalPrice = useMemo(
    () => result.reduce((acc, val) => acc + val.price, 0),
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
      console.group("index :::::", index);
      console.group("updatedRoom :::::", updatedRoom);
      const updatedResult = [...result];
      updatedResult.splice(index, 1, updatedRoom);
      setResult(updatedResult);
      console.log("result :::::", updatedResult);
      console.groupEnd();
    },
    [result, setResult]
  );

  return (
    <Container>
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
            onChange={(updatedResult) => handleResultChange(i, updatedResult)}
          />
        ))}
      </div>
    </Container>
  );
};

export default AllocationBlock;
