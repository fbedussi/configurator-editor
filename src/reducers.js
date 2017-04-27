export default function reducer(state = {}, action) {
	switch (action.type) {
		case 'INIT':
            return Object.assign({}, state, {
                questions: action.texts.questions,
                answers: action.texts.answers,
                tree: action.texts.tree
            });

		default:
			return state;
	}
}
