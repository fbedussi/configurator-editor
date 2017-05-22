import React from 'react';
import NewNode from '../src/components/NewNode';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

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
    },
    {
        "id": 4,
        "text": "La distanza frontale tra i 2 pali è maggiore di 9 metri?",
        "images": [
            "9m.jpg"
        ],
        "options": ["no", "sì"]
    },
    {
        "id": 5,
        "text": "Ci sono ostacoli dove verranno installati i pali che potrebbero ridurre la visibilità dei cartelli di segnalazione laterali (alberi, tabelle segnaletiche o pubblicitarie, ecc)?",
        "options": ["no", "sì"]
    },
    {
        "id": 6,
        "text": "L'interazione con il pedone deve avvenire tramite pulsante touch (consigliata) o tramite sensore? <p class=\"note\"><small><em>Scarica le <a href=\"http://www.attraversamentipedonali.it/pdf/come_installare_sensore_APL_smart.pdf\" target=\"_blank\">istruzioni posizionamento sensore</a> per valutare se è possibile utilizzarlo nella tua installazione</em></small></p>",
        "options": ["Sensore", "Pulsante touch"]
    },
    {
        "id": 7,
        "text": "Il limite di velocità consentito sulla strada è maggiore di 50km/h?",
        "options": ["no", "sì"]
    },
    {
        "id": 8,
        "text": "L'alimentazione 230V è disponibile su entrambi i lati della strada?",
        "options": ["no", "sì"]
    }
];
const maxLength = 20;
const onSave = jest.fn();

test('New node selection', () => {
    const component = shallow(
        <NewNode
            options={questions}
            maxLength={maxLength}
            onSave={onSave}
        />
    );

    component.find('select').simulate('change', { target: { value: '4' } });
    component.find('Btn').simulate('click');

    expect(onSave).toBeCalled();
    expect(onSave.mock.calls[0][0]).toBe(4);
});