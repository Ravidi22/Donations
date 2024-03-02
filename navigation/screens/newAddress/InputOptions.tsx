import {
  BaseLocation,
  Building,
  PrivateHouse,
  Synagogue,
} from "../../../types/LocationsUtils";

export const Baseinitial: BaseLocation = {
  id: 1,
  name: "",
  city: "",
  address: "",
  donation: 0,
  avgDonations: 0,
  note: "",
  isVisited: false,
};

export const initialSynagogue: Synagogue = {
  ...Baseinitial,
  prayers: { morning: [], afternoon: [], evening: [] },
};

export const initialPrivateHouse: PrivateHouse = {
  ...Baseinitial,
  entrance: "",
};

export const initialBuilding: Building = {
  ...Baseinitial,
  floor: 0,
  apartment: 0,
};
