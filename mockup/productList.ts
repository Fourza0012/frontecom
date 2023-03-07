export type productItem = {
    id: number,
    name: string,
    price: number,
    img: string,
    status: boolean,
    description?: string,
    related?: number[]
}
export const productLists : productItem[] = [
    {
        id: 1,
        name: 'Brandix Angle Grinder KZX3890PQW',
        price: 649,
        img: '/product/product-13.jpg',
        status: true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.',
        related: [2,3,4,5]
    },
    {
        id: 2,
        name: 'Drill Screwdriver Brandix ALX7054 200 Watts',
        price: 850,
        img: '/product/category-1.jpg',
        status: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.',
        related: [3,4,5,6]
    },
    {
        id: 3,
        name: 'Spanner Wrench',
        price: 19,
        img: '/product/product-9.jpg',
        status: true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.',
        related: [4,5,6,2]
    },
    {
        id: 4,
        name: 'Brandix Pliers',
        price: 24,
        img: '/product/product-7.jpg',
        status: true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.',
        related: [5,6,2,3]
    },
    {
        id: 5,
        name: 'Ash\'s Chainsaw 3.5kW',
        price: 666.99,
        img: '/product/product-12.jpg',
        status: true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.',
        related: [6,2,3,4]
    },
    {
        id: 6,
        name: 'Hand Tool Kit',
        price: 149,
        img: '/product/product-10.jpg',
        status: true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.',
        related: [2,3,4,5]
    },
    {
        id: 7,
        name: 'Brandix Air Compressor DELTAKX500',
        price: 1800,
        img: '/product/product-14.jpg',
        status: true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.',
        related: [2,3,4,5]
    },
]