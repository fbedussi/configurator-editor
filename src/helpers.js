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

export function getNodeById(tree, id) {
    if (tree && tree.id && tree.id === id) {
        return tree;
    }

    Object.keys(tree).forEach(key => {
        if (tree[key] && tree[key].id) {
            getNodeById(tree[key]);
        }
    });
}

export function replaceNode(tree, nodeData) {
    return tree;
}

export function getContentById(contents, id) {
    if (!contents.filter) {
        return {};
    }

    var filteredContents = contents.filter(content => content.id === id);
    
    if (filteredContents.length) {
        return filteredContents[0];
    } else {
        return {};
    }
}

export function getNumberOfOptions(question) {
    try {
        return question.options.length    
    } catch(e) {
        return 0;
    }
}