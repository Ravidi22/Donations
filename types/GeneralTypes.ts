import { LatLng } from "react-native-maps";

export interface BaseAddress {
  id: number;
  geoLocation: GeoLocation;
  personalDetails: PersonalDetails;
  donationDetails: DonationDetails;
  interactionDetails: InteractionDetails;
  isVisited: boolean;
}

export interface GeoLocation {
  city: string;
  address: string;
  houseNumber: number;
  addressKind: PrivateHouse | Building | Synagogue;
  coordinates: LatLng;
}
export type Gender = "Male" | "Female" | "Other";

export interface PersonalDetails {
  fullName: string;
  age: number;
  gender: Gender;
  familyStatus: string;
  phoneNumber: string;
}

export type PaymentOptions = "Cash" | "DirectDebit" | "Credit" | "BankTransfer";
export type PaymentFrequency = "Once" | "Monthly";

export interface DonationDetails {
  donation: number;
  paymentFrequency: PaymentFrequency;
  payment: PaymentOptions;
  reason?: string;
}

export type InitialRelationship = "Positive" | "Negative" | "Apathetic";
export type Religion = "Religious" | "Traditional" | "Secular";
export type IncomeLevel = "High" | "Mid" | "Low";

export interface InteractionDetails {
  initialRelationship: InitialRelationship;
  religion: Religion;
  showedIdentification: boolean;
  time: number;
  incomeLevel: IncomeLevel;
}

export interface PrivateHouse {
  entrance: string;
}

export interface Building {
  floor: number;
  apartment: number;
}
export interface Synagogue {
  prayers: Prayers;
}

export interface Prayers {
  morning: string[];
  afternoon: string[];
  evening: string[];
}

export type PrayersType = "morning" | "afternoon" | "evening";
