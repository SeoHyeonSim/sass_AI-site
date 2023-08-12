import { create } from "zustand";

interface useProMmodalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useProModal = create<useProMmodalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));
