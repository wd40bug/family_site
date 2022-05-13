'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You clicked me!';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Im a react element!'
    );
  }
}

const domContainer = document.querySelector('#counter');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));