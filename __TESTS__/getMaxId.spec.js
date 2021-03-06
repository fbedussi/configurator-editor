import { getMaxId } from '../src/helpers';

var tree = {
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
        }
};

test('getMaxId', () => {
    expect(getMaxId(tree)).toEqual(6);
});