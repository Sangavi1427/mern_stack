import Link from "next/link"

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <span className="inline-block font-bold">MEDIUM</span>
      </Link>
      <nav className="hidden gap-6 md:flex">
        <Link
          href="#"
          className="flex items-center text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
        >
          Our Story
        </Link>
        <Link
          href="#"
          className="flex items-center text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
        >
          Membership
        </Link>
        <Link
          href="#"
          className="flex items-center text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
        >
          Write
        </Link>
      </nav>
    </div>
  )
}
