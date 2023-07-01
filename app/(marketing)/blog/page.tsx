import Link from 'next/link'

type Props = {}

const Blog = (props: Props) => {
   const blogLists = [
      {
         slug: '1',
         name: 'blog a',
      },
      {
         slug: '2',
         name: 'blog b',
      },
      {
         slug: '3',
         name: 'blog c',
      },
   ]

   return (
      <div
         style={{
            border: '1px solid',
            borderRadius: '0.75rem',
            marginTop: '0.75rem',
            padding: '1rem',
         }}
      >
         <h1 style={{ marginBottom: '0.75rem' }}>Blog Page!</h1>
         <div style={{}}>
            <ul
               style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexGrow: '1',
                  justifyContent: 'space-between',
                  gap: '1rem',
               }}
            >
               {blogLists.map((list, index) => (
                  <li
                     key={index}
                     style={{
                        border: '1px solid',
                        flexGrow: '1',
                        borderRadius: '0.5rem',
                        height: '6rem',
                        display: 'grid',
                        placeContent: 'center',
                     }}
                  >
                     <Link href={`/blog/${list.slug}`}>{list.name}</Link>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   )
}

export default Blog
