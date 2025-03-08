import styles from '../css/infiniteCarousel.module.css';

const InfiniteCarouselCard = ({title, tags, desc, img, url}: {title: string, tags: string, desc: string, img: string, url: string}) => {
    
    return (
        <div className={`h-[100vh] md:w-[18vw] w-[100vw] relative ${styles.carouselCard}`}>
	    <img 
        className='h-full w-full'
        src={img} 
        role="presentation" />
        <div className={`${styles.defaultContent} absolute top-[50%] left-0 right-0 flex justify-center`}>
            <div className='text-white p-2 border-2 w-[80%] bg-black/20 text-center py-10'>
                <h1 className='text-2xl mb-10'>{title}</h1>
                <p className='text-sm text-cyan-600'>{tags}</p>
            </div>
        </div>
        <div className={`${styles.hoverContent} absolute top-[10%] left-0 right-0 flex flex-col justify-center items-center`}>
            <div className=' text-white p-2 w-[80%] bg-black/70 text-center py-10'>
                <h1 className='text-2xl mb-5'>{title}</h1>
                <p className='text-sm text-cyan-600 mb-5'>{tags}</p>
                <p className='text-sm text-white' style={{lineHeight: '20px'}}>{desc}</p>
            </div>
            <a className='text-white text-sm bg-cyan-600 p-2 mt-2' href={url}>Read More</a>   
        </div>
    </div>
    );

}

export default InfiniteCarouselCard;