import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import Node from './components/Node';

const mapStateToProps = (state) => ({
    tree: state.tree,
    questions: state.questions,
    answers: state.answers
});

const mapDispatchToProps = () => ({
});

class App extends Component {
  render() {
    const { tree, questions, answers} = this.props;
    return (
      <div className="app">
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
