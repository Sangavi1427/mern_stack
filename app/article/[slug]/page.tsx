import Link from "next/link"
import { ArrowLeft, Bookmark, MoreHorizontal, Share2, ThumbsUp } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold">MEDIUM</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 md:px-8 md:py-12">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="mb-6 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
          <article>
            <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
              The Future of Web Development: What's Next After React?
            </h1>
            <div className="mb-6 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Sarah Johnson" />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">Sarah Johnson</div>
                  <div className="text-sm text-gray-500">May 4, 2023 · 8 min read</div>
                </div>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Share2 className="h-5 w-5" />
                  <span className="sr-only">Share</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <Bookmark className="h-5 w-5" />
                  <span className="sr-only">Bookmark</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-5 w-5" />
                  <span className="sr-only">More</span>
                </Button>
              </div>
            </div>
            <div className="mb-8">
              <img
                src="/placeholder.svg?height=400&width=800"
                alt="Article hero"
                className="aspect-[2/1] w-full rounded-lg object-cover"
                width={800}
                height={400}
              />
            </div>
            <div className="prose prose-lg max-w-none">
              <p>
                React has dominated the frontend landscape for years, but the web development ecosystem is constantly
                evolving. As we look toward the future, several emerging technologies and approaches are challenging
                React's dominance and offering new ways to build web applications.
              </p>
              <h2>The Rise of Compiler-Based Frameworks</h2>
              <p>
                One of the most significant trends is the shift toward compiler-based frameworks that prioritize
                performance and developer experience. These frameworks leverage build-time optimizations to deliver
                smaller bundles and faster runtime performance.
              </p>
              <p>
                Svelte, pioneered by Rich Harris, takes a radical approach by shifting much of the work to compile time
                rather than runtime. This results in highly optimized JavaScript that updates the DOM directly, without
                the need for a virtual DOM.
              </p>
              <p>
                Similarly, Solid.js offers React-like primitives but compiles components into efficient DOM operations,
                resulting in impressive performance benchmarks while maintaining a familiar developer experience.
              </p>
              <h2>Server-First Approaches</h2>
              <p>
                Another major trend is the return to server-centric architectures, but with modern twists. Next.js has
                been leading this charge with its App Router and React Server Components, allowing developers to render
                components on the server for improved performance and SEO.
              </p>
              <p>
                Frameworks like Remix take this further by embracing web fundamentals and progressive enhancement. They
                prioritize HTTP caching, server rendering, and resilient user experiences that work even when JavaScript
                fails.
              </p>
              <h2>WebAssembly and Beyond</h2>
              <p>
                WebAssembly (Wasm) continues to mature, offering near-native performance for web applications.
                Frameworks like Blazor allow developers to build web UIs using C# and .NET, compiled to WebAssembly for
                client-side execution.
              </p>
              <p>
                As WebAssembly gains features like garbage collection and direct DOM access, we can expect more
                languages and frameworks to target the web platform, potentially reshaping how we think about frontend
                development.
              </p>
              <h2>Conclusion</h2>
              <p>
                While React isn't going anywhere soon, the frontend landscape is diversifying in exciting ways. The
                future of web development likely involves a mix of these approaches, with developers choosing the right
                tool based on their specific requirements rather than defaulting to a single framework.
              </p>
              <p>
                Whether you're excited about compiler-based optimizations, server-first architectures, or the potential
                of WebAssembly, it's an exciting time to be a web developer with more powerful tools than ever at our
                disposal.
              </p>
            </div>
          </article>
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="rounded-full">
                <ThumbsUp className="mr-2 h-4 w-4" />
                2.4K
              </Button>
              <Badge variant="secondary">Technology</Badge>
              <Badge variant="secondary">Web Development</Badge>
              <Badge variant="secondary">JavaScript</Badge>
            </div>
            <Button variant="ghost" size="sm">
              <Bookmark className="mr-2 h-4 w-4" />
              Save
            </Button>
          </div>
          <Separator className="my-8" />
          <div className="rounded-lg bg-gray-50 p-6">
            <div className="mb-4 flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Sarah Johnson" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">Written by Sarah Johnson</div>
                <div className="text-sm text-gray-500">Frontend Developer and Tech Writer</div>
              </div>
              <Button className="ml-auto">Follow</Button>
            </div>
            <p className="text-gray-600">
              Sarah writes about frontend development, emerging technologies, and developer productivity. She has over 8
              years of experience building web applications and is passionate about sharing knowledge with the
              community.
            </p>
          </div>
        </div>
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
