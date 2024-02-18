export type LocationType = PrivateHouse | Building | Synagogue;

interface BaseLocation {
  name: string;
  address: string;
  avgDonations: number;
  remark: string;
}

export interface PrivateHouse extends BaseLocation {
  entrance?: string;
}

export interface Building extends BaseLocation {
  floor: number;
  apartment: number;
}
export interface Synagogue extends BaseLocation {
  prayers: Prayers;
}

export interface Prayers {
  morning: string[];
  afternoon: string[];
  evening: string[];
}

export const LocationsList: LocationType[] = [
  {
    name: "דני רביד",
    address: "האלמוגים 24",
    avgDonations: 100,
    remark: "שער סגור לבוא מסביב",
    floor: 1,
    apartment: 4,
  },
  {
    name: "אהרון אהרוני",
    address: "רחוב המשוררים 3",
    avgDonations: 250,
    remark: "ליד הסופרמרקט",
    entrance: "כניסה א",
  },
  {
    name: "בית כנסת הגדול",
    address: "שדרות הרצל 45",
    avgDonations: 500,
    remark: "פתח מזרחי",
    prayers: {
      morning: ["06:00"],
      afternoon: ["13:00"],
      evening: ["19:00", "21:00"],
    },
  },
];
