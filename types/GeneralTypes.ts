import { LatLng } from "react-native-maps";

export interface BaseAddress {
  id: number;
  geoLocation: GeoLocation;
  personalDetails: PersonalDetails;
  donationDetails: DonationDetails;
  interactionDetails: InteractionDetails;
  isVisited: boolean;
}

interface GeoLocation {
  city: string;
  address: string;
  houseNumber: number;
  coordinates: LatLng;
}
export type Gender = "Male" | "Female" | "Other";

interface PersonalDetails {
  fullName: string;
  age: number;
  gender: Gender;
  familyStatus: string;
  phoneNumber: string;
}

type PaymentOptions = "Cash" | "DirectDebit" | "Credit" | "BankTransfer";
type PaymentFrequency = "Once" | "Monthly";

interface DonationDetails {
  donation: number;
  paymentFrequency: PaymentFrequency;
  payment: PaymentOptions;
  reason?: string;
}

type InitialRelationship = "Positive" | "Negative" | "Apathetic";
type Religion = "Religious" | "Traditional" | "Secular";
type IncomeLevel = "High" | "Mid" | "Low";

interface InteractionDetails {
  initialRelationship: InitialRelationship;
  religion: Religion;
  showedIdentification: boolean;
  time: number;
  incomeLevel: IncomeLevel;
}

export interface PrivateHouse extends BaseAddress {
  entrance: string;
}

export interface Building extends BaseAddress {
  floor: number;
  apartment: number;
}
export interface Synagogue extends BaseAddress {
  prayers: Prayers;
}

export interface Prayers {
  morning: string[];
  afternoon: string[];
  evening: string[];
}

export type PrayersType = "morning" | "afternoon" | "evening";
