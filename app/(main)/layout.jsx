import React from 'react'
import AppHeader from './_components/AppHeader'

export default function DashboardLayout({ children }) {
    return (
        <>
            <AppHeader />
            <div className="w-full container px-3 mt-10 md:px-0 mx-auto">
                {children}
            </div>
        </>
    )
}
