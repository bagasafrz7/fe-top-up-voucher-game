import React from 'react'
import OverviewContent from '../../components/organisms/OverviewContent'
import Siderbar from '../../components/organisms/Sidebar'

export default function Member() {
  return (
    <section className="overview overflow-auto">
        <Siderbar activeMenu={"overview"} />
        <OverviewContent />
    </section>
  )
}
