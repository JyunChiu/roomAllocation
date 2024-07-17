"use client";
import { FC, useMemo, useState } from "react";
import BaseInfoBlock from "components/BaseInfoBlock";
import AllocationBlock from "components/AllocationBlock";
import { AppContext } from "src/contexts";
import { GuestInfo, RoomInfo } from "types/data";
import { Container } from "./page.style";

const Home: FC = () => {
  const [guest, setGuest] = useState<GuestInfo>({ adult: 0, children: 0 });
  const [rooms, setRooms] = useState<RoomInfo[]>([]);
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
