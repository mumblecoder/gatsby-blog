import React, { useEffect } from 'react';

function Adsense() {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  });
  return (
      <div style={{ padding: 8 }}>
          <ins class='adsbygoogle'
              style={ { display: 'block' } }
              data-ad-client={ 'ca-pub-3339269060537853' }
              data-ad-slot={ 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' }
              data-ad-format='auto'
              data-full-width-responsive='true'></ins>
      </div>
  );
}
export default Adsense;
