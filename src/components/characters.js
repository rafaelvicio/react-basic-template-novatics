import React, { Component } from 'react';
import styled from '@emotion/styled'
import PropTypes from 'prop-types';

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
    const response = await fetch('https://api.github.com/orgs/novatics');
    const data = await response.json();
    this.setState({
      org: data,
    });
  }

  render() {
    const { title, description } = this.props;
    const { org } = this.state;

    return (
      <Card>
        <Title>{org.name}</Title>
        <Description>
          {title}/
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
