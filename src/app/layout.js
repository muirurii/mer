import './globals.css';
import "bootstrap/dist/css/bootstrap.css";

export const metadata = {
  title: 'Mpumalanga Economic Regulator',
  description: 'Mpumalanga Economic Regulator ',
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className='.bg-light-g' style={{minHeight:'100vh', fontFamily:'Century Gothic'}}>{children}</body>
    </html>
  )
}
