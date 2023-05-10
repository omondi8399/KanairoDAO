import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./views/Home"
import Proposal from "./views/Proposal"

const App = () => {
  return (
    <div className="min-h-screen text-gray-900 dark:text-gray-300 dark:bg-[#212936]">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proposal/:id" element={<Proposal />} />
      </Routes>
    </div>
  )
}

export default App
