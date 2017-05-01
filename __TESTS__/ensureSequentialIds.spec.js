import { ensureSequentialIds } from '../src/helpers';

test('ensureUniqueIds', () => {
    expect(ensureSequentialIds({
        id: 1,
        0: {
            id: 1
        },
        1: {
            id: 2
        }
    })).toEqual({
        id: 0,
        0: {
            id: 1
        },
        1: {
            id: 2
        }
    });

    expect(ensureSequentialIds({
        id: 1,
        pippo: {
            pluto: 1
        },
        1: {
            id: 2
        }
    })).toEqual({
        id: 0,
        pippo: {
            pluto: 1
        },
        1: {
            id: 1
        }
  });
});