import React from 'react'
import Siderbar from '../../../components/organisms/Sidebar'
import TransactionContent from '../../../components/organisms/TransactionContent'

export default function Transactions() {
  return (
    <section className="transactions overflow-auto">
        <Siderbar activeMenu={'transaction'} />
        <TransactionContent />
    </section>
  )
}
