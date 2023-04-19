import React from "react";

export const Header = () => {
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <a className='btn btn-ghost normal-case text-xl'>Spoonacular</a>
      </div>
      <div className='flex-none'>
        <button type='submit' className=' btn btn-ghost mr-2 normal-case'>
          Gluten Free
        </button>

        <button type='submit' className='btn  btn-ghost mr-2 normal-case '>
          Vegan
        </button>

        <button type='submit' className='btn btn-ghost mr-2 normal-case '>
          Vegeterian
        </button>
      </div>

      <div className='form-control'>
        <div className='input-group input-group-xs'>
          <input
            type='text'
            placeholder='Search…'
            className='input input-xs input-bordered input-bordered-xs'
          />
          <button className='btn btn-square btn-xs'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
