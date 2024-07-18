import React, { FC } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { FieldLabel } from "types/common";
import { Result } from "types/data";
import { RoomCard } from "./RoomAllocation.style";

interface Props {
  roomInfo: Result;
  onChange: (updatedResult: Result) => void;
}

const RoomAllocation: FC<Props> = ({ roomInfo }) => {
  return (
    <RoomCard>
      <div className="room-title">
        <span className="label">{FieldLabel.room}</span>
        <span>:</span>
        <div className="icon-box">
          <PersonIcon />
        </div>
        <span className="number-of-guest">
          x {roomInfo.adult + roomInfo.child}
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
  );
};

export default RoomAllocation;
