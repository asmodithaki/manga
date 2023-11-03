import React, { useEffect } from 'react';
import Head from 'next/head';

export const metadata = {
  title: 'Thurisa',
  description: "Building AI powered software for business management and automation."
}


  export default function RootLayout({ children,
  }: {
  
     children: React.ReactNode;
     }) 
     {
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
    <html>
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
            <title>Thurisa Labs |{title}</title>
            {desc && <meta name="description" content={desc} />}
            <link rel="icon" href="/favicon.png" />
        </Head>
        {children}
    </div></html>
    
  );
}
