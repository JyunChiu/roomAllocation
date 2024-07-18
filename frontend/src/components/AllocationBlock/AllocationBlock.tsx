import React, { FC, useContext, useState, useMemo } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { AppContext } from "src/contexts";
import { FieldLabel } from "types/common";
import { Result } from "types/data";
import { Container, RoomCard } from "./AllocationBlock.style";

const AllocationBlock: FC = () => {
  const { guest, rooms } = useContext(AppContext);
  const [result, setResult] = useState<Result[]>([
    { adult: 1, child: 2, price: 0 },
    { adult: 0, child: 3, price: 0 },
    { adult: 4, child: 0, price: 0 },
  ]);

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
          <RoomCard key={`room-card${i + 1}`}>
            <div className="room-title">
              <span className="label">{FieldLabel.room}</span>
              <span>:</span>
              <div className="icon-box">
                <PersonIcon />
              </div>
              <span className="number-of-guest">
                x {item.adult + item.child}
              </span>
            </div>
            <div className="guests-info-box">
              <div className="guest-box">
                <div className="title-zone">
                  <span className="title">{FieldLabel.adult}</span>
                  <span className="sub-title">Age 20+</span>
                </div>
                <div className="input-zone"></div>
              </div>
              <div className="guest-box">
                <div className="title-zone">
                  <span className="title">{FieldLabel.child}</span>
                </div>
                <div className="input-zone"></div>
              </div>
            </div>
          </RoomCard>
        ))}
      </div>
    </Container>
  );
};

export default AllocationBlock;
