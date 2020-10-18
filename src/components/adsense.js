import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

function Adsense() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            adsense {
              adClient
              adSlot
            }
          }
        }
      }
    `
  );

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
