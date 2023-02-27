import Nav from '@/components/nav';
import './globals.css';
import "bootstrap/dist/css/bootstrap.css";
import TopNav from '@/components/top-nav';

export const metadata = {
  title: 'Mpumalanga Economic Regulator',
  description: 'Mpumalanga Economic Regulator ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-light-g relative d-flex' style={
        {minHeight:'100vh', 
        fontFamily:'Century Gothic'}}
        >
        {/* <TopNav /> */}
        <div className="nav-space"></div>
        <Nav />
        <div className="w-100">
          {children}
        </div>
      </body>
    </html>
  )
}
