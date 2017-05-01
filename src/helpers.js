export function ensureSequentialIds(tree, id = 0) {
    if (tree.hasOwnProperty('id')) {
        tree.id = id;
    }

    Object.keys(tree).forEach(key => {
        if (typeof tree[key] === 'object' && tree[key].hasOwnProperty('id')) {
            ensureSequentialIds(tree[key], ++id);
        }
    });

    return tree;
}
