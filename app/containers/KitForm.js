import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';

class KitForm extends Component {
  componentDidMount() {
    this.props.fetchKitGenders();
  }

  render() {
    const { kit } = this.props;

    if (!kit.genders) {
      return false;
    }

    return (
      <div>
        <h1>Kit</h1>
        <pre>
          {JSON.stringify(this.props.kit.genders)}
        </pre>
      </div>
    );
  }
}

KitForm.propTypes = {
  kit: PropTypes.shape({
    genders: PropTypes.arrayOf(PropTypes.object)
  }).isRequired,
  fetchKitGenders: PropTypes.func.isRequired
};

export default connect(
  ({ kit }) => ({ kit }),
  {
    ...actions
  })(KitForm);
