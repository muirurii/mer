import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
    <div className="row align-items-center g-lg-5 py-5">
      <div className="col-lg-7 text-center text-lg-start">
      <div className='col-lg-6 col-md-6 text-center h-100 d-flex flex-column justify-content-center'>
       <h1>Welcome to <br/>
         MPUMALANGA ECONOMIC REGULATOR
      </h1>
        <br></br>
          <Link href="/licenses/new" className='btn btn-primary'>Apply New License</Link><br></br>
           <Link href="/licenses/linked" className='btn btn-outline-primary'>View My Licenses</Link>
        </div>
      </div>
      <div className="col-md-10 mx-auto col-lg-5">
      <div className='col-lg-6 col-md-6 text-center'>
         <Image src={'/logo.PNG'} width={350} height={270} alt="LOGO"/>
        </div>
      </div>
    </div>
  </div>
  )
}
