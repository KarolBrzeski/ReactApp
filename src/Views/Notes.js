import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/molecules/Card/Card';

const Notes = () => {
  return (
    <UserPageTemplate>
      <Card cardType="primary" />
      <Card cardType="primary" />
      <Card cardType="primary" />
      <Card cardType="primary" />
    </UserPageTemplate>
  );
};

export default Notes;
