import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => { if (this.props.selectGif) {this.props.selectGif(this.props.id); } }

  render() {
    const src = `https://media3.giphy.com/media/${this.props.id}/200.webp?cid=ecf05e4777c1ecdae210f1b841a1e789385a8679239f92a2&rid=200.webp`;
    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
