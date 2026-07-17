import './App.css'
import Card from './Components/card'

function App() {


  return (
    <div className="App flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="bg-green-400 text-black p-4">Tailwind Test</h1>

      {/* Cards row: horizontal, wraps on small screens */}
      <div className="cards-row flex flex-row flex-wrap gap-6 justify-center items-start w-full max-w-5xl mt-6">
        <Card username="Shaikh" btn="UmarBtn"/>
        <Card username="Munir" btn="MunirBtn"/>
        <Card username="Mobassir" btn="MobassirBtm"/>
        <Card username="Musharraf" btn="MusharrafBtn"/>
        <Card username="Shaikh Umar"/>
        <Card username="Shaikh Umar" />
      </div>
    </div>
  )
}

export default App;