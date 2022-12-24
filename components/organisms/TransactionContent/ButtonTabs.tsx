import React from 'react'

interface ButtonTabsProps {
    title: String;
    isActive?: boolean;
}

export default function ButtonTabs(props: Partial<ButtonTabsProps>) {
    const { title, isActive } = props;
  return (
    <a data-filter="*" href="#" className={`btn btn-status rounded-pill text-sm me-3 ${isActive && 'btn-active'}`}>{title}</a>
  )
}
