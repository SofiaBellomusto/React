import "./App.css"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

const App = () => {

  return (
    <div>
      <Navbar />
      <h1 className="title">Este es el titulo</h1>
      <h2>Subtitulo</h2>

      <Footer />
    </div>
  )
}

export default App
