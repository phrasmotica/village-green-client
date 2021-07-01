import { AwardCard } from "village-green-lib"

interface AwardViewProps {
    award: AwardCard | null
}

export const AwardView = (props: AwardViewProps) => {
    return (
        <div className="card-view award-view">
            <span>{props.award?.name ?? "(empty)"}</span>
        </div>
    )
}
