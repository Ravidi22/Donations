import { create } from "zustand";
import { LocationType, LocationsList } from "../../types/LocationsUtils";

interface RouteState {
  route: LocationType[];
  addAddress: (address: LocationType) => void;
  removeAddress: (addressId: number) => void;
  fetchRoute: () => Promise<void>;
}

const useRouteStore = create<RouteState>((set) => ({
  route: LocationsList,
  fetchRoute: async () => {
    try {
      const response = await fetch("https://your-api-endpoint/routes");
      const data = await response.json();

      set({
        route: data.map((location) => ({ ...location, isVisited: false })),
      });
    } catch (error) {
      console.error("Failed to fetch route:", error);

      set({ route: [] });
    }
  },
  addAddress: (address) =>
    set((state) => {
      const newAddress = { ...address, isVisited: false };
      const lastVisitedIndex = state.route.reduce(
        (acc, curr, index) => (curr.isVisited ? index : acc),
        -1
      );
      const newRoute = [
        ...state.route.slice(0, lastVisitedIndex + 1),
        newAddress,
        ...state.route.slice(lastVisitedIndex + 1),
      ];
      return { route: newRoute };
    }),
  removeAddress: (addressIdToRemove) =>
    set((state) => ({
      route: state.route.filter((address) => address.id !== addressIdToRemove),
    })),
}));

export { useRouteStore };
