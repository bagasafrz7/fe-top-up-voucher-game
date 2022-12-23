import Link from 'next/link'

interface MenuProps {
    title: string;
    isActive?: boolean;
    href: string;
}
export default function Menu(props: Partial<MenuProps>) {
  const { title, isActive, href="/" } = props;
  return (
    <li className="nav-item my-auto">
      <Link href={href} className={`nav-link ${isActive && 'active'}`}>
        <span aria-current="page">{title}</span>
      </Link>
    </li>
  )
}
