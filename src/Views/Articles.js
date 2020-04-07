import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card/Card';
import GridTemplate from 'templates/GridTemplate';

const Articles = ({ articles }) => {
  return (
    <GridTemplate pageType="tertiary" pageName="articles">
      {articles.map(({ id, title, content, articleUrl, created }) => (
        <Card
          cardType="tertiary"
          cardName="articles"
          id={id}
          title={title}
          content={content}
          articleUrl={articleUrl}
          created={created}
          key={id}
        />
      ))}
    </GridTemplate>
  );
};

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      articleUrl: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = state => {
  const { articles } = state;

  return { articles };
};

export default connect(mapStateToProps)(Articles);
