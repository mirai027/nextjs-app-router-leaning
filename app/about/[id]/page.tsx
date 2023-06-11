'use client'

interface AboutWithIdPageProps {}

const AboutWithIdPage: React.FC<AboutWithIdPageProps> = ({ params }: any) => {
  return (
    <div>
      <h1>This is about page with ID: {params.id}</h1>
    </div>
  )
}

export default AboutWithIdPage
