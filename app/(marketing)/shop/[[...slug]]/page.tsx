type Props = {
   params: { slug: string[] }
}

export default function Page({ params }: Props) {
   const { slug } = params
   console.log('slug :>> ', slug)
   return <div>My Shop: {slug}</div>
}
