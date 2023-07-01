type Props = {
   params: { slug: string }
}

// export async function generateStaticParams() {
//    const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())

//    return posts.map((post: any) => ({
//       slug: post.id,
//    }))
// }

export default function Page({ params }: Props) {
   const { slug } = params
   console.log('slug :>> ', slug)
   return <div>My Post: {slug}</div>
}
