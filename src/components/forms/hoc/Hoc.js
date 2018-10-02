import React from "react";
import Spinner from './spinner'
import './hoc.css'


const Fadeine = WrappedComponent => {
  return class Fadeine extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true
      };
      setTimeout(
        () =>
          this.setState({
            loading: false
          }),
        2000
      );
    }

    render() {
      return this.state.loading ? (
        <div className='Spinner' >
          {" "}
          <Spinner/>
        </div>
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };
};

export default Fadeine;
