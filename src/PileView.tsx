import { Feature, Pile } from "village-green-lib"

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

    if (card.hasLawn()) {
        return (
            <div className={`card-view pile-view lawn`}>
                <span>Lawn</span>
            </div>
        )
    }

    let structureElement = null
    if (card.getFeatures().includes(Feature.Structure)) {
        structureElement = renderProperty("Structure")
    }

    let pondElement = null
    if (card.getFeatures().includes(Feature.Pond)) {
        pondElement = renderProperty("Pond (2 points)")
    }

    let treesElement = null
    if (card.getTrees().length > 0) {
        treesElement = renderProperty(card.getTrees().join(", "))
    }

    let colour = card.getColour()?.toLowerCase()

    return (
        <div className={`card-view pile-view ${colour}`}>
            {renderProperty(`Flower: ${card.getFlower()}`)}

            {structureElement}
            {pondElement}
            {treesElement}
        </div>
    )
}
