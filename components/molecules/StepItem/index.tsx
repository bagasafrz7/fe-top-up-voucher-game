import React from 'react'
import Image from 'next/image'
interface StepIcon {
    icon: 'step1' | 'step2' | 'step3';
    title: String;
    description1: String;
    description2: String;
}

export default function StepItem(props: StepIcon) {
    const { icon, title, description1, description2 } = props;
  return (
    <div className="col-lg-4">
        <div className="card feature-card border-0">
            <Image src={`/icon/${icon}.svg`} width={80} height={80} alt={'icon-step'} />
            <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
            <p className="text-lg color-palette-1 mb-0">
                {description1}
                <br />
                {description2}    
            </p>
        </div>
    </div>
  )
}
