import React from 'react'

export default function Logo (props) {
    return (
        <div className="menu-logo" onClick={() => props.back()}>
            recursive.
        </div>
    )
}
