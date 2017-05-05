import {ensureSequentialIds} from './helpers';

export function init() {
    return function (dispatch) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'apl-texts.json');
        xhr.send(null);
        xhr.onreadystatechange = function () {
            var DONE = 4; // readyState 4 means the request is done.
            var OK = 200; // status 200 is a successful return.
            if (xhr.readyState === DONE) {
                if (xhr.status === OK) {
                    const texts = JSON.parse(xhr.responseText);
                    texts.tree = ensureSequentialIds(texts.tree);
                    dispatch({ type: 'INIT', texts });
                } else {
                    /*eslint-disable */
                    console.log('ERROR: ' + xhr.status); // An error occurred during the request.
                    /*eslint-enable */
                }
            }
        };
    };
}

export function setNode(nodeData) {
    return { type: 'SET_NODE', nodeData};
}