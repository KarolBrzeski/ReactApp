import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card/Card';
import GridTemplate from 'templates/GridTemplate';

const Notes = ({ notes }) => {
  return (
    <GridTemplate pageType="primary" pageName="notes">
      {notes.map(({ id, title, content, created }) => (
        <Card
          cardType="primary"
          cardName="notes"
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
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = state => {
  const { notes } = state;

  return { notes };
};
export default connect(mapStateToProps)(Notes);
