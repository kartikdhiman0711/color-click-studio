import React from 'react';
import { Facebook, Twitter, Rss, Share2, Pointer } from 'lucide-react';

const imgs = [
    'https://img.freepik.com/free-photo/beautiful-collage-travel-concept_23-2149232169.jpg?t=st=1741422203~exp=1741425803~hmac=2c8fc11f8f15de818f3d1ee553b114058a3eb7285ffeb9af412ccd92bfb56ea7&w=740',
    'https://img.freepik.com/free-photo/beautiful-collage-travel-concept_23-2149232169.jpg?t=st=1741422203~exp=1741425803~hmac=2c8fc11f8f15de818f3d1ee553b114058a3eb7285ffeb9af412ccd92bfb56ea7&w=740',
    'https://img.freepik.com/free-photo/beautiful-collage-travel-concept_23-2149232169.jpg?t=st=1741422203~exp=1741425803~hmac=2c8fc11f8f15de818f3d1ee553b114058a3eb7285ffeb9af412ccd92bfb56ea7&w=740',
    'https://img.freepik.com/free-photo/beautiful-collage-travel-concept_23-2149232169.jpg?t=st=1741422203~exp=1741425803~hmac=2c8fc11f8f15de818f3d1ee553b114058a3eb7285ffeb9af412ccd92bfb56ea7&w=740',
    'https://img.freepik.com/free-photo/beautiful-collage-travel-concept_23-2149232169.jpg?t=st=1741422203~exp=1741425803~hmac=2c8fc11f8f15de818f3d1ee553b114058a3eb7285ffeb9af412ccd92bfb56ea7&w=740',
    'https://img.freepik.com/free-photo/beautiful-collage-travel-concept_23-2149232169.jpg?t=st=1741422203~exp=1741425803~hmac=2c8fc11f8f15de818f3d1ee553b114058a3eb7285ffeb9af412ccd92bfb56ea7&w=740',
]

function Post({params}: {params: {post: string}}) {
    let param: string = params.post;

    // [Todo:] Get the data using param and show here;

    return (
        <div className="relative min-h-screen p-4 sm:p-12 flex flex-col">
            <h1 className="text-[2.5rem] font-bold text-[#333] mb-16">SINGLE ITEM</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className='flex flex-col'>

                    <div className='flex justify-between'>
                        <div>
                            <h2 className=" text-[#666] mb-3">Pellentesque odio</h2>
                            <div className="text-[#999] mb-8">
                                <span>Interior, Landscape</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-[2.5rem] font-bold">23</span>
                            <span className="text-[2.5rem]">♡</span>
                        </div>
                    </div>

                    <div className="mb-8 flex justify-between">
                        <span className="text-[#666] mr-4">Share:</span>
                        <div className="inline-flex gap-4">
                            <Facebook className="w-5 h-5 text-[#666] hover:text-black cursor-pointer" />
                            <Twitter className="w-5 h-5 text-[#666] hover:text-black cursor-pointer" />
                            <Rss className="w-5 h-5 text-[#666] hover:text-black cursor-pointer" />
                            <Share2 className="w-5 h-5 text-[#666] hover:text-black cursor-pointer" />
                            <Pointer className="w-5 h-5 text-[#666] hover:text-black cursor-pointer" />
                        </div>
                    </div>

                </div>

                {/* Right Column */}
                <div className="text-[#999] space-y-6 text-sm leading-relaxed">
                    <p>
                        Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi.
                        Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh.
                        Nullam mollis. Ut justo. Suspendisse potenti.
                    </p>
                    <p>
                        Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.
                        Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor.
                        Sed semper lorem at felis.
                    </p>
                </div>

                {
                    imgs.map((img, index) => (
                        <div className='w-full h-[20rem]' key={index}>
                            <img src={img} alt="img" className="w-full h-full object-cover" />
                        </div>
                    ))
                }
            </div>

        </div>
    );
}

export default Post;