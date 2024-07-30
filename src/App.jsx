import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import "./index.css"

function App() {

  return (
    <>
      <main className="h-screen bg-background bg-no-repeat bg-cover bg-center opacity-90">
        <Header />
        <Home />
      </main>
    </>
  )
}

export default App
