import Image from 'next/image'

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

const PostsPagePage = async () => {
  const posts: PostsType = await getPostsData()
  const dog: { message: string } = await getDogData()

  return (
    <div>
      <Image src={dog.message} alt="" width={100} height={100} />
      {posts.map((posts) => (
        <p key={posts.id}>{posts.title}</p>
      ))}
    </div>
  )
}

export default PostsPagePage
