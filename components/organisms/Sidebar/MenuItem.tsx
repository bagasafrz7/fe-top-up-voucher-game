import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface MenuItemProps {
    title: String;
    icon: String;
    active?: boolean;
    href: String;
}

export default function MenuItem(props: Partial<MenuItemProps>) {
    const { title, icon, active, href} = props;
  return (
    <div className={`item mb-30 ${active && 'active'}`}>
        <Image className="icon me-3" src={`/icon/${icon}.svg`} width={25} height={25} alt="" />
        <p className="item-title m-0">
            <Link href={`${href}`} className="text-lg text-decoration-none">{title}</Link>
        </p>
    </div>
  )
}
