"use client";
import { FC, useCallback, useMemo, useState } from "react";
import BaseInfoBlock from "components/BaseInfoBlock";
import AllocationBlock from "components/AllocationBlock";
import { AppContext } from "src/contexts";
import { GuestInfo, RoomInfo, Result } from "types/data";
import { Container } from "./page.style";

const Home: FC = () => {
  const [guest, setGuest] = useState<GuestInfo>({ adult: 4, child: 2 });
  const [rooms, setRooms] = useState<RoomInfo[]>([
    { roomPrice: 1000, adultPrice: 200, childPrice: 100, capacity: 4 },
    { roomPrice: 0, adultPrice: 500, childPrice: 500, capacity: 4 },
    { roomPrice: 500, adultPrice: 300, childPrice: 200, capacity: 4 },
  ]);
  const [result, setResult] = useState<Result[]>([
    { adult: 0, child: 0, price: 0 },
    { adult: 0, child: 0, price: 0 },
    { adult: 0, child: 0, price: 0 },
  ]);

  const getDefaultRoomAllocation = useCallback(() => {
    let remainingAdults = guest.adult;
    let remainingChildren = guest.child;

    // room cost
    const roomIndexes = rooms.map((room, i) => ({
      index: i,
      costEfficiency: room.roomPrice + room.adultPrice + room.childPrice,
    }));
    roomIndexes.sort((a, b) => a.costEfficiency - b.costEfficiency);

    const tempResult: Result[] = rooms.map((_) => ({
      adult: 0,
      child: 0,
      price: 0,
    }));

    roomIndexes.forEach(({ index }, i) => {
      const room = rooms[index];

      let assignedAdults = 0;
      let assignedChildren = 0;

      // at least one adult when there is a child in a room
      if (remainingChildren > 0 && remainingAdults > 0) {
        assignedAdults++;
        remainingAdults--;
      }

      // fill the room capacity
      while (
        assignedAdults + assignedChildren < room.capacity &&
        (remainingAdults > 0 || remainingChildren > 0)
      ) {
        if (remainingAdults > 0) {
          assignedAdults++;
          remainingAdults--;
        }
        if (
          remainingChildren > 0 &&
          assignedAdults > 0 &&
          assignedAdults + assignedChildren < room.capacity
        ) {
          assignedChildren++;
          remainingChildren--;
        }
      }

      const totalCost = !(assignedAdults + assignedChildren)
        ? 0
        : room.roomPrice +
          assignedAdults * room.adultPrice +
          assignedChildren * room.childPrice;

      tempResult[index] = {
        adult: assignedAdults,
        child: assignedChildren,
        price: totalCost,
      };
      console.groupEnd();
    });

    setResult(tempResult);
  }, [guest, rooms]);

  const notEnoughCapacity = useMemo(() => {
    const totalCapacity = rooms.reduce(
      (acc, val) => acc + (val?.capacity || 0),
      0
    );
    const totalGuest = (guest.adult || 0) + (guest.child || 0);
    return totalGuest > totalCapacity;
  }, [rooms, guest]);

  const contextValue = useMemo(
    () => ({
      guest,
      setGuest,
      rooms,
      setRooms,
      result,
      setResult,
      notEnoughCapacity,
      getDefaultRoomAllocation,
    }),
    [
      guest,
      setGuest,
      rooms,
      setRooms,
      result,
      setResult,
      notEnoughCapacity,
      getDefaultRoomAllocation,
    ]
  );

  return (
    <AppContext.Provider value={contextValue}>
      <Container>
        <BaseInfoBlock />
        <AllocationBlock />
      </Container>
    </AppContext.Provider>
  );
};

export default Home;
