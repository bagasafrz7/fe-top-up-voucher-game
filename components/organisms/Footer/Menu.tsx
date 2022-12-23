import Link from "next/link";

interface MenuProps {
    title: String;
    listMenu: any[];
}

export default function Menu(props: MenuProps) {
    const { title, listMenu } = props;
    return (
        <div className="col-md-4 col-6 mb-lg-0 mb-25">
            <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
            <ul className="list-unstyled">
                {
                    listMenu.map((item) => (
                        <>
                        <li className="mb-6">
                            <Link href={`${item.link}`} className="text-lg color-palette-1 text-decoration-none">{item.title}</Link>
                        </li>
                        </>
                    ))
                }
            </ul>
        </div>
    )
}
