import { getNumberOfOptions } from '../src/helpers';

var question1 = {
            "id": 1,
            "text": "Nel luogo di installazione è possibile collegare il sistema APL alla rete elettrica?",
            "options": ["no", "sì"]
        };

var question2 = {
            "id": 1,
            "text": "Nel luogo di installazione è possibile collegare il sistema APL alla rete elettrica?",
            "options": ["no", "sì", "forse"]
        };

test('getNumberOfOptions', () => {
    expect(getNumberOfOptions(question1)).toBe(2);

    expect(getNumberOfOptions(question2)).toBe(3);

    expect(getNumberOfOptions(null)).toBe(0);

    expect(getNumberOfOptions({})).toBe(0);
});