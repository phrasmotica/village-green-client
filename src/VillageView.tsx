import { VillageCard } from "village-green-lib"

interface VillageViewProps {
    village: VillageCard
}

export const VillageView = (props: VillageViewProps) => {
    let scoreText = "1 point"
    if (props.village.isFlipped) {
        scoreText = "(flipped)"
    }

    return (
        <div className="card-view village-view">
            <div><span>{props.village.name}</span></div>
            <div><span>{scoreText}</span></div>
        </div>
    )
}
