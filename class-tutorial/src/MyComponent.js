import React, { Component } from "react";
import PropTypes from "prop-types";

// const MyComponent = (props) => {
//   const { name, children, favoriteNumber } = props;
//   //비구조화 할당
//   //props.name 처럼 앞에 props를 안 붙여도 되게 됨.
//   return (
//     <div>
//       {name} children 값은 {children}
//       <br />
//       제가 좋아하는 숫자는 {favoriteNumber}
//     </div>
//   );
// };

class MyComponent extends Component {
  static defaultProps = {
    name: "기본이름",
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };

  render() {
    const { name, children, favoriteNumber } = this.props;
    //비구조화 할당
    //props.name 처럼 앞에 props를 안 붙여도 되게 됨.
    return (
      <div>
        {name} children 값은 {children}
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}
      </div>
    );
  }
}

// //name을 전달 받지 못했을 때의 기본 값.
// MyComponent.defaultProps = {
//   name: "기본 이름",
// };

// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired,
// };

export default MyComponent;
