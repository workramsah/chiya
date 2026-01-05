
export default function Backgroundimg(){
    return(
        <>
        <div className="relative w-full">
  {/* Background Image */}
  <img
    src="book/book.png"
    alt="About Ek Cup Chiya"
    className="w-full h-[857px] object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Text Content */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="max-w-4xl text-center text-white px-6 space-y-6">
      <h1 className="text-sm tracking-widest uppercase text-gray-300">
        About Us
      </h1>

      <h2 className="text-4xl md:text-5xl font-bold leading-tight">
        Ek Cup Chiya
        <span className="block text-xl md:text-2xl font-light mt-2">
          One Cup · One World
        </span>
      </h2>

      <p className="text-base md:text-lg text-gray-200 leading-relaxed">
        Born in Nepal and rooted in the Indian Northeast, Ek Cup Chiya is a
        private limited company with a simple, human promise: a cup of tea that
        carries culture, wellness, and dignity in every sip. More than a tea
        brand, we’re an invitation to pause, share, and belong. Through our
        Chiya Lounges, premium packaged teas, global e-commerce, and our books
        and magazines, we celebrate the everyday ritual that reconnects us to
        nature, to community, and to ourselves.
      </p>
    </div>
  </div>
</div>

        </>
    )
}