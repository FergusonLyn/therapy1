import React from 'react'

const Footer = () => {
  return (
    <>
            <div className='max-w-[1520px] m-auto px-4 py-2 bg-gray-950'>
              <div className='py-16 px-4 grid lg:grid-cols-3 gap-4 text-gray-300'>
                <div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium odio aperiam vero optio dolores ducimus voluptates sunt aspernatur doloremque officia.</p>
                </div>
                <div className='lg:col-span-2 flex justify-between'>
                  <div>
                    <ul>
                      <li className='py-2 text-sm'>About Us</li>
                      <li className='py-2 text-sm'>Services </li>
                      <li className='py-2 text-sm'>Blog </li>
                      <li className='py-2 text-sm'>Counselling</li>
                      <li className='py-2 text-sm'>Contact Us</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li className='py-2 text-sm'>FAQ</li>
                      <li className='py-2 text-sm'>Support </li>
                      <li className='py-2 text-sm'>User policy</li>
                      <li className='py-2 text-sm'>Belgium</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li className='py-2 text-sm'>Phone</li>
                      <li className='py-2 text-sm'>Email</li>
                      <li className='py-2 text-sm'>Location</li>
                      <li className='py-2 text-sm'>Social Media</li>
                    </ul>
                  </div>
                </div>
              </div> 
        </div>
      
    </>
  )
}

export default Footer
