import { Grid } from "village-green-lib"
import { AwardView } from "./AwardView"

import { PileView } from "./PileView"
import { VillageView } from "./VillageView"

interface GreenViewProps {
    grid: Grid
}

export const GreenView = (props: GreenViewProps) => {
    const renderGrid = (grid: Grid) => {
        return (
            <div>
                <div className="flex-center">
                    <VillageView village={grid.villageCard} />

                    {grid.columnAwards.map(a => <AwardView award={a} />)}
                </div>

                {grid.piles.map((row, index) => {
                    return (
                        <div className="flex-center">
                            <AwardView award={grid.rowAwards[index]} />

                            {row.map(p => <PileView pile={p} />)}
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <div className="green-view">
            <div>
                {renderGrid(props.grid)}
            </div>
        </div>
    )
}
