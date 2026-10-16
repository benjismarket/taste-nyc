import Image from 'next/image'
import { ExternalLink, MapPin } from 'lucide-react'
import { directionsUrl, type Restaurant } from '@/lib/restaurants'

const linkBase =
  'inline-flex flex-auto items-center justify-center gap-2 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold transition-colors'

export function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  const { name, category, description, address, website, image, imageAlt } = restaurant

  return (
    <article className="flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <figure className="relative aspect-[4/3]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <figcaption className="absolute bottom-2 right-2 rounded-full bg-foreground/80 px-2.5 py-1 text-xs font-medium text-background">
          AI-generated illustration
        </figcaption>
      </figure>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="w-fit rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
          {category}
        </span>
        <h3 className="font-serif text-2xl font-semibold leading-tight text-balance">{name}</h3>
        <p className="leading-relaxed text-muted-foreground">{description}</p>
        <p className="flex items-start gap-2 text-sm">
          <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          <span>
            <span className="sr-only">Address: </span>
            {address}
          </span>
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkBase} bg-primary text-primary-foreground hover:bg-primary/90`}
          >
            Visit website
            <ExternalLink className="size-4" aria-hidden="true" />
            <span className="sr-only">for {name} (opens in a new tab)</span>
          </a>
          <a
            href={directionsUrl(restaurant)}
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkBase} border border-primary text-primary hover:bg-accent`}
          >
            Get directions
            <MapPin className="size-4" aria-hidden="true" />
            <span className="sr-only">to {name} on Google Maps (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </article>
  )
}
