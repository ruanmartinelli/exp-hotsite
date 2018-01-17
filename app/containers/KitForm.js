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
    this.props.fetchKitShirtSizes();
    this.props.fetchKitTopSizes();
    this.props.fetchKitShortSizes();
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

    const genders = kit.genders.filter(item => item.available);
    const shoeSizes = kit.shoeSizes.filter(item => item.available);
    const shirtSizes = kit.shirtSizes.filter(item => item.available);
    const topSizes = kit.topSizes.filter(item => item.available);
    const shortSizes = kit.shortSizes.filter(item => item.available);

    return (
      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log(this.state);
          }}
        >
          <div className="row">
            <div className="col-md-6">
              <RadioGroup
                label="Que tipo de kit prefere receber?"
                options={genders}
                selected={this.state.gender}
                onSelect={value => this.handleSelection('gender', value)}
                optionsStyle="pill"
              />

              <RadioGroup
                label="Quanto você calça?"
                options={shoeSizes}
                selected={this.state.shoeSize}
                onSelect={value => this.handleSelection('shoeSize', value)}
              />

              <RadioGroup
                label="Qual o seu tamanho de camiseta?"
                options={shirtSizes}
                selected={this.state.shirtSize}
                onSelect={value => this.handleSelection('shirtSize', value)}
              />

              <RadioGroup
                label="Qual o seu tamanho de top?"
                options={topSizes}
                selected={this.state.topSize}
                onSelect={value => this.handleSelection('topSize', value)}
              />

              <RadioGroup
                label="Qual o seu tamanho de shorts?"
                options={shortSizes}
                selected={this.state.shortSize}
                onSelect={value => this.handleSelection('shortSize', value)}
              />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12">
              <button className="buttn buttn-primary pill" type="submit">
              ◄ Voltar
              </button>
              <button
                className="buttn buttn-secondary pill pull-right"
                type="submit"
              >
                Avançar
              </button>
            </div>
          </div>
        </form>
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
  fetchKitShirtSizes: PropTypes.func.isRequired,
  fetchKitTopSizes: PropTypes.func.isRequired,
  fetchKitShortSizes: PropTypes.func.isRequired
};

export default connect(({ kit }) => ({ kit }), {
  ...actions
})(KitForm);
