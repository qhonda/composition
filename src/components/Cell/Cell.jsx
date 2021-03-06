import React from 'react';

import CodeCell from './CodeCell';
import MarkdownCell from './MarkdownCell';

export default class Cell extends React.Component {
  static displayName = 'Cell';

  static propTypes = {
    input: React.PropTypes.any,
    language: React.PropTypes.string,
    outputs: React.PropTypes.any,
    type: React.PropTypes.string,
  };

  render() {
    return (
      <div style={{
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingBottom: '10px',
      }}>
      {
      this.props.type === 'markdown' ?
        <MarkdownCell {...this.props}/> :
        <CodeCell {...this.props}/>
      }
      </div>
    );
  }
}
