import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card/Card';
import GridTemplate from 'templates/GridTemplate';

const Notes = ({ notes }) => {
  return (
    <GridTemplate pageType="primary" pageName="Notes">
      {notes.map(({ id, title, content, created }) => (
        <Card
          cardType="primary"
          cardName="Notes"
          id={id}
          title={title}
          content={content}
          created={created}
          key={id}
        />
      ))}
    </GridTemplate>
  );
};

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => {
  const { notes } = state;

  return { notes };
};
export default connect(mapStateToProps)(Notes);
