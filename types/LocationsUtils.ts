// export type LocationType = PrivateHouse | Building | Synagogue;

// export interface GeoCoordinates {
//   latitude: number;
//   longitude: number;
// }

// export interface BaseLocation {
//   id: number;
//   name: string;
//   location: GeoCoordinates;
//   city: string;
//   address: string;
//   donation: number;
//   avgDonations: number;
//   isVisited: boolean;
//   note: string;
// }

// export interface PrivateHouse extends BaseLocation {
//   entrance: string;
// }

// export interface Building extends BaseLocation {
//   floor: number;
//   apartment: number;
// }
// export interface Synagogue extends BaseLocation {
//   prayers: Prayers;
// }

// export interface Prayers {
//   morning: string[];
//   afternoon: string[];
//   evening: string[];
// }

// export type PrayersType = "morning" | "afternoon" | "evening";

// export const LocationsList: LocationType[] = [
//   {
//     id: 1,
//     name: "דני רביד",
//     city: "אשדוד",
//     address: "האלמוגים 24",
//     location: {
//       latitude: 0,
//       longitude: 0,
//     },
//     donation: 0,
//     avgDonations: 100,
//     note: "שער סגור לבוא מסביב",
//     floor: 1,
//     isVisited: true,
//     apartment: 4,
//   },
//   {
//     id: 2,
//     name: "אהרון אהרוני",
//     city: "אשדוד",
//     address: "רחוב המשוררים 3",
//     location: {
//       latitude: 0,
//       longitude: 0,
//     },
//     donation: 0,
//     avgDonations: 250,
//     note: "ליד הסופרמרקט",
//     isVisited: false,
//     entrance: "כניסה א",
//   },
//   {
//     id: 3,
//     name: "בית כנסת הגדול",
//     city: "אשדוד",
//     address: "שדרות הרצל 45",
//     location: {
//       latitude: 0,
//       longitude: 0,
//     },
//     donation: 0,
//     avgDonations: 500,
//     note: "פתח מזרחי",
//     isVisited: false,
//     prayers: {
//       morning: ["06:00"],
//       afternoon: ["13:00"],
//       evening: ["19:00", "21:00"],
//     },
//   },
// ];
