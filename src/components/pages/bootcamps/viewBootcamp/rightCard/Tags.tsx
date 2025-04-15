import React from 'react'

const Tags = ({tags}:{tags:string[]}) => {
  return (
<div className='pt-2' style={{boxShadow: "0px 0px 40px rgba(29, 58, 83, 0.15)"}}>
    <div className='p-4'>
        <h3 className='font-bold text-2xl font-nunito'>Popular Tags</h3>
        <div className='mt-3 flex flex-wrap gap-3'>
          {
            tags.map((tag) => (
            <div key={tag} className='border bottom-1 w-fit px-4 text-[#747579] font-medium py-1 text-sm border-[#cfd3d7] rounded cursor-pointer'>
              {tag}
            </div>
           ))} 
        </div>
    </div>
</div>
  )
}

export default Tags