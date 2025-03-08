'use client'
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import InfiniteCarouselCard from './infiniteCarousel/Card';

const handleDragStart = (e: any) => e.preventDefault();

const data = [
    {
        title: 'Color Click Studio',
        tags: 'Potrait, LifeStyle',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, praesentium? Expedita nam eum magnam, velit ea culpa ex dolorum possimus, corrupti eos nostrum ipsa dolor. Doloribus reiciendis non doloremque iusto?',
        img: 'https://img.freepik.com/free-photo/beautiful-collage-travel-concept_23-2149232169.jpg?t=st=1741422203~exp=1741425803~hmac=2c8fc11f8f15de818f3d1ee553b114058a3eb7285ffeb9af412ccd92bfb56ea7&w=740',
        url: '#',
    },
    {
        title: 'Color Click Studio 1',
        tags: 'Potrait, LifeStyle',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, praesentium? Expedita nam eum magnam, velit ea culpa ex dolorum possimus, corrupti eos nostrum ipsa dolor. Doloribus reiciendis non doloremque iusto?',
        img: 'https://img.freepik.com/free-vector/empty-railway-commuter_33099-2167.jpg?t=st=1741422262~exp=1741425862~hmac=f0e1bb0007af55531f96a9d0c2ecfe24c187ea59c35f585cc885ab8448c538bc&w=1800',
        url: '#',
    },
    {
        title: 'Color Click Studio 2',
        tags: 'Potrait, LifeStyle',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, praesentium? Expedita nam eum magnam, velit ea culpa ex dolorum possimus, corrupti eos nostrum ipsa dolor. Doloribus reiciendis non doloremque iusto?',
        img: 'https://img.freepik.com/free-vector/train-cockpit-with-control-panel-armchair_33099-2239.jpg?t=st=1741422282~exp=1741425882~hmac=bd8957c434aa829b7f5d9b8f05b166164a36e324695e10e1ff996020c81383f3&w=2000',
        url: '#',
    },
    {
        title: 'Color Click Studio 3',
        tags: 'Potrait, LifeStyle',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, praesentium? Expedita nam eum magnam, velit ea culpa ex dolorum possimus, corrupti eos nostrum ipsa dolor. Doloribus reiciendis non doloremque iusto?',
        img: 'https://img.freepik.com/free-photo/beautiful-collage-travel-concept_23-2149232169.jpg?t=st=1741422203~exp=1741425803~hmac=2c8fc11f8f15de818f3d1ee553b114058a3eb7285ffeb9af412ccd92bfb56ea7&w=740',
        url: '#',
    },
    {
        title: 'Color Click Studio',
        tags: 'Potrait, LifeStyle',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, praesentium? Expedita nam eum magnam, velit ea culpa ex dolorum possimus, corrupti eos nostrum ipsa dolor. Doloribus reiciendis non doloremque iusto?',
        img: 'https://img.freepik.com/free-vector/empty-railway-commuter_33099-2167.jpg?t=st=1741422262~exp=1741425862~hmac=f0e1bb0007af55531f96a9d0c2ecfe24c187ea59c35f585cc885ab8448c538bc&w=1800',
        url: '#',
    },
    {
        title: 'Color Click Studio',
        tags: 'Potrait, LifeStyle',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, praesentium? Expedita nam eum magnam, velit ea culpa ex dolorum possimus, corrupti eos nostrum ipsa dolor. Doloribus reiciendis non doloremque iusto?',
        img: 'https://img.freepik.com/free-vector/train-cockpit-with-control-panel-armchair_33099-2239.jpg?t=st=1741422282~exp=1741425882~hmac=bd8957c434aa829b7f5d9b8f05b166164a36e324695e10e1ff996020c81383f3&w=2000',
        url: '#',
    },
]

const items = [
    ...data.map((item, index) => {
        return (InfiniteCarouselCard(item))
    })
];

const InfiniteCarousel = () => {
    return (
    <AliceCarousel 
    mouseTracking 
    items={items} 
    autoPlay={true} 
    infinite={true} 
    autoPlayInterval={3000}
    disableButtonsControls={true}
    disableDotsControls={true}
    autoHeight={true}
    autoWidth={true}
    />
    )
}

export default InfiniteCarousel;