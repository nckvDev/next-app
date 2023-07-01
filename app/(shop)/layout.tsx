import React from 'react'

type Props = {
   children: React.ReactNode
}

export default function ShopLayout({ children }: Props) {
   return (
      <section>
         <nav>Shop menu</nav>
         {children}
      </section>
   )
}
