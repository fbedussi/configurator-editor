import {replaceNode, delNode} from './helpers';

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
            return Object.assign({}, state, {
                tree: replaceNode(state.tree, action.nodeData)
            });

        case 'DEL_NODE':
            return Object.assign({}, state, {
                tree: delNode(state.tree, action.nodeId)
            })

		default:
			return state;
	}
}
