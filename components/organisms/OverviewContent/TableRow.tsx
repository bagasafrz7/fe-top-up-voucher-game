import Image from 'next/image'
import React from 'react'

interface TableRowProps {
    title: String;
    categories: String;
    item: Number;
    price: Number;
    status: String;
    image: String;
}

export default function TableRow(props: TableRowProps) {
    const { title, categories, item, price, status, image } = props;
  return (

    <tr className="align-middle">
        <th scope="row">
            <Image className="float-start me-3 mb-lg-0 mb-3" src={`/img/${image}.png`} width={80} height={60} alt="" />
            <div className="game-title-header">
                <p className="game-title fw-medium text-start color-palette-1 m-0">
                    {title}
                </p>
                <p className="text-xs fw-normal text-start color-palette-2 m-0">{categories}</p>
            </div>
        </th>
        <td>
            <p className="fw-medium color-palette-1 m-0">{item} Gold</p>
        </td>
        <td>
            <p className="fw-medium text-start color-palette-1 m-0">{price}</p>
        </td>
        <td>
            <div>
                <span className={`float-start icon-status ${status.toLocaleLowerCase()}`}></span>
                <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                    {status}    
                </p>
            </div>
        </td>
    </tr>
  )
}
