import Navbar from '../components/navbar'

interface layoutPageProps {
  children: React.ReactNode
}

const getDogData = async () => {
  const res = await fetch('https://dog.ceo/api/breeds/image/random')
  return res.json()
}

const layoutPage: ({
  children,
}: layoutPageProps) => Promise<React.ReactNode> = async ({ children }) => {
  const dog: { message: string } = await getDogData()

  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default layoutPage
