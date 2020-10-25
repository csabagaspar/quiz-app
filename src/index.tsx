import React from 'react'

import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import {ThemeProvider} from '@material-ui/core/styles'

import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify'

import {store} from './app/store'
import {GamePage} from './pages/GamePage'
import {ManageQuestionsPage} from './pages/ManageQuestionsPage'
import {GameProvider} from './contexts/GameContext'

import theme from './theme'

enum Page {
  ManageQuestions,
  QuizGame,
}
const Navigation = ({
  activePage,
  updateActivePage,
}: {
  activePage: Page
  updateActivePage: (page: Page) => void
}) => {
  return (
    <BottomNavigation
      value={activePage as number}
      onChange={(event: React.ChangeEvent<any>, newValue: number) => {
        updateActivePage(newValue as Page)
      }}
      showLabels
    >
      <BottomNavigationAction
        label="Manage questions"
        icon={<FormatAlignJustifyIcon />}
      />
      <BottomNavigationAction label="Quiz game" icon={<PlayArrowIcon />} />
    </BottomNavigation>
  )
}

function App() {
  const [activePage, setActivePage] = React.useState<Page>(() => Page.ManageQuestions)
  return (
    <>
      <Typography component="h1" variant="h3" align="center">
        Quiz Application
      </Typography>
      <Navigation activePage={activePage} updateActivePage={setActivePage} />
      {activePage === Page.ManageQuestions ? (
        <ManageQuestionsPage />
      ) : (
        <GameProvider>
          <GamePage />
        </GameProvider>
      )}
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
