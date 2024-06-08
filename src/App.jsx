import React from "react"
import Header from "./Components/Header"
import Body from "./Components/Body"
import Footer from "./Components/Footer"

function App() {


  return (
    <>
    <div className="bg-amber-100 px-6 py-3 md:px-10 md:py-6 lg:px-28 lg:py-12 min-h-screen flex flex-col ">
    <Header />
    <Body />
    <Footer />      

    </div>

    </>
  )
}

export default App
