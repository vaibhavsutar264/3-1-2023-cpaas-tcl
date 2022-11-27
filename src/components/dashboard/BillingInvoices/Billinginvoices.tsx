import React, { useState } from 'react'
import Billingtable from './Billingtable'
import { Billingcards } from './Billingcards'
import { Actionelement } from './Actionelement'
import { BillingBreadcrum } from './BillingBreadcrum'

export const Billinginvoices = () => {
  const [data, setData] = useState<any[]>([]);
  return (
    <div className="dashboard__content">
      <BillingBreadcrum data={data} setData={setData}/>
      <Billingcards />
      <Actionelement />
      <Billingtable data={data} setData={setData} />
    </div>
  )
}
