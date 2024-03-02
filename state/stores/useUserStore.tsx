import { create } from "zustand";
import { User } from "../../types/User";

interface UserState {
  user: User;
  addPartner: (user: User) => void;
  removePartner: (partnerId: number) => void;
}

const useUserStore = create<UserState>((set) => ({
  user: {
    name: "יוני דניאל",
    id: 11111111,
    organization: "אינטל",
    partners: [],
  },
  addPartner: (partner) =>
    set((state) => ({
      user: { ...state.user, partners: [...state.user.partners, partner] },
    })),
  removePartner: (partnerIdToRemove) =>
    set((state) => ({
      user: {
        ...state.user,
        partners: state.user.partners.filter(
          (partner) => partner.id !== partnerIdToRemove
        ),
      },
    })),
}));

export { useUserStore };
