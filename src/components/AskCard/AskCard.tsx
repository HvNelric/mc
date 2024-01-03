import React, { useState } from 'react';
import './AskCard.scss';
import Btn from '../Button/Btn';

export interface AskCardProps {
    cardType?: "result" | "question" | "response";
    typeText?: string;
    title?: string;
    tagsArray?: string[];
    resultAskNumber?: number;
    resultTerminated?: Date;
    predictNumber?: number;
    expertNumber?: number;
    expertMax?: number;
    bottomText?: string;
    href?: string
}

const AskCard: React.FC<AskCardProps> = ({ cardType = "result", typeText = "Question proposée", title, tagsArray, resultAskNumber, resultTerminated, predictNumber, expertNumber, expertMax, bottomText = "bottom texte", href }) => {

    const [tags, setTags] = useState<string[] | undefined>(tagsArray)
    const [checked, setChecked] = useState(false)

    const date = resultTerminated?.toLocaleString('default', { day: "2-digit", month: 'long', year: "numeric" });

    return (
        <>
            {cardType === "result" ? 
                <div className={"ask-card result-card"}>
                    <div className="type type-resultat">Résultats</div>
                    <h5 className="title title-result">{title}</h5>
                    <div className="opt-text-wrapper">
                        {resultAskNumber && resultAskNumber > 0 ? <div className="result-number"><i className='icon-question'></i>{`${resultAskNumber} questions`}</div> : undefined}

                        {resultTerminated ? <div className='result-date'><i className='icon-time'></i>Terminée le <strong>{date}</strong></div> : undefined}
                    </div>
                </div>
            : undefined}

            {cardType === "response" ?
                <div className='ask-card response-card'>
                    <div className="type">{typeText}</div>
                    <h5 className="title">{title}</h5>
                    {
                        tags && tags.length > 0 ? <div className="tags">
                            {
                                tags.slice(0, 2).map(tag => (
                                    <div className="tag">
                                        {tag}
                                    </div>
                                ))
                            }
                            {
                                tags && tags.length > 0 && <div className="tag tag-number">
                                    {`+${tags.length - 2}`}
                                    <div className="tooltip">
                                        {
                                            tags.slice(2).map(tooltip => (
                                                <div>{tooltip}</div>
                                            ))
                                        }
                                    </div>
                                </div>
                            }
                        </div> : undefined
                    }
                    <div className="opt-text-wrapper">
                        {predictNumber && predictNumber > 0 ? <div className='predict'><i className='icon-prediction'></i>{`${predictNumber} ${predictNumber > 1 ? "prédictions" : "prédiction"}`}</div> : undefined}

                        {expertMax && expertMax > 0 ? <div className='experts'><i className='icon-verified'></i>{`${expertNumber} / ${expertMax} experts (${expertNumber ? Math.floor((expertNumber * 100) / expertMax) : 0}%)`}</div> : undefined}
                    </div>
                </div>
            : undefined}

            {cardType === "question" ?
                <div className='ask-card question-card'>
                    <div className="type">{typeText}</div>
                    <h5 className="title">{title}</h5>
                    {
                        tags && tags.length > 0 ? <div className="tags">
                            {
                                tags.slice(0, 2).map(tag => (
                                    <div className="tag">
                                        {tag}
                                    </div>
                                ))
                            }
                            {
                                tags && tags.length > 0 && <div className="tag tag-number">
                                    {`+${tags.length - 2}`}
                                    <div className="tooltip">
                                        {
                                            tags.slice(2).map(tooltip => (
                                                <div>{tooltip}</div>
                                            ))
                                        }
                                    </div>
                                </div>
                            }
                        </div> : undefined
                    }
                    <div className="opt-text-wrapper">
                        {bottomText && bottomText !== "" ?
                            <div className="bottom-text">
                                <i className="icon-question"></i>{bottomText}
                            </div>
                        : undefined}
                    </div>
                    <div className="btn-wrapper response-btnwrapper">
                        <Btn label={'Voir'} href={href} target={'_blank'} />
                    </div>
                </div>
            : undefined}
        </>
    )
}

export default AskCard