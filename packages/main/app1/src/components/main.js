import React from 'react';
import { useTranslation } from 'react-i18next';
import TestButton from './testButton';
import LngButton from './lngButton';
import Graph from './graph';

export default function Main() {
  const { t } = useTranslation('main');
  let btnData = "cancel"; 

  return <div>
        <LngButton/>
        <h2>{t('placeholder.hello')}</h2>
        <p>{t('placeholder.creator')}</p>
        <TestButton data={btnData}></TestButton>

        <hr/>

        <div>
          <Graph></Graph>
        </div>
      </div>; 
}
