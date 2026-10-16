'use client'

import { useState } from 'react'
import { categories, restaurants } from '@/lib/restaurants'
import { RestaurantCard } from '@/components/restaurant-card'

type Filter = (typeof categories)[number]

export function RestaurantGuide() {
  const [filter, setFilter] = useState<Filter>('All')
  const visible = filter === 'All' ? restaurants : restaurants.filter((r) => r.category === filter)

  return (
    <section id="restaurants" aria-labelledby="restaurants-heading" className="scroll-mt-20 px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 id="restaurants-heading" className="font-serif text-3xl font-semibold sm:text-4xl">
              The restaurants
            </h2>
            <p className="mt-2 text-muted-foreground">Filter by category to narrow your search.</p>
          </div>

          <div role="group" aria-label="Filter restaurants by category" className="flex flex-wrap gap-1.5 sm:gap-2">
            {categories.map((category) => {
              const active = filter === category
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(category)}
                  className={`whitespace-nowrap rounded-full border px-3 py-2 text-sm font-semibold transition-colors sm:px-4 ${
                    active
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border bg-card text-foreground hover:border-primary hover:text-primary'
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {visible.length} {visible.length === 1 ? 'restaurant' : 'restaurants'}
        </p>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((restaurant) => (
            <li key={restaurant.name} className="flex">
              <RestaurantCard restaurant={restaurant} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
