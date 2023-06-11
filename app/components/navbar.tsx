import Link from 'next/link'

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div>
      <Link href="/" className="mr-4">
        Home
      </Link>
      <Link href="/about" className="mr-4">
        About
      </Link>
      <Link href="/about/us" className="mr-4">
        About Us
      </Link>
      <Link href="/about/someone" className="mr-4">
        About Someone Else
      </Link>
      <Link href="/posts">Posts</Link>
    </div>
  )
}

export default Navbar
