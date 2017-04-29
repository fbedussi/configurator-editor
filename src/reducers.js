export default function reducer(state = {
    openNodes: []
}, action) {
	switch (action.type) {
		case 'INIT':
            return Object.assign({}, state, {
                questions: action.texts.questions,
                answers: action.texts.answers,
                tree: action.texts.tree
            });

        case 'TOGGLE_OPEN':
            const idPos = state.openNodes.indexOf(action.nodeId);
            const newOpenNodes = idPos === -1 ?
                state.openNodes.concat(action.nodeId)
                : state.openNodes.slice(0, idPos).concat(state.openNodes.slice(idPos + 1));

            return Object.assign({}, state, {
                openNodes: newOpenNodes
            });

		default:
			return state;
	}
}
