import { VillageCard } from "village-green-lib"

interface VillageViewProps {
    village: VillageCard
}

export const VillageView = (props: VillageViewProps) => {
    return (
        <div className="card-view village-view">
            <span>{props.village.name}</span>
        </div>
    )
}
