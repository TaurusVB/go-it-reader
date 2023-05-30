import React, { Component } from 'react';
import { Controls } from '../controls/controls';
import { Progress } from 'components/progress/progress';
import { Publications } from 'components/publication/publication';

const LS_KEY = 'current_index_item';

export class Reader extends Component {
  state = {
    index: 0,
  };

  componentDidMount() {
    const savedStateIndex = localStorage.getItem(LS_KEY);
    if (savedStateIndex) this.setState({ index: Number(savedStateIndex) });
  }

  componentDidUpdate(prevProps, PrevState) {
    if (PrevState.index !== this.state.index) {
      localStorage.setItem(LS_KEY, this.state.index);
    }
  }

  changeIndex = value => {
    this.setState(state => ({ index: state.index + value }));
  };

  render() {
    const { index } = this.state;
    const { items } = this.props;
    const currentItem = this.props.items[index];

    return (
      <div>
        <Controls
          current={index + 1}
          total={items.length}
          onChange={this.changeIndex}
        />

        <Progress current={index} total={items.length} />

        <Publications currItem={currentItem} />
      </div>
    );
  }
}
