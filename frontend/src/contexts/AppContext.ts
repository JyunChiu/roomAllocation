import { createContext } from "react";
import { IAppContext } from "types/contexts";

const AppContext = createContext<IAppContext>({
  guest: { adult: 0, child: 0 },
  setGuest: () => {},
  rooms: [],
  setRooms: () => {},
  result: [],
  setResult: () => {},
  getDefaultRoomAllocation: () => {},
});

export default AppContext;
