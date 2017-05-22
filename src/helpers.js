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

export function getNodeById(tree, id, acc = {}) {
    if (tree.id === id) {
        return tree;
    }

    return Object.keys(tree).reduce((acc, key) => {
        if (tree[key] && tree[key].id) {
            return getNodeById(tree[key], id, acc);
        } else {
            return acc;
        }
    }, acc);
}

export function getMaxId(tree) {   
    return Object.keys(tree).reduce((maxId, key) => {
        if (key === 'id') {
            return Math.max(maxId, tree[key]);
        }

        if (tree[key] && tree[key].id) {
            return getMaxId(tree[key]);
        }

        return maxId;
    }, 0);
}

export function replaceNode(tree, nodeData) {
    var node = getNodeById(tree, nodeData.nodeId);
    node.questionId = nodeData.childType === 'question' ? nodeData.childId : null;
    node.answerId = nodeData.childType === 'answer' ? nodeData.childId : null;
    
    Object.keys(node).forEach(key => {
        if (isNaN(key)) {
            return;
        }

        if (nodeData.childType === 'answer') {
            delete node[key];
            return;
        }

        if (parseInt(key) < nodeData.numberOfOptions) {
            let id = node[key].id ? node[key].id : getMaxId(tree);
            node[key] = {
                id
            };
        } else {
            delete node[key];
        }
    });
   
    return Object.assign({}, tree);
}

export function delNode(tree, nodeId) {
    if (isNaN(nodeId)) {
        return tree;
    }
    
    var node = getNodeById(tree, nodeId);
    
    Object.keys(node).forEach(key => {
        if (key !== 'id') {
            delete node[key];
        }
    });
    
    return Object.assign({}, tree);
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