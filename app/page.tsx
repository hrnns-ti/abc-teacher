
import Image from "next/image"
import { ArrowRight, ArrowDown, ArrowLeft, Headphones, Play } from "lucide-react"


export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#F7F7F5] gap-56 flex flex-col">
      {/* section 1 */}
      <section className="flex flex-col px-36 items-center gap-12">
        {/* slogan & desc & card  */}
        <div className="w-full pt-36 pb-16 gap-12 flex flex-col">
          <div className="flex flex-row gap-6 items-center justify-between">
            <h1 className="max-w-6xl text-5xl font-bold bg-amber-400 p-6 rounded-4xl rounded-br-none ">Improve your English level</h1>
            <p className="max-w-md text-xl">We have published more <span className="text-primary">than 650 episodes</span> of educational materials, every day more than <span className="text-primary">1.2k teachers work on our materials</span></p>
          </div>
          <div className="flex flex-row w-full justify-between">
            {/* blog */}
            <div className="flex flex-row gap-4 max-w-2xs h-fit rounded-3xl p-3 bg-primary-light">
              <Image
                src={'/image.png'}
                width={90}
                height={150}
                alt="image"
                className="rounded-2xl"
              />
              <div>
                <h1 className="font-semibold text-primary">Blog</h1>
                <p className="text-xs text-primary">More than 500 articles on educational topics</p>
                <div className="flex flex-row gap-4 items-center pt-4 hover:opacity-80 cursor-pointer">
                  <p className="text-primary font-semibold">View All</p>
                  <ArrowRight className="rounded-full bg-primary p-2 text-white size-8" scale={1.5}/>
                </div>
              </div>
            </div>

            {/* bubble */}
            <div className="flex flex-col gap-12 w-full h-56 text-center relative">
              <h1 className="max-w-2xl text-5xl object-right font-bold bg-accent-orange p-6 rounded-4xl rounded-bl-none absolute right-0 top-0">Train with Native speakers</h1>
              <h1 className="max-w-6xl text-5xl font-bold bg-accent-blue text-white p-6 rounded-4xl rounded-br-none absolute left-30 bottom-0">Get a license and teach</h1>
              <div className="flex flex-row p-8 rounded-3xl bg-primary-light justify-center items-center gap-2 absolute right-0 bottom-0">
                <p className="font-semibold">Let's Go</p>
                <ArrowRight className="rounded-full bg-primary p-2 text-white size-8" scale={2}/>
              </div>
            </div>
          </div>
        </div>
        {/* text */}
        <p className="max-w-2xl text-center font-semibold">Experience top-notch English language education with passionate teachers, interactive lessons, and modern facilities at our school. Empower your English skills for personal and professional success.</p>
        {/* get started */}
        <div className="w-md max-w-md bg-white rounded-full flex flex-row justify-between">
          <input type="email" name="Email" id="Email" placeholder="Your Email" className="px-12 py-2 ring-0 active:border-none outline-0"/>
          <a href="" className="bg-primary px-6 py-2 rounded-full text-white">Get Started</a>
        </div>
      </section>

      <section className="px-10 md:px-36 pb-24 gap-8 flex flex-col">
        {/* Label di luar card (opsional, menyesuaikan desain) */}
        <div className="flex justify-center">
          <div className="bg-[#D1BFFF] text-black text-4xl font-bold py-4 px-12 rounded-full rounded-br-none">
            Our Content
          </div>
        </div>

        {/* Main White Wrapper */}
        <div className="bg-white w-full rounded-[40px] p-4 md:p-12 flex flex-col gap-10">
          
          {/* 1. Top Navigation */}
          <div className="flex flex-row justify-between items-center border-b pb-4">
            <div className="flex gap-4">
              <button className="px-10 py-2 border border-primary text-primary rounded-full font-medium hover:bg-purple-50">Popular</button>
              <button className="p-3 bg-primary text-white rounded-full hover:bg-purple-800"><ArrowDown size={20} /></button>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <h3 className="font-bold text-lg">Podcasts</h3>
              <div className="flex gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#D1BFFF]"></span>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="p-3 bg-primary text-white rounded-full hover:bg-purple-800"><ArrowRight size={20} /></button>
              <button className="px-10 py-2 border border-primary text-primary rounded-full font-medium hover:bg-purple-50">Popular</button>
            </div>
          </div>

          {/* 2. Header Area */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Get Started your day with us
              </h2>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-primary text-3xl font-bold">01</span>
                <h3 className="text-3xl font-bold">Podcasts on any topic</h3>
              </div>
            </div>
            <p className="text-gray-600 max-w-md leading-relaxed">
              The <span className="font-semibold text-primary">school's mission</span> is to empower students with the language skills they need for personal and <span className="font-semibold text-primary">professional success.</span>
            </p>
          </div>

          {/* 3. Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Column 1: Standard Card */}
            <div className="flex flex-col gap-4 rounded-3xl p-4 bg-[#F7F7F5]">
              <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-gray-200">
                {/* Ganti src dengan path gambar yang sesuai */}
                <Image src="/image.png" alt="Podcast" fill className="object-cover" />
              </div>
              <div className="flex justify-between items-end mt-2">
                <h4 className="text-xl font-bold">Habit of Speaking</h4>
                <span className="text-sm text-gray-400">From Alan</span>
              </div>
              <p className="text-sm text-gray-600 line-clamp-3">
                The habitual use of descriptive language while speaking is commonly referred to as "descriptive speech." This communication...
              </p>
              <button className="mt-auto w-full py-3 border border-primary text-primary rounded-full font-semibold hover:bg-purple-50">
                Go to Podcast
              </button>
            </div>

            {/* Column 2: Purple Highlight Card */}
            <div className="bg-[#D1BFFF] rounded-3xl p-6 flex flex-col gap-4">
              <h4 className="text-2xl font-bold">Start your day</h4>
              <h4 className="text-2xl font-bold text-primary">With us</h4>
              
              <div className="bg-white rounded-full py-2 px-4 w-max flex items-center gap-3 mt-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden relative">
                   <Image src="/image.png" alt="Author" fill className="object-cover" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500">Author - Neil Olson</p>
                  <p className="font-bold text-sm">Run in English</p>
                </div>
              </div>

              {/* Waveform placeholder */}
              <div className="flex-1 flex items-center mt-6">
                 {/* Kamu bisa menggunakan SVG waveform atau library audio player nantinya */}
                 <div className="w-full h-12 bg-white/40 rounded flex items-center justify-center text-sm font-bold text-primary opacity-70">
                    [Waveform Visual]
                 </div>
              </div>

              <div className="flex justify-between items-end mt-4">
                <h5 className="font-bold text-lg">Run and Talk</h5>
                <span className="text-xs font-semibold">Audio Podcast</span>
              </div>
              <p className="text-sm text-gray-800 line-clamp-3">
                Running and talking simultaneously can be challenging, but with practice, it's possible to do both effectively. Here are some tips...
              </p>
              <button className="mt-auto w-full py-3 border border-primary text-primary rounded-full font-semibold hover:bg-white/50 transition-colors">
                Go to Podcast
              </button>
            </div>

            {/* Column 3: Stacked Cards */}
            <div className="flex flex-col gap-6">
              {/* Top Card */}
              <div className="bg-[#F7F7F5] rounded-3xl p-6 flex flex-col h-full">
                <h4 className="text-xl font-bold">The Lighthouse</h4>
                <h4 className="text-xl font-bold text-primary">Conversation</h4>
                <p className="text-sm text-gray-600 mt-4">
                  The group approached <span className="font-semibold text-primary">the lighthouse</span>, marveling at its beauty and history. As they climbed the winding staircase, <span className="font-semibold text-primary">they couldn't help</span> but feel a sense of awe and reverence.
                </p>
                <div className="mt-auto pt-6 flex justify-between items-center">
                  <span className="font-bold text-primary">Read More</span>
                  <button className="p-2 bg-primary text-white rounded-full hover:bg-purple-800"><ArrowRight size={20} /></button>
                </div>
              </div>

              {/* Bottom Card */}
              <div className="bg-[#F7F7F5] rounded-3xl p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 border border-primary text-primary rounded-full">
                    <Headphones size={24} />
                  </div>
                  <button className="p-2 bg-primary text-white rounded-full hover:bg-purple-800"><ArrowRight size={20} /></button>
                </div>
                <p className="text-sm text-gray-600">
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