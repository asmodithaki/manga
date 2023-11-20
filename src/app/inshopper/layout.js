"use client"

import React, { useEffect } from 'react';
import Head from 'next/head';
// import '@assets/css/bootstrap.min.css';
import "@assets/scss/main.scss";
import "@assets/fonts/fontawesome-all.min.css";

// Import Slick carousel

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const metadata = {
  title: 'Inshopper',
  description: 'Building unqiue solutions',
} 

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
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
           
           

            <link rel="icon" href="/favicon.png" />
        </Head>
        
      {children}
      
      </body>
    </html>
        
    
  );
}

