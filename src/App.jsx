import Banner from "./components/Banner"
import Header from "./components/Header"
import Proposals from "./components/Proposals"

const App = () => {
  return (
    <div className="min-h-screen text-gray-900 dark:text-gray-300 dark:bg-[#212936]">
      <Header />
      <Banner />
      <Proposals />
    </div>
  )
}

export default App
