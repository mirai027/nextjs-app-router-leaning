import Image from 'next/image'
import { Suspense } from 'react'
import Albums from './Albums'

interface PostsPagePageProps {}

type PostsType = {
  userId: number
  id: number
  title: string
  body: string
}[]

const sleep = () => {
  return new Promise((resolve) => setTimeout(resolve, 3000))
}

const getPostsData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  await sleep()
  return res.json()
}

const getDogData = async () => {
  const res = await fetch('https://dog.ceo/api/breeds/image/random')
  return res.json()
}

function Loading() {
  return <h2>🌀 Loading...</h2>
}

const PostsPagePage = async () => {
  const posts: PostsType = await getPostsData()
  const dog: { message: string } = await getDogData()

  return (
    <div>
      {/*<Image src={dog.message} alt="" width={100} height={100} />*/}
      <div className="grid grid-cols-4">
        <Suspense fallback={<Loading />}>
          <Albums artistId={'the-beatles'} delay={3} />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Albums artistId={'the-beatles'} delay={5} />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Albums artistId={'the-beatles'} delay={7} />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Albums artistId={'the-beatles'} delay={9} />
        </Suspense>
      </div>
    </div>
  )
}

export default PostsPagePage
