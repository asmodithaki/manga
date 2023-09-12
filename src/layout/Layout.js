import React, { useEffect } from 'react';
import Head from 'next/head';

const Layout = ({
    children,
    title = 'Thurisa Labs - Your window into the future',
    desc = 'Thurisa Labs is a software development company specializing in web and mobile application development.',
    hasClass = false,
    classOpt = ''
}) => {

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://termify.io/script/64f86a7d99238.js';

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    }
  }, []);

  return (
    <div className={`main-wrapper ${hasClass ? 'overflow-hidden' : ''} ${classOpt}`}>
        <Head>
            <script
                dangerouslySetInnerHTML={{
                    __html: `(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "hnujz6tfvp");`,
                }}
            />
            <title>Thurisa Labs | {title}</title>
            {desc && <meta name="description" content={desc} />}
            <link rel="icon" href="/favicon.png" />
        </Head>
        {children}
    </div>
  );
}

export default Layout;