import { CartFrom } from "@/features/user/user";

export const productLists : CartFrom[] = [
    {
        pid: 1,
        pname: 'Brandix Angle Grinder KZX3890PQW',
        price: 649,
        img: '/product/product-13.jpg',
        status: true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.',
        related: [2,3,4,5]
    },
    {
        pid: 2,
        pname: 'Drill Screwdriver Brandix ALX7054 200 Watts',
        price: 850,
        img: '/product/category-1.jpg',
        status: false,
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam quam amet in minima exercitationem non harum illum, ab mollitia ducimus. Incidunt inventore delectus libero iste hic mollitia odit nihil. Nam!',
        related: [3,4,5,6]
    },
    {
        pid: 3,
        pname: 'Spanner Wrench',
        price: 19,
        img: '/product/product-9.jpg',
        status: true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.',
        related: [4,5,6,2]
    },
    {
        pid: 4,
        pname: 'Brandix Pliers',
        price: 24,
        img: '/product/product-7.jpg',
        status: true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.',
        related: [5,6,2,3]
    },
    {
        pid: 5,
        pname: 'Ash\'s Chainsaw 3.5kW',
        price: 666.99,
        img: '/product/product-12.jpg',
        status: true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.',
        related: [6,2,3,4]
    },
    {
        pid: 6,
        pname: 'Hand Tool Kit',
        price: 149,
        img: '/product/product-10.jpg',
        status: true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.',
        related: [2,3,4,5]
    },
    {
        pid: 7,
        pname: 'Brandix Air Compressor DELTAKX500',
        price: 1800,
        img: '/product/product-14.jpg',
        status: true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.',
        related: [2,3,4,5]
    },
]