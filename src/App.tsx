import { useState } from "react"
import { AwardCardDeck, GreenCardDeck, Grid, Pile, VillageCard } from "village-green-lib"

import { GreenView } from "./GreenView"

import "./App.css"

const App = () => {
  const [grid, setGrid] = useState(Grid.create(3, 3, new VillageCard("Lower VillageName"), () => new Pile([])))

  const generateGrid = () => {
    let greenDeck = GreenCardDeck.createDefault()
    greenDeck.shuffle()

    let awardDeck = AwardCardDeck.createDefault()
    awardDeck.shuffle()

    let newGrid = Grid.create(3, 3, new VillageCard("Lower VillageName"), () => new Pile([]))

    for (let i = 0; i < 3; i++) {
      newGrid.playAwardCard(awardDeck.drawOne(), false, i)
    }

    for (let i = 0; i < 3; i++) {
      newGrid.playAwardCard(awardDeck.drawOne(), true, i)
    }

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        newGrid.playGreenCard(greenDeck.drawOne(), i, j)
      }
    }

    setGrid(newGrid)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <span>Village Green</span>
        </div>

        <GreenView grid={grid} />

        <div>
          <span>Score: {grid.getScore()}</span>
        </div>

        <button onClick={generateGrid}>
          Generate
        </button>
      </header>
    </div>
  )
}

export default App
