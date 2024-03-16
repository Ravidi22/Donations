import {
  Gender,
  IncomeLevel,
  InitialRelationship,
  PaymentOptions,
  Religion,
} from "./GeneralTypes";

export const GenderToHebrew: Record<Gender, string> = {
  Male: "זכר",
  Female: "נקבה",
  Other: "אחר",
};

export const PaymentMethodsToHebrew: Record<PaymentOptions, string> = {
  Cash: "מזומן",
  Credit: "אשראי",
  BankTransfer: "העברה",
  DirectDebit: "הוראת קבע",
};

export const InitialRelationshipsToHebrew: Record<InitialRelationship, string> =
  {
    Positive: "חיובי",
    Negative: "שלילי",
    Apathetic: "אדיש",
  };

export const ReligionsToHebrew: Record<Religion, string> = {
  Religious: "דתי",
  Traditional: "מסורתי",
  Secular: "חילוני",
};

export const IncomeLevelToHebrew: Record<IncomeLevel, string> = {
  High: "גבוה",
  Mid: "בינוני",
  Low: "נמוך",
};
