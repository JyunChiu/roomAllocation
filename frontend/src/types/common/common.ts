enum FieldLabel {
  adult = "Adult",
  children = "Children",
  roomPrice = "Room Price",
  adultPrice = "Adult Price",
  childPrice = "Child Price",
  capacity = "Capacity",
}
interface Sizes {
  XL?: string;
  LG: string;
  MD: string;
  REGULAR?: string;
  SM: string;
  XS?: string;
}

interface Colors {
  WHITE: string;
  BLACK: string;
  BLUE_1: string;
  BLUE_2: string;
  BLUE_3: string;
  GRAY_1: string;
  GRAY_2: string;
}

export { FieldLabel };
export type { Sizes, Colors };
