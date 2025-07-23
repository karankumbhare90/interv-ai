import { UserButton } from '@stackframe/stack'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AppHeader() {
    return (
        <div className='p-3 shadow-sm flex items-center justify-between'>
            <Link href={'/'}>
                <Image src={'/logo.svg'} alt='Logo' width={50} height={50} />
            </Link>
            <UserButton />
        </div>
    )
}
