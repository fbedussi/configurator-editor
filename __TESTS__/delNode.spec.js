import { delNode } from '../src/helpers';

var tree = {
        "id": 0,
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

test('delNode', () => {
    expect(delNode(tree)).toEqual(tree);


    expect(delNode(tree, 4)).toEqual({
        "id": 0,
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
                "id": 4
            }
        }
    });

    expect(delNode(tree, 6)).toEqual({
        "id": 0,
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
                    "id": 6
                }
            }
        }
    });

    expect(delNode(tree, 0)).toEqual({
        "id": 0
    });
});