import React from 'react'

export default function Layout({ children, className }) {
    return (
        <div className={`${className}`}>
            {children}
        </div>
    )
}
