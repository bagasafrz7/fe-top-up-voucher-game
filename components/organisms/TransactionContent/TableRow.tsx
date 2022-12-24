import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface TableRowProps {
    image: String;
    title: String;
    category: String;
    item: Number;
    price: Number;
    status: String;
}

export default function TableRow(props: TableRowProps) {
    const { image, title, category, item, price, status } = props;
  return (
    <tr data-category="pending" className="align-middle">
        <th scope="row">
            <Image className="float-start me-3 mb-lg-0 mb-3" src={`/img/${image}.png`}
                width="80" height="60" alt="" />
            <div className="game-title-header">
                <p className="game-title fw-medium text-start color-palette-1 m-0">
                    {title}    
                </p>
                <p className="text-xs fw-normal text-start color-palette-2 m-0">{category}</p>
            </div>
        </th>
        <td>
            <p className="fw-medium color-palette-1 m-0">{item} Gold</p>
        </td>
        <td>
            <p className="fw-medium color-palette-1 m-0">{price}</p>
        </td>
        <td>
            <div>
                <span className={`float-start icon-status ${status.toLocaleLowerCase()}`}></span>
                <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                    {status}    
                </p>
            </div>
        </td>
        <td>
            <Link href="/member/transaction/detail" className="btn btn-status rounded-pill text-sm">Details</Link>
        </td>
    </tr>
  )
}
