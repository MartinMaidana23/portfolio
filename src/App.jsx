import './App.css'
import { Container } from './components/container/Container'
import LangProvider from './context/LangProvider'

function App() {

  return (
    
    <div className="App">
      <LangProvider>
        <Container/>
      </LangProvider>
    </div>
  )
}

export default App
