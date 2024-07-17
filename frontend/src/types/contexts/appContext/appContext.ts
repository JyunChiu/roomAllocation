import { GuestInfo, RoomInfo } from "types/data";
import { Dispatch, SetStateAction } from "react";

interface IAppContext {
  guest: GuestInfo;
  setGuest: Dispatch<SetStateAction<GuestInfo>>;
  rooms: RoomInfo[];
  setRooms: Dispatch<SetStateAction<RoomInfo[]>>;
}

export type { IAppContext };
