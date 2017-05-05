import { getContentById } from '../src/helpers';

var contents = [
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
        }];

test('getContentById', () => {
    expect(getContentById(contents, 2)).toEqual({
            "id": 2,
            "text": "Il sistema deve essere dotato di dispositivo per l'interazione con il pedone?",
            "options": ["no", "sì"]
        });

    expect(getContentById(contents, 20)).toEqual({});

    expect(getContentById([], 2)).toEqual({});

    expect(getContentById("pippo", 2)).toEqual({});

    expect(getContentById(contents)).toEqual({});

});