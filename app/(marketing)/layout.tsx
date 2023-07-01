import React from 'react'

type Props = {
   children: React.ReactNode
}

export default function MarketingLayout({ children }: Props) {
   return (
      <section style={{ padding: '2rem' }}>
         <nav>Marketing menu</nav>
         {children}
      </section>
   )
}
