import React from 'react';

export const Error = ({ message }) => {
  return message ? <div className="error-message">{message}</div> : null;
};


