import React from 'react';

import { useDocumentTitle } from '../utilities/useDocumentTitle';

export default function Page({ title, setTitle, children }) {
  useDocumentTitle(title, setTitle);

  return <>{children}</>;
}
