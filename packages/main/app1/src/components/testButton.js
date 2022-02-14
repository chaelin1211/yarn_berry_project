import React from 'react';
import { useTranslation } from 'react-i18next';

export default function TestButton({data}) {
  const { t } = useTranslation('testButton');

  return <button>{t(data)}</button>; 
}

TestButton.defaultProps = {
  data: 'ok'
}