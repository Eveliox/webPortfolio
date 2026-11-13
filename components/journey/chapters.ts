export const chapters = [
  { id: "top", no: "00", jp: "起動", en: "Sundown" },
  { id: "self", no: "01", jp: "自己", en: "Identity" },
  { id: "record", no: "02", jp: "経歴", en: "Record" },
  { id: "works", no: "03", jp: "作品", en: "Works" },
  { id: "arsenal", no: "04", jp: "技術", en: "Arsenal" },
  { id: "connect", no: "05", jp: "接続", en: "First light" },
] as const;

export type ChapterId = (typeof chapters)[number]["id"];
