import { StoreApi, UseBoundStore, create } from "zustand";

interface QuizFormState {
  id: string | null;
  email: string | null;
  answers: { id: string; answer: string }[];
}

interface QuizStore {
  quizStep: "initial" | "email" | "answer" | "confirm";
  quizForm: QuizFormState;
  setQuizId: (id: string) => void;
  setQuizUserEmail: (email: string) => void;
  answerQuizQuestion: (id: string, answer: string) => void;
}

export const useQuizStore: UseBoundStore<StoreApi<QuizStore>> = create(
  (set) => ({
    quizStep: "initial",
    quizForm: {
      id: null,
      email: null,
      answers: [],
    },
    setQuizId: (id: string) =>
      set((state) => ({
        ...state,
        quizStep: "email",
        quizForm: { ...state.quizForm, id },
      })),
    setQuizUserEmail: (email: string) =>
      set((state) => ({
        ...state,
        quizStep: "answer",
        quizForm: { ...state.quizForm, email },
      })),
    answerQuizQuestion: (id: string, answer: string) =>
      set((state) => ({
        ...state,
        quizForm: {
          ...state.quizForm,
          answers: [...state.quizForm.answers, { id, answer }],
        },
      })),
  })
);
