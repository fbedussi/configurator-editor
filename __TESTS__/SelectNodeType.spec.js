import React from 'react';
import { SelectNodeType } from '../src/components/SelectNodeType';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

const questions = [
    {
        "id": 1,
        "text": "Nel luogo di installazione è possibile collegare il sistema APL alla rete elettrica?",
        "options": ["no", "sì"]
    },
    {
        "id": 2,
        "text": "Il sistema deve essere dotato di dispositivo per l'interazione con il pedone?",
        "options": ["no", "sì"]
    },
    {
        "id": 3,
        "text": "Nel luogo di installazione è già presente illuminazione stradale oppure altra illuminazione artificiale? (Vetrine, insegne luminose, ecc.)?",
        "options": ["no", "sì"]
    }
];

const answers = [
    {
        "id": 1,
        "title": "APL Solar-active",
        "subtitle": "con pulsante touch",
        "images": [
            "APL_Solar-active_con_pulsante_touch.jpg"
        ],
        "text": "Questa soluzione è valida solo se nel sito di installazione <strong style=\"text-transform: uppercase;\">non è presente illuminazione pubblica</strong> in quanto le potenze sviluppate non sono sufficienti a creare un contrasto adeguato se non in zone buie"
    },
    {
        "id": 2,
        "title": "APL Classic",
        "subtitle": "soluzione 1 Stratos N",
        "images": [
            "APL_Classic_soluzione1_Stratos_N.jpg"
        ],
        "text": ""
    },
    {
        "id": 3,
        "title": "APL Classic",
        "subtitle": "soluzione 1 Stratos P",
        "images": [
            "APL_Classic_soluzione1_Stratos_P.jpg"
        ],
        "text": ""
    },
    {
        "id": 4,
        "title": "APL Classic",
        "subtitle": "soluzione 2 Stratos P",
        "images": [
            "APL_Classic_soluzione2_Stratos_P.jpg"
        ],
        "text": ""
    }
];

