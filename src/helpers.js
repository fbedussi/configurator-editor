function objectHasId(obj) {
    return obj && typeof obj === 'object' && obj.hasOwnProperty('id');
}
export function ensureSequentialIds(tree, id = 0) {
    if (objectHasId(tree)) {
        tree.id = id;

        Object.keys(tree).forEach(key => {
            if (objectHasId(tree[key])) {
                ensureSequentialIds(tree[key], ++id);
            }
        });
    }

    return tree;
}
