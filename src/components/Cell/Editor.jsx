import React from 'react';

import CodeMirror from 'react-code-mirror';

export default class Editor extends React.Component {
  static displayName = 'Editor';

  static propTypes = {
    language: React.PropTypes.string,
    lineNumbers: React.PropTypes.bool,
    onChange: React.PropTypes.func,
    text: React.PropTypes.any,
    theme: React.PropTypes.string,
  };

  static defaultProps = {
    language: 'python',
    lineNumbers: false,
    text: '',
    theme: 'composition',
  };

  constructor(props) {
    super(props);
    this.state = {
      source: this.props.text,
    };
  }

  render() {
    return (
      <CodeMirror value={this.state.source}
                  mode={this.props.language}
                  textAreaClassName={['editor']}
                  textAreaStyle={{
                    minHeight: '10em',
                  }}
                  lineNumbers={this.props.lineNumbers}
                  theme={this.props.theme}
                  onChange={(e) => {
                    this.setState({ source: e.target.value });
                    if(this.props.onChange) {
                      this.props.onChange(e.target.value);
                    }
                  }}
                  />
    );
  }
}
