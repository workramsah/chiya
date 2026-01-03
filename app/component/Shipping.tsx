
export default function Shipping(){
    return(
        <div className="flex items-center justify-center h-[300.96px] w-[1200px] ">
            <div>
                <h1 className="text-[43.85px]">Free shipping</h1>
                <h1 className="text-[43.85px]">over $50 order total*</h1>
                <h1 className="text-[24.5px]">Ekcup's offers over 100 teas in loose and tea bag format,
                    and everything you need to brew a fine cuppa.</h1>
                    
                <h1 className="text-[14px]">*Free shipping to the US available for orders $75+.</h1>

            </div>
            <div>
                <div className="flex space-x-3 items-center">
                    <img src="cup2.png" className="h-[61.24px]"></img>
                    <div>
                        <h1 className="text-[21.87px] font-bold">Love from Nepal</h1>
                        <h1 className="text-[17.5px]">Order online anytime,fast order <u className="text-[rgba(171,141,80,1)]">processing & shipping</u></h1>
                    </div>
                </div>
                <div className="flex space-x-3 items-center">
                    <img src="earth.png" className="h-[61.24px]"></img>
                    <div>
                        <h1 className="text-[21.87px] font-bold">International Orders</h1>
                        <h1 className="text-[17.5px]">Please<u className="text-[rgba(171,141,80,1)]">contact us</u> to arrange shipping your order</h1>
                    </div>
                </div>
                <div className="flex space-x-3 items-center">
                    <img src="home.png" className="h-[50.24px ]"></img>
                    <div>
                        <h1 className="text-[21.87px] font-bold">Love from Nepal</h1>
                        <h1 className="text-[17.5px] ">Visit our stores in Nepal:<u className="text-[rgba(171,141,80,1)]">view map</u></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}