import { Container } from '@mui/material'
import './index.css'
import MainContent from "./components/MainContent"

function App() {
return (
    <div className="App" style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',height:'100vh'}}>
       <Container maxWidth="mm">
       <MainContent/>
      </Container>
          
    </div>
  )
}

export default App
