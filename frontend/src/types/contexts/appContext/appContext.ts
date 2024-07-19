import { GuestInfo, RoomInfo, Result } from "types/data";
import { Dispatch, SetStateAction } from "react";

interface IAppContext {
  guest: GuestInfo;
  setGuest: Dispatch<SetStateAction<GuestInfo>>;
  rooms: RoomInfo[];
  setRooms: Dispatch<SetStateAction<RoomInfo[]>>;
  result: Result[];
  setResult: Dispatch<SetStateAction<Result[]>>;
  getDefaultRoomAllocation: () => void;
}

export type { IAppContext };
