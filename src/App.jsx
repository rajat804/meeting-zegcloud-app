import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Zegocloud from "./components/Zegocloud"
import VideoCallRoom from "./components/VideoCallRoom"
const App = () => {
  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<Zegocloud />}/>
            <Route path="/room/:id" element={<VideoCallRoom />}  />
          </Routes>
        </Router>
    </>
  )
}

export default App
