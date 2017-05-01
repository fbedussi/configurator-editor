import React, { Component } from 'react';
import { connect } from 'react-redux';
import fileDownload from 'react-file-download';

import logo from './logo.svg';
import './App.css';

import Node from './components/Node';

const mapStateToProps = (state) => ({
    labels: state.labels,
    tree: state.tree,
    questions: state.questions,
    answers: state.answers
});

const mapDispatchToProps = () => ({
});

class App extends Component {
  render() {
    const { labels, questions, answers, tree } = this.props;
    return (
      <div className="app">
        <button className="btn"
          onClick={() => fileDownload(JSON.stringify({labels, questions, answers, tree}, null, 4), 'apl-texts.json')}
        >export json</button>
        <Node 
          key={tree.id}
          currentNode = {tree}
          questions = {questions}
          answers = {answers}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
