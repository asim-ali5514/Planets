import React from 'react'

interface Props {
    title : string,
    color : string,
}

export const MobButtons:React.FC<Props> = ({title, color}) => {
    return (
        <div>
            <h1>button</h1>
        </div>
    )
}
