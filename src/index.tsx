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
  Game,
}

function App() {
  const [page, setPage] = React.useState<Page>(() => Page.ManageQuestions)
  return (
    <div>
      <Typography component="h1" variant="h3" align="center">
        Quiz Application
      </Typography>
      <BottomNavigation
        value={page}
        onChange={(event, newValue) => {
          setPage(newValue)
        }}
        showLabels
      >
        <BottomNavigationAction
          label="Manage questions"
          icon={<FormatAlignJustifyIcon />}
        />
        <BottomNavigationAction label="Quiz game" icon={<PlayArrowIcon />} />
      </BottomNavigation>
      {page === Page.ManageQuestions ? (
        <ManageQuestionsPage />
      ) : (
        <GameProvider>
          <GamePage />
        </GameProvider>
      )}
    </div>
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
