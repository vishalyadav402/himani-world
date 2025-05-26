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

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
    <link rel="manifest" href="/site.webmanifest"/>
    <meta name="msapplication-TileColor" content="#da532c"/>
    <meta name="theme-color" content="#ffffff"/>
    <link href="./output.css" rel="stylesheet"/>
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
