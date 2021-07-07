import { Deck } from "village-green-lib"

interface DeckViewProps<T> {
    deck: Deck<T>
}

export const DeckView = <T,>(props: DeckViewProps<T>) => {
    const renderProperty = (text: string) => (
        <div><span>{text}</span></div>
    )

    return (
        <div className="deck-view">
            {renderProperty(`x${props.deck.size()}`)}
        </div>
    )
}
