import { create } from "zustand";

interface CoverLetterBodyStore {
    coverLetterBody: string;
    setCoverLetterBody: (coverLetterBody: string) => void;
    }

export const useCoverLetterBodyStore = create<CoverLetterBodyStore>(
    (set) => ({
        coverLetterBody: "",
        setCoverLetterBody: (coverLetterBody) => set({ coverLetterBody }),
    })
);
