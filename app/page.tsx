import Link from "next/link"
import { BookmarkIcon, SearchIcon } from "lucide-react"

import { ArticleCard } from "@/components/article-card"
import { FeaturedArticle } from "@/components/featured-article"
import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center px-4 sm:px-8">
          <MainNav />
          <div className="ml-auto flex items-center space-x-4">
            <div className="hidden md:flex">
              <Button variant="ghost" size="icon">
                <SearchIcon className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
              <Button variant="ghost" size="icon">
                <BookmarkIcon className="h-5 w-5" />
                <span className="sr-only">Bookmarks</span>
              </Button>
            </div>
            <Separator orientation="vertical" className="hidden h-6 md:block" />
            <Button variant="ghost" className="hidden md:flex">
              Sign In
            </Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </header>
      <main className="container px-4 py-6 sm:px-8 md:py-10">
        <section className="mb-12">
          <div className="grid gap-6 md:grid-cols-2 lg:gap-10">
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Stay curious.</h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Discover stories, thinking, and expertise from writers on any topic.
              </p>
              <div>
                <Button className="rounded-full px-8" size="lg">
                  Start reading
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Hero"
                className="aspect-[4/3] rounded-lg object-cover"
                width={600}
                height={400}
              />
            </div>
          </div>
        </section>
        <section className="mb-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Featured Articles</h2>
            <Link href="/featured" className="text-sm font-medium text-gray-500 hover:text-gray-900">
              View all
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeaturedArticle
              title="The Future of Web Development: What's Next After React?"
              excerpt="Exploring emerging frameworks and technologies that might shape the future of frontend development."
              author={{
                name: "Sarah Johnson",
                avatar: "/placeholder.svg?height=40&width=40",
              }}
              date="May 4, 2023"
              readTime="8 min read"
              category="Technology"
              image="/placeholder.svg?height=200&width=400"
            />
            <FeaturedArticle
              title="How I Built a Profitable SaaS in 6 Months"
              excerpt="A journey from idea to profitable business with lessons learned along the way."
              author={{
                name: "Michael Chen",
                avatar: "/placeholder.svg?height=40&width=40",
              }}
              date="Apr 28, 2023"
              readTime="12 min read"
              category="Entrepreneurship"
              image="/placeholder.svg?height=200&width=400"
            />
            <FeaturedArticle
              title="The Psychology of Productivity: Why We Procrastinate"
              excerpt="Understanding the science behind procrastination and how to overcome it."
              author={{
                name: "Emily Rodriguez",
                avatar: "/placeholder.svg?height=40&width=40",
              }}
              date="Apr 22, 2023"
              readTime="6 min read"
              category="Psychology"
              image="/placeholder.svg?height=200&width=400"
            />
          </div>
        </section>
        <Separator className="my-8" />
        <section>
          <h2 className="mb-6 text-2xl font-bold">Recommended For You</h2>
          <div className="space-y-8">
            <ArticleCard
              title="10 VS Code Extensions Every Developer Should Use"
              excerpt="Boost your productivity with these essential extensions for Visual Studio Code."
              author={{
                name: "David Kim",
                avatar: "/placeholder.svg?height=40&width=40",
              }}
              date="May 2, 2023"
              readTime="5 min read"
              category="Development"
              image="/placeholder.svg?height=150&width=200"
            />
            <ArticleCard
              title="Understanding TypeScript Generics: A Comprehensive Guide"
              excerpt="Master one of TypeScript's most powerful features with practical examples."
              author={{
                name: "Lisa Wang",
                avatar: "/placeholder.svg?height=40&width=40",
              }}
              date="Apr 30, 2023"
              readTime="10 min read"
              category="Programming"
              image="/placeholder.svg?height=150&width=200"
            />
            <ArticleCard
              title="The Rise of AI in Content Creation: Opportunities and Challenges"
              excerpt="How artificial intelligence is transforming the way we create and consume content."
              author={{
                name: "James Wilson",
                avatar: "/placeholder.svg?height=40&width=40",
              }}
              date="Apr 25, 2023"
              readTime="7 min read"
              category="Artificial Intelligence"
              image="/placeholder.svg?height=150&width=200"
            />
            <ArticleCard
              title="Designing for Accessibility: Best Practices for Inclusive UX"
              excerpt="Creating digital experiences that work for everyone, regardless of ability."
              author={{
                name: "Priya Patel",
                avatar: "/placeholder.svg?height=40&width=40",
              }}
              date="Apr 20, 2023"
              readTime="9 min read"
              category="Design"
              image="/placeholder.svg?height=150&width=200"
            />
          </div>
        </section>
      </main>
      <footer className="border-t bg-gray-50 py-6">
        <div className="container px-4 sm:px-8">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase">About</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Membership
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Write
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase">Help</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase">Social</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>© 2023 Medium Clone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
