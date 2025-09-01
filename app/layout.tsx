import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'


export const metadata: Metadata = {
title: 'My Casino',
description: 'Personal casino-style site (inspired by Nova)'
}


export default function RootLayout({ children }: { children: ReactNode }) {
return (
<html lang="en">
<body style={{margin:0}}>{children}</body>
</html>
)
}
