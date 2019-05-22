/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import api from '../services';

const Card = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Description = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

class Characters extends Component {

  state = {
    org: {},
  };

  async componentDidMount() {
    const { data } = await api.get('orgs/novatics')
    this.setState({
      org: data,
    })
  }

  render() {
    const { title, description } = this.props;
    const { org } = this.state;

    return (
      <Card>
        <Title>{org.name}</Title>
        <Description>
          {title}
          {description}
        </Description>
      </Card>
    );
  }
}

Characters.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Characters;
