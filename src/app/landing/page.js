import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Landing() {
  return (

    <div className='container h-100 d-flex flex-column justify-content-center' >
      <div className='row'>
        <div className='col-lg-6 col-md-6 text-center h-100 d-flex flex-column justify-content-center'>
          <h4>Welcome to MPUMALANGA ECONOMIC REGULATOR</h4><br></br>
          <button className='btn btn-outline-secondary'>Apply New License</button><br></br>
          <button className='btn btn-outline-secondary'>View My Licenses</button>
        </div>
        <div className='col-lg-6 col-md-6 text-center'>
          <Image src={'/logo.PNG'} width={350} height={270}/>
        </div>
      </div>

    </div>
  )
}
