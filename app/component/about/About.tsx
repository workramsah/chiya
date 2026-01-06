export default function About() {
  return (
    <>
      
      <div className="relative w-[1920px] h-[981px]">
        
       
        <img
          src="about/mount.jpg"
          className="w-full h-full object-cover"
          alt="Mountains"
        />

        
        <div className="absolute top-[127px] left-[338px] w-[657px] h-[124px] text-white">
          <h1 className="font-bold text-[50.6px]">About Ek Cup Chiya</h1>
          <h1 className="text-[50.6px]">A Cup of Tea, A World of Soul</h1>
        </div>

        
        <div className="absolute top-[346px] left-[360px] w-[373px] h-[528px] text-white">
          <h1>
            <span className="font-bold text-[50px]">Our</span>{" "}
            <span className="text-[50px]">Story</span>
          </h1>

          <div className="flex flex-col text-[20px] space-y-2">
            <p>
              In the Himalayan hills—where clouds meet cedar and dawn lingers over
              emerald slopes—tea is more than a beverage. It is belonging. Our
              journey began in the mist-kissed gardens of Ilam, Nepal, and the
              rolling estates of Darjeeling, where patient hands and mountain
              weather shape a leaf’s character.
            </p>

            <p>
              Every tea we offer is a story: handpicked at altitude, withered and
              rolled with care, and finished to reveal an honest cup. We honor
              time and craft, choosing slow, mindful processes that respect the
              land and the people who steward it.
            </p>
          </div>
        </div>

        
        <div className="absolute top-[346px] right-[637px] w-[373px] h-[316px] text-white">
          <h1 className="flex text-[50.6px] space-x-4">
            <span className="font-bold">Our</span>
            <span>philosophy</span>
          </h1>

          <ol className="flex flex-col text-[18px] space-y-2 mt-2">
            <li>
              Altitude Meets Attitude — purity of Himalayan height, matched by the
              pride of those who craft our tea.
            </li>
            <li>
              Gratitude in Every Sip — tea as a daily act of kindness and
              connection.
            </li>
            <li>
              Global Vision, Local Soul — carrying the Himalayas’ spirit to cups
              around the world.
            </li>
          </ol>
        </div>

      </div>
    </>
  );
}
