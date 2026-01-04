export default function Imagetxt() {
  return (
    <div className="w-[1920] h-[728px] flex">
      
      <div className="flex flex-col items-center justify-center w-1/2 p-4">
        <h1 className="text-2xl font-bold mb-4">Our Story</h1>
        <p className="text-center">
          We're with you through every sip of the day. From bold beginnings to soothing sunsets, our fresh, small-batch teas are here to match every moment with authenticity and care. Embrace the fullness of life with us
        </p>
        <button className="border-2 px-4 py-1 my-3">Learn More</button>
      </div>

      
      <div className="w-1/2 h-full">
        <img
          src="home.jpg"
          alt="Home"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