const tree = {
    "id": 1,
    "questionId": 1,
    "answerId": null,
    "0": {
        "id": 2,
        "questionId": 2,
        "answerId": null,
        "0": {
            "id": 3,
            "questionId": null,
            "answerId": 21
        },
        "1": {
            "id": 4,
            "questionId": 6,
            "answerId": null,
            "0": {
                "id": 5,
                "questionId": null,
                "answerId": 16
            },
            "1": {
                "id": 6,
                "questionId": null,
                "answerId": 1
            }
        }
    },
    "1": {
        "id": 7,
        "questionId": 2,
        "answerId": null,
        "0": {
            "id": 8,
            "questionId": 3,
            "answerId": null,
            "0": {
                "id": 9,
                "questionId": 4,
                "answerId": null,
                "0": {
                    "id": 10,
                    "questionId": 5,
                    "answerId": null,
                    "0": {
                        "id": 11,
                        "questionId": 8,
                        "answerId": null,
                        "0": {
                            "id": 12,
                            "questionId": null,
                            "answerId": 19
                        },
                        "1": {
                            "id": 13,
                            "questionId": null,
                            "answerId": 2
                        }
                    },
                    "1": {
                        "id": 14,
                        "questionId": 8,
                        "answerId": null,
                        "0": {
                            "id": 15,
                            "questionId": null,
                            "answerId": 20
                        },
                        "1": {
                            "id": 16,
                            "questionId": null,
                            "answerId": 23
                        }
                    }
                },
                "1": {
                    "id": 17,
                    "questionId": 5,
                    "answerId": null,
                    "0": {
                        "id": 18,
                        "questionId": 8,
                        "answerId": null,
                        "0": {
                            "id": 19,
                            "questionId": null,
                            "answerId": 15
                        },
                        "1": {
                            "id": 20,
                            "questionId": null,
                            "answerId": 3
                        }
                    },
                    "1": {
                        "id": 21,
                        "questionId": 8,
                        "answerId": null,
                        "0": {
                            "id": 22,
                            "questionId": null,
                            "answerId": 14
                        },
                        "1": {
                            "id": 23,
                            "questionId": null,
                            "answerId": 5
                        }
                    }
                }
            },
            "1": {
                "id": 24,
                "questionId": 5,
                "answerId": null,
                "0": {
                    "id": 25,
                    "questionId": 8,
                    "answerId": null,
                    "0": {
                        "id": 26,
                        "questionId": null,
                        "answerId": 15
                    },
                    "1": {
                        "id": 27,
                        "questionId": null,
                        "answerId": 3
                    }
                },
                "1": {
                    "id": 28,
                    "questionId": 8,
                    "answerId": null,
                    "0": {
                        "id": 29,
                        "questionId": null,
                        "answerId": 14
                    },
                    "1": {
                        "id": 30,
                        "questionId": null,
                        "answerId": 5
                    }
                }
            }
        },
        "1": {
            "id": 31,
            "questionId": 6,
            "answerId": null,
            "0": {
                "id": 32,
                "questionId": 7,
                "answerId": null,
                "0": {
                    "id": 33,
                    "questionId": 5,
                    "answerId": null,
                    "0": {
                        "id": 34,
                        "questionId": 8,
                        "answerid": null,
                        "0": {
                            "id": 35,
                            "questionId": null,
                            "answerId": 6
                        },
                        "1": {
                            "id": 36,
                            "questionId": null,
                            "answerId": 13
                        }
                    },
                    "1": {
                        "id": 37,
                        "questionId": 8,
                        "answerid": null,
                        "0": {
                            "id": 38,
                            "questionId": null,
                            "answerId": 7
                        },
                        "1": {
                            "id": 39,
                            "questionId": null,
                            "answerId": 12
                        }
                    }
                },
                "1": {
                    "id": 40,
                    "questionId": 8,
                    "answerid": null,
                    "0": {
                        "id": 41,
                        "questionId": null,
                        "answerId": 22
                    },
                    "1": {
                        "id": 42,
                        "questionId": null,
                        "answerId": 12
                    }
                }
            },
            "1": {
                "id": 43,
                "questionId": 7,
                "answerId": null,
                "0": {
                    "id": 44,
                    "questionId": 5,
                    "answerId": null,
                    "0": {
                        "id": 45,
                        "questionId": 8,
                        "answerid": null,
                        "0": {
                            "id": 46,
                            "questionId": null,
                            "answerId": 8
                        },
                        "1": {
                            "id": 47,
                            "questionId": null,
                            "answerId": 11
                        }
                    },
                    "1": {
                        "id": 48,
                        "questionId": 8,
                        "answerid": null,
                        "0": {
                            "id": 49,
                            "questionId": null,
                            "answerId": 9
                        },
                        "1": {
                            "id": 50,
                            "questionId": null,
                            "answerId": 10
                        }
                    }
                },
                "1": {
                    "id": 51,
                    "questionId": 8,
                    "answerid": null,
                    "0": {
                        "id": 52,
                        "questionId": null,
                        "answerId": 9
                    },
                    "1": {
                        "id": 53,
                        "questionId": null,
                        "answerId": 10
                    }
                }
            }
        }
    }
};

const setNode = jest.fn()

test('Select node type question', () => {
    const component = shallow(
        <SelectNodeType
            currentNode={tree}
            questions={questions}
            answers={answers}
            setNode={setNode}
            onSave={nodeData => {
                //this.setState({ change: false });
                this.props.setNode(nodeData)
            }}
        />
    );

    component.find('#questionNode').simulate('click');
    expect(component).toMatchSnapshot();
});

test('Select node type answer', () => {
    const component = shallow(
        <SelectNodeType
            currentNode={tree}
            questions={questions}
            answers={answers}
            setNode={setNode}
            onSave={nodeData => {
                //this.setState({ change: false });
                this.props.setNode(nodeData)
            }}
        />
    );

    component.find('#answerNode').simulate('click');
    expect(component).toMatchSnapshot();
});

test('Select node type save', () => {
    const component = mount(
        <SelectNodeType
            currentNode={tree}
            questions={questions}
            answers={answers}
            setNode={setNode}
            onSave={nodeData => {
                //this.setState({ change: false });
                //this.props.setNode(nodeData)
                setNode(nodeData)
            }}
        />
    );
    component.find('#questionNode').simulate('click');
    component.find('Btn').simulate('click');
    expect(setNode).toBeCalled();
});