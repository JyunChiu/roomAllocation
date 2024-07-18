import React, { FC, useMemo, useContext, useCallback } from "react";
import { AppContext } from "src/contexts";
import PersonIcon from "@mui/icons-material/Person";
import { FieldLabel } from "types/common";
import { Result, RoomInfo } from "types/data";
import CustomInputNumber from "../CustomInputNumber";
import { RoomCard } from "./RoomAllocation.style";

interface Props {
  roomNo: number;
  roomInfo: RoomInfo;
  data: Result;
  unassigned: Result;
  onChange: (updatedResult: Result) => void;
}

const RoomAllocation: FC<Props> = ({
  data,
  roomNo,
  roomInfo: { roomPrice, adultPrice, childPrice, capacity },
  unassigned,
  onChange,
}) => {
  const { guest } = useContext(AppContext);

  const numberOfGuest = useMemo(
    () => (data.adult || 0) + (data.child || 0),
    [data]
  );

  const handlePriceCalculate = useCallback(
    (item: Result): number =>
      roomPrice + adultPrice * item.adult + childPrice * item.child,

    [roomPrice, adultPrice, childPrice]
  );

  const onGuestNumberChange = useCallback(
    (name: string, val: string | number) => {
      const updatedRoomInfo = {
        ...data,
        [name]: val,
        price: handlePriceCalculate({ ...data, [name]: val }),
      };
      onChange(updatedRoomInfo);
    },
    [data, onChange, handlePriceCalculate]
  );

  const customInputNumberProps = {
    step: 1,
    onGuestNumberChange,
  };

  return (
    <RoomCard>
      <div className="room-title">
        <span className="label">
          {FieldLabel.room} #{roomNo}
        </span>
        <span>:</span>
        <div className="icon-box">
          <PersonIcon />
        </div>
        <span className="number-of-guest">x {numberOfGuest}</span>
        <span className="sub-title">
          {FieldLabel.price}: {data.price || 0}
        </span>
      </div>
      <div className="guests-info-box">
        <div className="guest-box">
          <div className="title-zone">
            <span className="title">{FieldLabel.adult}</span>
            <span className="sub-title">Age 20+</span>
          </div>
          <div className="input-zone">
            <CustomInputNumber
              {...customInputNumberProps}
              name="adult"
              disabled={guest.adult === 0}
              value={data.adult}
              max={Math.min(unassigned.adult, capacity)}
              min={0}
            />
          </div>
        </div>
        <div className="guest-box">
          <div className="title-zone">
            <span className="title">{FieldLabel.child}</span>
          </div>
          <div className="input-zone">
            <CustomInputNumber
              {...customInputNumberProps}
              name="child"
              disabled={guest.child === 0}
              value={data.child}
              max={Math.min(unassigned.child, capacity)}
              min={0}
            />
          </div>
        </div>
      </div>
    </RoomCard>
  );
};

export default RoomAllocation;
