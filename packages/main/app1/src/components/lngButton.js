import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LngButton({ data }) {
    const { t, i18n } = useTranslation('lngButton');
    const lngList = ['kr', 'en'];
    const changelanguage = (data) => i18n.changeLanguage(data);    

    return <div>
        {
            lngList.map((v) => {
                return <button onClick={()=>changelanguage(v)} key={v}>{t(v)}</button>
            })
        }
    </div>;
}