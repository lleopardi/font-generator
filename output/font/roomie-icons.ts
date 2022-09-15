export type RoomieIconsId =
  | "arrow"
  | "calendar"
  | "check"
  | "chevron"
  | "clock"
  | "close"
  | "cycle"
  | "double-arrow"
  | "download-file"
  | "download"
  | "exit"
  | "expand"
  | "house-heart"
  | "info"
  | "megaphone"
  | "person"
  | "point"
  | "position"
  | "share"
  | "snowflake"
  | "star"
  | "support"
  | "tag"
  | "warning";

export type RoomieIconsKey =
  | "Arrow"
  | "Calendar"
  | "Check"
  | "Chevron"
  | "Clock"
  | "Close"
  | "Cycle"
  | "DoubleArrow"
  | "DownloadFile"
  | "Download"
  | "Exit"
  | "Expand"
  | "HouseHeart"
  | "Info"
  | "Megaphone"
  | "Person"
  | "Point"
  | "Position"
  | "Share"
  | "Snowflake"
  | "Star"
  | "Support"
  | "Tag"
  | "Warning";

export enum RoomieIcons {
  Arrow = "arrow",
  Calendar = "calendar",
  Check = "check",
  Chevron = "chevron",
  Clock = "clock",
  Close = "close",
  Cycle = "cycle",
  DoubleArrow = "double-arrow",
  DownloadFile = "download-file",
  Download = "download",
  Exit = "exit",
  Expand = "expand",
  HouseHeart = "house-heart",
  Info = "info",
  Megaphone = "megaphone",
  Person = "person",
  Point = "point",
  Position = "position",
  Share = "share",
  Snowflake = "snowflake",
  Star = "star",
  Support = "support",
  Tag = "tag",
  Warning = "warning",
}

export const ROOMIE_ICONS_CODEPOINTS: { [key in RoomieIcons]: string } = {
  [RoomieIcons.Arrow]: "61697",
  [RoomieIcons.Calendar]: "61698",
  [RoomieIcons.Check]: "61699",
  [RoomieIcons.Chevron]: "61700",
  [RoomieIcons.Clock]: "61701",
  [RoomieIcons.Close]: "61702",
  [RoomieIcons.Cycle]: "61703",
  [RoomieIcons.DoubleArrow]: "61704",
  [RoomieIcons.DownloadFile]: "61705",
  [RoomieIcons.Download]: "61706",
  [RoomieIcons.Exit]: "61707",
  [RoomieIcons.Expand]: "61708",
  [RoomieIcons.HouseHeart]: "61709",
  [RoomieIcons.Info]: "61710",
  [RoomieIcons.Megaphone]: "61711",
  [RoomieIcons.Person]: "61712",
  [RoomieIcons.Point]: "61713",
  [RoomieIcons.Position]: "61714",
  [RoomieIcons.Share]: "61715",
  [RoomieIcons.Snowflake]: "61716",
  [RoomieIcons.Star]: "61717",
  [RoomieIcons.Support]: "61718",
  [RoomieIcons.Tag]: "61719",
  [RoomieIcons.Warning]: "61720",
};
