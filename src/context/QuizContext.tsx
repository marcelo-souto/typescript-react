import React from "react";

interface QuizState {
  state: number;
  email: null | string;
  isAllQuestionsAnswered: boolean;
  isAnswersConfirmed: boolean;
}

interface IQuizStateContext {
  quizState: QuizState;
  updateQuizState: (data: Partial<QuizState>) => void;
}

interface QuizProviderProps {
  children: React.ReactNode;
}

const QuizStateContext = React.createContext({} as IQuizStateContext);

export const QuizAppStateProvider: React.FC<QuizProviderProps> = ({ children }) => {

  const [quizState, setQuizState] = React.useState<QuizState>({
    state: 1,
    email: null,
    isAllQuestionsAnswered: false,
    isAnswersConfirmed: false,
  });

  const updateQuizState = (data: Partial<QuizState>) => {

    setQuizState((prevQuizState) => ({
      ...prevQuizState,
      state: prevQuizState.state += 1,
      ...data
    }));
    
  };

  React.useEffect(() => console.log(quizState), [quizState])

  return (
    <QuizStateContext.Provider value={{ quizState, updateQuizState }}>
      {children}
    </QuizStateContext.Provider>
  );
};

export const useQuizAppState = () => React.useContext(QuizStateContext);
