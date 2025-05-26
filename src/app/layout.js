import ClientLayout from "./Clientlayout";
import "./globals.css";

export const metadata = {
  title: "Himani World Info Solutions",
  description: "Himani World Info Solutions -  A Software product supplier company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
    <link rel="canonical" href="https://himaniworldinfosol.com/" />
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"/> */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
    <title>Himani World Info Solutions - A Software Product & Service Supplier Company</title>

    <meta name="title" content="Himani World Info Solutions - A Software Product & Service Supplier Company"/>
    <meta name="description" content="Himani World Info Solutions - A Software Supplier Company is having very good trustability in market.."/>
    <meta name="robots" content="index, follow"/>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="language" content="English"/>
    <meta name="author" content="Himani World Info Solutions"/>

    <meta property="og:title" content="Himani World Info Solutions - A Software Service Supplier Company"/>
    <meta property="og:site_name" content="himaniworldinfosol.com"/>
    <meta property="og:url" content="https://himaniworldinfosol.com/"/>
    <meta property="og:description" content="Himani World Info Solutions - A Software Supplier Company is having very good trustability in market.."/>
    <meta property="og:type" content=""/>
    <meta property="og:image" content="https://himaniworldinfosol.com/images/icon.png"/>
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@himaniworldinfosol" />
    <meta name="twitter:creator" content="@himaniworldinfosol" />

   

    <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png"/>
    <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png"/>
    <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png"/>
    <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png"/>
    <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png"/>
    <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png"/>
    <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png"/>
    <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png"/>
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png"/>
    <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
    <meta name="msapplication-TileColor" content="#322f82"/>
    <meta name="theme-color" content="#ffffff"/>
    <link href="./output.css" rel="stylesheet"/>
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
