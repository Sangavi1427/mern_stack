import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Author {
  name: string
  avatar: string
}

interface ArticleCardProps {
  title: string
  excerpt: string
  author: Author
  date: string
  readTime: string
  category: string
  image: string
}

export function ArticleCard({ title, excerpt, author, date, readTime, category, image }: ArticleCardProps) {
  return (
    <article className="grid grid-cols-1 gap-4 md:grid-cols-4">
      <div className="col-span-3 space-y-3">
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={author.avatar || "/placeholder.svg"} alt={author.name} />
            <AvatarFallback>{author.name[0]}</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">{author.name}</span>
          <span className="text-sm text-gray-500">·</span>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <Link href="#" className="group">
          <h3 className="text-xl font-bold group-hover:underline">{title}</h3>
          <p className="mt-2 text-gray-500">{excerpt}</p>
        </Link>
        <div className="flex items-center gap-3">
          <Badge variant="secondary">{category}</Badge>
          <span className="text-sm text-gray-500">{readTime}</span>
          <Button variant="ghost" size="sm" className="ml-auto">
            Save
          </Button>
        </div>
      </div>
      <div className="order-first md:order-last">
        <Link href="#">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="aspect-square rounded-md object-cover"
            width={100}
            height={100}
          />
        </Link>
      </div>
    </article>
  )
}
