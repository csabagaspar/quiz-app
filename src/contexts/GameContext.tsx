import React from 'react'

export type GameType = {
  username: string | null
  updateUsername: (value: string) => void
  score: number
  incrementScore: () => void
  hasAnsweredCurrent: boolean
  toggleAnsweredCurrent: () => void
  currentQuestionIndex: number
  incrementCurrentQuestionIndex: () => void
  restart: () => void
}
export const GameContext = React.createContext<GameType>({
  username: null,
  updateUsername: (value) => {},
  score: 0,
  incrementScore: () => {},
  hasAnsweredCurrent: false,
  toggleAnsweredCurrent: () => {},
  currentQuestionIndex: 0,
  incrementCurrentQuestionIndex: () => {},
  restart: () => {},
})
export const GameProvider = ({children}: {children?: React.ReactNode}) => {
  const [username, setUsername] = React.useState<string | null>(() => null)
  const [score, setScore] = React.useState<number>(() => 0)
  const [hasAnsweredCurrent, setHasAnsweredCurrent] = React.useState<boolean>(
    () => false,
  )
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState<
    number
  >(() => 0)

  const updateUsername = (username: string) => {
    setUsername(() => username)
  }
  const incrementScore = () => {
    setScore((score: number) => ++score)
  }
  const toggleAnsweredCurrent = () => {
    setHasAnsweredCurrent((hasAnsweredCurrent: boolean) => !hasAnsweredCurrent)
  }
  const incrementCurrentQuestionIndex = () => {
    toggleAnsweredCurrent()
    setCurrentQuestionIndex(
      (currentQuestionIndex: number) => ++currentQuestionIndex,
    )
  }
  const restart = () => {
    setScore(0)
    setCurrentQuestionIndex(0)
    setHasAnsweredCurrent(false)
  }
  return (
    <GameContext.Provider
      value={{
        username,
        updateUsername,
        score,
        incrementScore,
        hasAnsweredCurrent,
        toggleAnsweredCurrent,
        currentQuestionIndex,
        incrementCurrentQuestionIndex,
        restart,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}
