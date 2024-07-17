import { createContext } from "react";
import { IAppContext } from "types/contexts";

const AppContext = createContext<IAppContext>({
  guest: { adult: 0, children: 0 },
  setGuest: () => {},
  rooms: [],
  setRooms: () => {},
});

export default AppContext;
