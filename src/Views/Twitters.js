import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card/Card';
import GridTemplate from 'templates/GridTemplate';

const Twitters = ({ twitters }) => {
  return (
    <GridTemplate pageType="secondary" pageName="Twitters">
      {twitters.map(({ id, title, content, twitterName, created }) => (
        <Card
          cardType="secondary"
          cardName="Twitters"
          id={id}
          title={title}
          content={content}
          twitterName={twitterName}
          created={created}
          key={id}
        />
      ))}
    </GridTemplate>
  );
};

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => {
  const { twitters } = state;

  return { twitters };
};
export default connect(mapStateToProps)(Twitters);
