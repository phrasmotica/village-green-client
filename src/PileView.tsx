import { Pile } from "village-green-lib"

interface PileViewProps {
    pile: Pile
}

export const PileView = (props: PileViewProps) => {
    const renderProperty = (text: string) => (
        <div><span>{text}</span></div>
    )

    let card = props.pile.topCard()
    if (card === null) {
        return (
            <div className="card-view pile-view">
                <span>(empty)</span>
            </div>
        )
    }

    return (
        <div className="card-view pile-view">
            {renderProperty(`Colour: ${card.getColour()}`)}
            {renderProperty(`Flower: ${card.getFlower()}`)}
            {renderProperty(`Features: ${card.getFeatures()}`)}
            {renderProperty(`Trees: ${card.getTrees()}`)}
            {renderProperty(`Has lawn: ${card.hasLawn()}`)}
        </div>
    )
}
