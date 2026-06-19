import Image from "next/image"
import { ArrowRight, ArrowDown, ArrowLeft, Headphones, Play } from "lucide-react"


export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#F7F7F5] gap-20 md:gap-36 lg:gap-56 flex flex-col">
      {/* section 1 */}
      <section className="flex flex-col px-4 sm:px-10 md:px-20 lg:px-36 items-center gap-8 md:gap-12">
        {/* slogan & desc & card  */}
        <div className="w-full pt-16 pb-8 md:pt-36 md:pb-16 gap-8 md:gap-12 flex flex-col">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            <h1 className="max-w-6xl text-3xl sm:text-4xl lg:text-5xl font-bold bg-amber-400 p-5 sm:p-6 rounded-3xl sm:rounded-4xl *:rounded-br-none leading-tight">
              Improve your English level
            </h1>
            <p className="max-w-md text-base sm:text-lg lg:text-xl text-gray-700">
              We have published more <span className="text-primary font-semibold">than 650 episodes</span> of educational materials, every day more than <span className="text-primary font-semibold">1.2k teachers work on our materials</span>
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 w-full justify-between items-start">
            {/* blog */}
            <div className="flex flex-row gap-4 w-full md:max-w-xs xl:max-w-2xs h-fit rounded-3xl p-3 bg-primary-light shrink-0">
              <Image
                src={'/image.png'}
                width={90}
                height={150}
                alt="image"
                className="rounded-2xl object-cover"
              />
              <div className="flex flex-col justify-between py-1">
                <div>
                  <h1 className="font-semibold text-primary text-sm sm:text-base">Blog</h1>
                  <p className="text-xs text-primary/80 mt-1">More than 500 articles on educational topics</p>
                </div>
                <div className="flex flex-row gap-2 items-center pt-3 hover:opacity-80 cursor-pointer">
                  <p className="text-primary font-semibold text-sm">View All</p>
                  <ArrowRight className="rounded-full bg-primary p-2 text-white size-8" />
                </div>
              </div>
            </div>

            {/* bubble grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-y-6 w-full">
              {/* Train with Native speakers */}
              <h1 className="md:col-span-9 md:col-start-4 lg:col-span-8 lg:col-start-5 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-accent-orange p-5 sm:p-6 rounded-3xl md:rounded-4xl rounded-bl-none text-left md:text-right justify-self-end w-fit">
                Train with Native speakers
              </h1>
              {/* Get a license and teach */}
              <h1 className="md:col-span-9 md:col-start-1 md:row-start-2 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold bg-accent-blue text-white p-5 sm:p-6 rounded-3xl md:rounded-4xl rounded-br-none justify-self-start w-fit">
                Get a license and teach
              </h1>
              {/* Let's Go */}
              <div className="md:col-span-3 md:col-start-10 md:row-start-2 flex flex-row p-4 md:p-6 lg:p-8 rounded-3xl bg-primary-light justify-center items-center gap-2 justify-self-end self-end w-full md:w-fit hover:opacity-90 cursor-pointer transition-opacity">
                <p className="font-semibold text-primary">Let's Go</p>
                <ArrowRight className="rounded-full bg-primary p-2 text-white size-8" />
              </div>
            </div>
          </div>
        </div>
        {/* text */}
        <p className="max-w-2xl text-center font-semibold text-sm sm:text-base md:text-lg text-gray-700">
          Experience top-notch English language education with passionate teachers, interactive lessons, and modern facilities at our school. Empower your English skills for personal and professional success.
        </p>
        {/* get started */}
        <div className="w-full max-w-md bg-white rounded-full flex flex-row justify-between p-1.5 border border-gray-200 shadow-sm">
          <input 
            type="email" 
            name="Email" 
            id="Email" 
            placeholder="Your Email" 
            className="px-4 sm:px-6 py-2 bg-transparent ring-0 outline-0 flex-1 min-w-0 text-sm sm:text-base text-gray-800"
          />
          <a href="#" className="bg-primary px-5 sm:px-6 py-2 rounded-full text-white font-medium text-sm sm:text-base hover:bg-opacity-90 transition-all shrink-0">
            Get Started
          </a>
        </div>
      </section>

      <section className="px-4 sm:px-10 md:px-20 lg:px-36 pb-16 md:pb-24 gap-8 flex flex-col">
        {/* Label di luar card */}
        <div className="flex justify-center">
          <div className="bg-[#D1BFFF] text-black text-2xl sm:text-3xl md:text-4xl font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-full rounded-br-none shadow-sm">
            Our Content
          </div>
        </div>

        {/* Main White Wrapper */}
        <div className="bg-white w-full rounded-3xl md:rounded-[40px] p-6 md:p-12 flex flex-col gap-8 md:gap-10 border border-gray-100 shadow-sm">
          
          {/* 1. Top Navigation */}
          <div className="flex flex-row justify-between items-center border-b border-gray-150 pb-4 gap-2 sm:gap-4">
            <div className="flex gap-2 sm:gap-4">
              <button className="px-4 sm:px-10 py-2 border border-primary text-primary rounded-full font-medium text-xs sm:text-sm md:text-base hover:bg-purple-50 transition-colors">Popular</button>
              <button className="p-2 sm:p-3 bg-primary text-white rounded-full hover:bg-purple-800 transition-colors shrink-0"><ArrowDown size={16} className="sm:hidden" /><ArrowDown size={20} className="hidden sm:block" /></button>
            </div>
            
            <div className="flex flex-col items-center gap-1 sm:gap-2">
              <h3 className="font-bold text-sm sm:text-base md:text-lg text-gray-800">Podcasts</h3>
              <div className="flex gap-1.5 sm:gap-2">
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-primary"></span>
                <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#D1BFFF]"></span>
              </div>
            </div>

            <div className="flex gap-2 sm:gap-4">
              <button className="p-2 sm:p-3 bg-primary text-white rounded-full hover:bg-purple-800 transition-colors shrink-0"><ArrowRight size={16} className="sm:hidden" /><ArrowRight size={20} className="hidden sm:block" /></button>
              <button className="px-4 sm:px-10 py-2 border border-primary text-primary rounded-full font-medium text-xs sm:text-sm md:text-base hover:bg-purple-50 transition-colors">Popular</button>
            </div>
          </div>

          {/* 2. Header Area */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-start md:items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-950">
                Get Started your day with us
              </h2>
              <div className="flex items-center gap-3 mt-2 sm:mt-3">
                <span className="text-primary text-2xl sm:text-3xl font-bold">01</span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">Podcasts on any topic</h3>
              </div>
            </div>
            <p className="text-gray-600 text-sm sm:text-base max-w-md leading-relaxed">
              The <span className="font-semibold text-primary">school's mission</span> is to empower students with the language skills they need for personal and <span className="font-semibold text-primary">professional success.</span>
            </p>
          </div>

          {/* 3. Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Column 1: Standard Card */}
            <div className="flex flex-col gap-4 rounded-3xl p-4 bg-[#F7F7F5] border border-gray-200/50 hover:shadow-md transition-all duration-300">
              <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-gray-200">
                <Image src="/image.png" alt="Podcast" fill className="object-cover" />
              </div>
              <div className="flex justify-between items-end mt-2">
                <h4 className="text-lg sm:text-xl font-bold text-gray-800">Habit of Speaking</h4>
                <span className="text-xs sm:text-sm text-gray-400">From Alan</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed">
                The habitual use of descriptive language while speaking is commonly referred to as "descriptive speech." This communication...
              </p>
              <button className="mt-auto w-full py-2.5 sm:py-3 border border-primary text-primary rounded-full font-semibold hover:bg-purple-50 transition-all">
                Go to Podcast
              </button>
            </div>

            {/* Column 2: Purple Highlight Card */}
            <div className="bg-[#D1BFFF] rounded-3xl p-6 flex flex-col gap-4 hover:shadow-md transition-all duration-300">
              <div>
                <h4 className="text-2xl font-bold text-gray-900">Start your day</h4>
                <h4 className="text-2xl font-bold text-primary">With us</h4>
              </div>
              
              <div className="bg-white rounded-full py-1.5 px-3 w-max flex items-center gap-2.5 shadow-sm mt-1">
                <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden relative shrink-0">
                   <Image src="/image.png" alt="Author" fill className="object-cover" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-medium">Author - Neil Olson</p>
                  <p className="font-bold text-xs sm:text-sm text-gray-800">Run in English</p>
                </div>
              </div>

              {/* Animated Waveform Visualizer */}
              <div className="flex-1 flex items-center justify-center my-4">
                 <div className="w-full h-12 bg-white/30 rounded-2xl flex items-center justify-between px-6 gap-1.5">
                   <span className="h-4 w-1 bg-primary rounded-full animate-pulse [animation-delay:0.2s]"></span>
                   <span className="h-8 w-1 bg-primary rounded-full animate-pulse [animation-delay:0.4s]"></span>
                   <span className="h-10 w-1 bg-primary rounded-full animate-pulse [animation-delay:0.1s]"></span>
                   <span className="h-6 w-1 bg-primary rounded-full animate-pulse [animation-delay:0.3s]"></span>
                   <span className="h-8 w-1 bg-primary rounded-full animate-pulse [animation-delay:0.5s]"></span>
                   <span className="h-9 w-1 bg-primary rounded-full animate-pulse [animation-delay:0.2s]"></span>
                   <span className="h-5 w-1 bg-primary rounded-full animate-pulse [animation-delay:0.4s]"></span>
                   <span className="h-7 w-1 bg-primary rounded-full animate-pulse [animation-delay:0.1s]"></span>
                   <span className="h-9 w-1 bg-primary rounded-full animate-pulse [animation-delay:0.3s]"></span>
                   <span className="h-6 w-1 bg-primary rounded-full animate-pulse [animation-delay:0.5s]"></span>
                   <span className="h-8 w-1 bg-primary rounded-full animate-pulse [animation-delay:0.2s]"></span>
                   <span className="h-4 w-1 bg-primary rounded-full animate-pulse [animation-delay:0.4s]"></span>
                   <span className="h-7 w-1 bg-primary rounded-full animate-pulse [animation-delay:0.1s]"></span>
                   <span className="h-9 w-1 bg-primary rounded-full animate-pulse [animation-delay:0.3s]"></span>
                   <span className="h-5 w-1 bg-primary rounded-full animate-pulse [animation-delay:0.5s]"></span>
                 </div>
              </div>

              <div>
                <div className="flex justify-between items-end">
                  <h5 className="font-bold text-lg text-gray-900">Run and Talk</h5>
                  <span className="text-[10px] sm:text-xs font-semibold bg-white/40 text-primary px-2 py-0.5 rounded-full">Audio Podcast</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-800 mt-2 line-clamp-3 leading-relaxed">
                  Running and talking simultaneously can be challenging, but with practice, it's possible to do both effectively. Here are some tips...
                </p>
              </div>
              
              <button className="mt-auto w-full py-2.5 sm:py-3 border border-primary text-primary rounded-full font-semibold bg-white/30 hover:bg-white/65 transition-colors">
                Go to Podcast
              </button>
            </div>

            {/* Column 3: Stacked Cards */}
            <div className="flex flex-col md:flex-row lg:flex-col gap-6 md:col-span-2 lg:col-span-1">
              {/* Top Card */}
              <div className="bg-[#F7F7F5] rounded-3xl p-6 flex flex-col justify-between flex-1 border border-gray-200/50 hover:shadow-md transition-all duration-300">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-800">The Lighthouse</h4>
                  <h4 className="text-lg sm:text-xl font-bold text-primary">Conversation</h4>
                  <p className="text-xs sm:text-sm text-gray-600 mt-4 leading-relaxed">
                    The group approached <span className="font-semibold text-primary">the lighthouse</span>, marveling at its beauty and history. As they climbed the winding staircase, <span className="font-semibold text-primary">they couldn't help</span> but feel a sense of awe and reverence.
                  </p>
                </div>
                <div className="pt-6 flex justify-between items-center mt-auto">
                  <span className="font-bold text-primary text-sm sm:text-base cursor-pointer hover:opacity-85">Read More</span>
                  <button className="p-2 bg-primary text-white rounded-full hover:bg-purple-800 transition-colors"><ArrowRight size={20} /></button>
                </div>
              </div>

              {/* Bottom Card */}
              <div className="bg-[#F7F7F5] rounded-3xl p-6 flex flex-col justify-between flex-1 border border-gray-200/50 hover:shadow-md transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 border border-primary text-primary rounded-full">
                    <Headphones size={24} />
                  </div>
                  <button className="p-2 bg-primary text-white rounded-full hover:bg-purple-800 transition-colors"><ArrowRight size={20} /></button>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Our podcasts can inspire you not only to <span className="font-semibold text-primary">speak English</span> every day but <span className="font-semibold text-primary">also to think</span> in it.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}