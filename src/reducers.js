import {replaceNode} from './helpers';

export default function reducer(state = {}, action) {
	switch (action.type) {
		case 'INIT':
            return Object.assign({}, state, {
                labels: action.texts.labels,
                questions: action.texts.questions,
                answers: action.texts.answers,
                tree: action.texts.tree
            });

        case 'SET_NODE':
            var newTree = replaceNode(state.tree, action.nodeData);
            return Object.assign({}, state, {
                tree: newTree
            })

		default:
			return state;
	}
}
