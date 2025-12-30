import { Component } from "react";

class Smile extends Component {
  render() {
    const { count, handleClick, index, smileLink } = this.props;

    return (
      <div onClick={() => handleClick(index)} className='item'>
        <img src={smileLink} className="smail" alt="smail" />
        <span>
          {count}
        </span>
      </div>
    )
  }
}

export default Smile;