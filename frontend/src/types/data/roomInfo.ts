interface RoomInfo {
  roomPrice: number;
  adultPrice: number;
  childPrice: number;
  capacity: number;
}

interface Result {
  adult: number;
  child: number;
  price: number;
}

export type { RoomInfo, Result };
