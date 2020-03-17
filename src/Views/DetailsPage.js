import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DetailsTemplate from 'templates/DetailsTemplate';
import { routes } from 'routes';

class DetailsPage extends Component {
  constructor() {
    super();
    this.state = {
      pageType: 'primary',
      pageName: 'Notes',
    };
  }

  componentDidMount() {
    const { match } = this.props;

    switch (match.path) {
      case routes.note:
        this.setState({ pageType: 'primary', pageName: 'Notes' });
        break;
      case routes.twitter:
        this.setState({ pageType: 'secondary', pageName: 'Twitters' });
        break;
      case routes.article:
        this.setState({ pageType: 'tertiary', pageName: 'Articles' });
        break;
      default:
        console.error('Something went wrong with matching paths');
    }
  }

  render() {
    const exampleArticle = {
      id: 1,
      title: 'Wake me up when Vue ends',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      twitterName: 'hello_roman',
      articleUrl: 'https://youtube.com/helloroman',
      created: '1 day',
    };

    const { pageType, pageName } = this.state;
    return (
      <DetailsTemplate
        pageType={pageType}
        pageName={pageName}
        title={exampleArticle.title}
        created={exampleArticle.created}
        content={exampleArticle.content}
        articleUrl={exampleArticle.articleUrl}
        twitterName={exampleArticle.twitterName}
      />
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default DetailsPage;
