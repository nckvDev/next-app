import React from 'react'

type Props = {
   children: React.ReactNode
}

export default function DashboardLayout({ children }: Props) {
   return (
      <section style={{ display: 'flex' }}>
         <nav
            style={{ borderRight: '1px solid', width: 'max-content', height: 'calc(100vh - 4rem)' }}
         >
            <ul style={{ padding: '2rem', listStyle: 'none', display: 'grid', gap: '1rem' }}>
               <li>Dashboard</li>
               <li>Setting</li>
               <li>Analytic</li>
            </ul>
         </nav>

         <div className='content-dashboard' style={{ width: '100%', padding: '2.5rem' }}>
            {children}
         </div>
      </section>
   )
}
