import Image from 'next/image';
import { assets } from "../../public/assets/assets";
export default function BentoBox() {
  return (
    <div id="bentofeatures" className="relative z-10 grid max-w-5xl mx-auto gap-4 grid-cols-3 auto-rows-auto w-full mt-24 bg-transparent mb-24 h-[640px]">

      {/* First row: 3 columns */}
      <div className="bg-blue-200 h-[320px] dark:bg-neutral-800 bg-opacity-50 rounded-2xl">
        <div className=""></div>
      </div>
      <div className="bg-blue-200 h-[320px] dark:bg-neutral-800 bg-opacity-50 rounded-2xl"></div>
      <div className="bg-blue-200 h-[320px] dark:bg-neutral-800 bg-opacity-50 rounded-2xl"></div>

      {/* Second row: 1 big column and 1 small column */}
      <div className="col-span-2 h-[360px] bg-blue-200 dark:bg-neutral-800 bg-opacity-50 rounded-2xl"></div>

      {/* social block */}
      <div className="bg-blue-200 dark:bg-transparent h-[360px] border bg-opacity-50 rounded-2xl p-4 ">

        <div className='flex flex-col  box-border border h-3/4 rounded-lg '>

          <div className='flex p-2 border h-1/3 items-center gap-5 m-2 rounded-md'>
            <Image className=' ml-2' src={assets.github_black} height={50} width={50} alt="code_icon" />
            <p className='text-2xl font-semibold'>Github</p>
          </div>
          
          <div className='flex p-2 border h-1/3 items-center gap-5 mx-2 rounded-md'>
            <Image className=' ml-2' src={assets.github_black} height={50} width={50} alt="code_icon" />
            <p className='text-2xl font-semibold'>Github</p>
          </div>
          <div className='flex p-2 border h-1/3 items-center gap-5  m-2 rounded-md'>
            <Image className=' ml-2' src={assets.github_black} height={50} width={50} alt="code_icon" />
            <p className='text-2xl font-semibold'>Github</p>
          </div>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          
        </div>
        <h1>Social Links</h1>
      </div>
    </div>
  );
}
