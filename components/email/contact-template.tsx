import * as React from 'react';

interface ContactTemplateProps {
  firstName: string;
}

export const ContactTemplate: React.FC<Readonly<ContactTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
);
