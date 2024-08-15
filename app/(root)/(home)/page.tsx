import MeetingTypeList from '@/components/MeetingTypeList';
import React from 'react'

const Home = () => {
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'});
  const date = (new Intl.DateTimeFormat('en-US', {dateStyle: 'full'})).format(now);

  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-color">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className='glassmorphism text-center rounded-md max-w-[270px] py-2 text-base font-normal'> Upcomin meeting at 5:10 pm</h2>
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl lg:text-7xl font-extrabold'>{time}</h1>
            <p className='text-lg lg:text-2xl font-medium text-sky-1'>{date}</p>
          </div>
        </div>
      </div>
      <MeetingTypeList/>
    </section>
  )
}

export default Home