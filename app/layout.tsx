import { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
   title: 'news',
   icons: {
      icon: '/favicon.ico',
   },
   description: 'Generated by create next app',
}

type Props = {
   children: React.ReactNode
   team: React.ReactNode
   analytics: React.ReactNode
}

export default function RootLayout({ children, team, analytics }: Props) {
   return (
      <html lang='en'>
         <body className={inter.className}>
            <nav
               style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  height: '4rem',
                  borderTop: '1px solid',
                  borderBottom: '1px solid',
               }}
            >
               <div>Logo</div>
               <div>
                  <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem' }}>
                     <li>
                        <Link href='/'>home</Link>
                     </li>
                     <li>
                        <Link href='/about'> about</Link>
                     </li>
                     <li>
                        <Link href='/blog'>blog</Link>
                     </li>
                     <li>
                        <Link href='/dashboard'>dashboard</Link>
                     </li>
                     <li>
                        <Link href='/account'>account</Link>
                     </li>
                  </ul>
               </div>
               <div>
                  <ul style={{ listStyle: 'none' }}>
                     <li>
                        <Link href='/checkout'>checkout</Link>
                     </li>
                  </ul>
               </div>
            </nav>
            <div style={{ height: 'calc(100vh - 4rem)' }}>
               <div style={{ background: 'lightblue' }}>
                  {children}
                  {team}
                  {analytics}
               </div>
            </div>
         </body>
      </html>
   )
}
