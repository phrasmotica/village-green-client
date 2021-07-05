import { useState } from "react"
import { Button, Header, Icon, Modal } from "semantic-ui-react"
import { AwardCard } from "village-green-lib"

interface AwardViewProps {
    award: AwardCard | null
    score: number
}

export const AwardView = (props: AwardViewProps) => {
    const [showModal, setShowModal] = useState(false)

    let award = props.award

    let nameText = award?.name ?? "(empty)"

    let scoreElement = <div><span>-</span></div>
    if (award !== null) {
        let className = props.score >= 6 ? "big-score" : ""
        scoreElement = <div className={className}><span>{props.score} points</span></div>
    }

    let descriptionModalButton = null
    if (award !== null) {
        descriptionModalButton = (
            <Button  onClick={() => setShowModal(true)}>
                <Icon name="question" />
            </Button>
        )
    }

    let descriptionModal = (
        <Modal
            closeIcon
            onClose={() => setShowModal(false)}
            onOpen={() => setShowModal(true)}
            open={showModal}
            size="small">
            <Header>
                {award?.name}
            </Header>

            <Modal.Content>
                {award?.criteria.map((cr, i) => {
                    let description = cr.getDescription()

                    let text = description.text

                    let detailsElement = null
                    if (description.details.length > 0) {
                        text += ":"

                        detailsElement = (
                            <ul>
                                {description.details.map(d => (
                                    <li>{d}</li>
                                ))}
                            </ul>
                        )
                    }

                    let endingElement = null
                    if (description.ending.length > 0) {
                        endingElement = (
                            <span>
                                {description.ending}.
                            </span>
                        )
                    }

                    let separatorElement = null
                    if (i < (award?.criteria.length ?? 0) - 1) {
                        separatorElement = <hr />
                    }

                    return (
                        <div>
                            <span>
                                {text}
                            </span>

                            {detailsElement}
                            {endingElement}
                            {separatorElement}
                        </div>
                    )
                })}
            </Modal.Content>
        </Modal>
    )

    return (
        <div className="card-view award-view">
            <div>
                <span>
                    {nameText}
                </span>
            </div>

            <div>
                {descriptionModalButton}
            </div>

            {scoreElement}

            {descriptionModal}
        </div>
    )
}
