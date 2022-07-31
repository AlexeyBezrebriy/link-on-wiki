import "./App.css"
import Header from "../Header/Header"
import Footer from "./../Footer/Footer"
import Main from "../Main/Main"
import Sidebar from "../Sidebar/Sidebar"
import wiki from "../../data/wikiReferences.json"

function App() {
  return (
    <div className="App-wrapper">
      <div className="container">
        <Header />
        <Main
          data={wiki.map((item) => {
            return {
              text: item.text,
              title: item.title,
            }
          })}
        />
        <Sidebar
          data={wiki.map((item) => {
            return {
              link: item.link,
              title: item.title,
            }
          })}
        />
        <Footer />
      </div>
    </div>
  )
}

export default App
