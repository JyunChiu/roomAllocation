"use client";
import { FC, useMemo, useState } from "react";
import BaseInfoBlock from "components/BaseInfoBlock";
import AllocationBlock from "components/AllocationBlock";
import { AppContext } from "src/contexts";
import { GuestInfo, RoomInfo } from "types/data";
import { Container } from "./page.style";

const Home: FC = () => {
  const [guest, setGuest] = useState<GuestInfo>({ adult: 10, child: 10 });
  const [rooms, setRooms] = useState<RoomInfo[]>([
    { roomPrice: 1000, adultPrice: 200, childPrice: 100, capacity: 4 },
    { roomPrice: 0, adultPrice: 500, childPrice: 500, capacity: 4 },
    { roomPrice: 500, adultPrice: 300, childPrice: 200, capacity: 4 },
  ]);
  const contextValue = useMemo(
    () => ({
      guest,
      setGuest,
      rooms,
      setRooms,
    }),
    [guest, setGuest, rooms, setRooms]
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
