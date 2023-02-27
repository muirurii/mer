import Compliance from '@/components/compliance'
import Invoice from '@/components/invoice'
import Notice from '@/components/notice'
import Certificates from '@/components/certificates'
import React from 'react'

const Documents = () => {
  return (
    <div className="w-100">
       <div className="text-center">
        <br></br>
        <h4>Documents library</h4>
        <hr></hr>
        <br></br>
      </div>
       <Notice />
       <Compliance />
       <Invoice />
       <Certificates />
    </div>
  )
}

export default Documents