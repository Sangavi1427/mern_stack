import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Author {
  name: string
  avatar: string
}

interface FeaturedArticleProps {
  title: string
  excerpt: string
  author: Author
  date: string
  readTime: string
  category: string
  image: string
}

export function FeaturedArticle({ title, excerpt, author, date, readTime, category, image }: FeaturedArticleProps) {
  return (
    <article className="group overflow-hidden rounded-lg border">
      <Link href="#" className="block">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          width={400}
          height={200}
        />
      </Link>
      <div className="p-4">
        <Badge className="mb-2">{category}</Badge>
        <Link href="#" className="group">
          <h3 className="mb-2 text-lg font-bold group-hover:underline">{title}</h3>
          <p className="mb-4 text-sm text-gray-500">{excerpt}</p>
        </Link>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={author.avatar || "/placeholder.svg"} alt={author.name} />
              <AvatarFallback>{author.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <span className="text-xs font-medium">{author.name}</span>
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <span>{date}</span>
                <span>·</span>
                <span>{readTime}</span>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="sm">
            Save
          </Button>
        </div>
      </div>
    </article>
  )
}
