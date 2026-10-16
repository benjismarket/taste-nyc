import { ArrowDown, UtensilsCrossed } from 'lucide-react'
import { RestaurantGuide } from '@/components/restaurant-guide'

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#main" className="font-serif text-xl font-semibold">
            Taste <span className="text-primary">NYC</span>
          </a>
          <ul className="flex gap-5 text-sm font-medium">
            <li>
              <a href="#restaurants" className="hover:text-primary">
                Restaurants
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-primary">
                About
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="main" tabIndex={-1} className="scroll-mt-20 focus:outline-none">
        <section aria-labelledby="hero-heading" className="px-4 py-20 sm:px-6 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              An independent food guide to New York City
            </p>
            <h1
              id="hero-heading"
              className="mt-4 font-serif text-5xl font-semibold leading-tight text-balance sm:text-6xl lg:text-7xl"
            >
              Discover your next great bite.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              Explore four New York food spots, from classic pizza and deli sandwiches to Chinese noodles and Jewish
              comfort food.
            </p>
            <a
              href="#restaurants"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Explore restaurants
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </div>
        </section>

        <RestaurantGuide />

        <section id="about" aria-labelledby="about-heading" className="scroll-mt-20 bg-accent px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-6xl rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm sm:p-10">
            <div className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <UtensilsCrossed className="size-5" aria-hidden="true" />
              </span>
              <h2 id="about-heading" className="font-serif text-2xl font-semibold sm:text-3xl">
                About this guide
              </h2>
            </div>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-pretty sm:text-lg">
              Taste NYC is a small, independent guide that helps visitors and residents discover a handful of local
              food spots across Manhattan. Each listing links straight to the restaurant&apos;s own website and to
              directions, so you can check the latest details and find your way there.
            </p>
            <hr className="my-6 border-border" />
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Note</p>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground text-pretty">
              We are not affiliated with any of the restaurants listed. Images are AI-generated illustrations and do
              not show food from these restaurants.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-4 py-8 text-center text-sm text-muted-foreground sm:px-6">
        Taste NYC — An independent food guide.
      </footer>
    </>
  )
}
