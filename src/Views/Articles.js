import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card/Card';
import GridTemplate from 'templates/GridTemplate';

const Articles = ({ articles }) => {
  return (
    <GridTemplate pageType="tertiary" pageName="Articles">
      {articles.map(({ id, title, content, articleUrl, created }) => (
        <Card
          cardType="tertiary"
          cardName="Articles"
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
  articles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => {
  const { articles } = state;

  return { articles };
};

export default connect(mapStateToProps)(Articles);
