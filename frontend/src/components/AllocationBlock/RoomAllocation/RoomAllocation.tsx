import React, { FC, useMemo, useCallback, memo } from "react";
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
  handleResultChange: (updatedResult: Result) => void;
}

const RoomAllocation: FC<Props> = ({
  data,
  roomNo,
  roomInfo: { roomPrice, adultPrice, childPrice, capacity },
  unassigned,
  handleResultChange,
}) => {
  const handlePriceCalculate = useCallback(
    (item: Result): number =>
      !(item.adult + item.child)
        ? 0
        : roomPrice + adultPrice * item.adult + childPrice * item.child,

    [roomPrice, adultPrice, childPrice]
  );

  const numberOfGuest = useMemo(
    () => (data.adult || 0) + (data.child || 0),
    [data]
  );

  const getMaxCount = useCallback(
    (self: "adult" | "child", other: "adult" | "child"): number => {
      if (unassigned[self] === 0) return 0;
      if (self === "child" && !data[other]) return 0;
      return Math.min(capacity, capacity - data[other]);
    },
    [data, capacity, unassigned]
  );

  const handleGuestNumberChange = useCallback(
    (name: string, val: string | number) => {
      if (name === "adult" && !val) {
        return handleResultChange({
          adult: 0,
          child: 0,
          price: 0,
        });
      }
      const updatedRoomInfo = {
        ...data,
        [name]: val,
        price: handlePriceCalculate({ ...data, [name]: val }),
      };
      handleResultChange(updatedRoomInfo);
    },
    [data, handleResultChange, handlePriceCalculate]
  );

  const handleGuestNumberBlur = useCallback(
    (name: string, val?: string | number) => {
      if (name === "adult" && !val) {
        handleResultChange({ adult: 0, child: 0, price: 0 });
      }
    },
    [handleResultChange]
  );

  const customInputNumberProps = {
    step: 1,
    roomNo,
    handleGuestNumberChange,
    handleGuestNumberBlur,
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
          <CustomInputNumber
            {...customInputNumberProps}
            name="adult"
            value={data.adult}
            max={getMaxCount("adult", "child")}
            min={0}
          />
        </div>
        <div className="guest-box">
          <div className="title-zone">
            <span className="title">{FieldLabel.child}</span>
          </div>
          <CustomInputNumber
            {...customInputNumberProps}
            name="child"
            value={data.child}
            max={getMaxCount("child", "adult")}
            min={0}
            disabledInput={!data.adult}
          />
        </div>
      </div>
    </RoomCard>
  );
};

export default memo(RoomAllocation);
