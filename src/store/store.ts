import { StoreApi, UseBoundStore, create } from "zustand";

interface QuizFormState {
  quiz_id: string | null;
  email: string | null;
  answers: { id: string; answer: string }[];
}

interface QuizStore {
  quizStep: "initial" | "email" | "answer" | "checkAnswers";
  quizForm: QuizFormState;
  setQuizId: (quiz_id: string) => void;
  setQuizUserEmail: (email: string) => void;
  answerQuizQuestion: (id: string, answer: string) => void;
  checkAnswers: () => void;
}

export const useQuizStore: UseBoundStore<StoreApi<QuizStore>> = create(
  (set) => ({
    quizStep: "initial",
    quizForm: {
      quiz_id: null,
      email: null,
      answers: [],
    },
    setQuizId: (quiz_id: string) =>
      set((state) => ({
        ...state,
        quizStep: "email",
        quizForm: { ...state.quizForm, quiz_id },
      })),
    setQuizUserEmail: (email: string) =>
      set((state) => ({
        ...state,
        quizStep: "answer",
        quizForm: { ...state.quizForm, email },
      })),
    answerQuizQuestion: (id: string, answer: string) =>
      set((state) => {
        const questionAnswered = state.quizForm.answers.find(
          (question) => question.id === id
        );

        if (questionAnswered) {
          questionAnswered.id = id;
          questionAnswered.answer = answer;
          return state;
        }

        return {
          ...state,
          quizForm: {
            ...state.quizForm,
            answers: [...state.quizForm.answers, { id, answer }],
          },
        };
      }),
    checkAnswers: () => set((state) => ({ ...state, quizStep: "checkAnswers" })),
  })
);
