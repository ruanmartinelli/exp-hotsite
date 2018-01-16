import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import RadioGroup from '../components/RadioGroup';

class KitForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gender: null,
      shoeSize: null
    };
  }

  componentDidMount() {
    this.props.fetchKitGenders();
    this.props.fetchKitShoeSizes();
  }

  handleSelection(property, value) {
    const data = {};
    data[property] = value;
    this.setState(data, () => console.log(this.state));
  }

  render() {
    const { kit } = this.props;
    if (!kit.genders) {
      return false;
    }

    const genders = kit.genders.filter(g => g.available);
    const shoeSizes = kit.shoeSizes.filter(g => g.available);

    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={(event) => { event.preventDefault(); console.log(this.state); }}>
              <RadioGroup
                label="Que tipo de kit prefere receber?"
                options={genders}
                selected={this.state.gender}
                onSelect={value => this.handleSelection('gender', value)}
              />

              <RadioGroup
                label="Quanto você calça?"
                options={shoeSizes}
                selected={this.state.shoeSize}
                onSelect={value => this.handleSelection('shoeSize', value)}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

KitForm.propTypes = {
  kit: PropTypes.shape({
    genders: PropTypes.arrayOf(PropTypes.object)
  }).isRequired,
  fetchKitGenders: PropTypes.func.isRequired,
  fetchKitShoeSizes: PropTypes.func.isRequired,
};

export default connect(({ kit }) => ({ kit }), {
  ...actions
})(KitForm);
