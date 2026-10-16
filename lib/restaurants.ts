export const categories = ['All', 'Deli', 'Pizza', 'Chinese', 'Café'] as const

export type Category = Exclude<(typeof categories)[number], 'All'>

export type Restaurant = {
  name: string
  category: Category
  description: string
  address: string
  website: string
  image: string
  imageAlt: string
}

export const restaurants: Restaurant[] = [
  {
    name: 'Katz’s Delicatessen',
    category: 'Deli',
    description: 'A traditional New York deli serving sandwiches and classic deli food.',
    address: '205 East Houston Street, New York, NY',
    website: 'https://katzsdelicatessen.com',
    image: '/images/deli.png',
    imageAlt: 'A double-decker pastrami sandwich on seeded rye with melted cheese and grainy mustard, served with two pickles',
  },
  {
    name: 'Joe’s Pizza',
    category: 'Pizza',
    description: 'Classic New York pizza by the slice in Greenwich Village.',
    address: '7 Carmine Street, New York, NY',
    website: 'https://www.joespizzanyc.com',
    image: '/images/pizza.png',
    imageAlt: 'A thin-crust New York style cheese pizza slice on a paper plate',
  },
  {
    name: 'Xi’an Famous Foods',
    category: 'Chinese',
    description: 'Hand-pulled noodles and bold, spicy flavors inspired by Xi’an.',
    address: '45 Bayard Street, New York, NY',
    website: 'https://www.xianfoods.com',
    image: '/images/noodles.png',
    imageAlt: 'A bowl of wide hand-pulled noodles with chili oil, spiced meat and scallions',
  },
  {
    name: 'Russ & Daughters Cafe',
    category: 'Café',
    description: 'A sit-down café celebrating Jewish comfort food.',
    address: '127 Orchard Street, New York, NY',
    website: 'https://www.russanddaughterscafe.com',
    image: '/images/cafe.png',
    imageAlt: 'A bagel topped with cream cheese, smoked salmon, capers and red onion beside a coffee',
  },
]

export function directionsUrl({ name, address }: Restaurant) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name}, ${address}`)}`
}
