import React from 'react'
import Siderbar from '../../../components/organisms/Sidebar'
import TransactionDetailContent from '../../../components/organisms/TransactionDetialContent'

export default function TransactionDetail() {
  return (
    <section className="transactions-detail overflow-auto">
        <Siderbar activeMenu={'transaction'} />
        <TransactionDetailContent />
    </section>
  )
}
