export default function Journey() {
    return (
        <>
            <div className="w-full min-h-[857px] bg-[#D9D9D9] flex items-center">
                <div className="max-w-7xl mx-auto flex items-center gap-16 px-10">


                    <div className="max-w-xl space-y-8">
                        <div className="space-y-4">
                            <h1 className=" text-[64px] leading-tight text-[#575757]">
                                <span className="text-[#575757] font-bold">About</span> The Book <br />
                                Ek Cup Chiya – The Journey Of Tea
                            </h1>

                            <h2 className="text-[28px] text-[#575757]">
                                Ek Cup Chiya — One Cup, One World
                            </h2>
                        </div>

                        <p className="text-[18px] leading-relaxed text-[#575757]">
                            Part memoir, part cultural travelogue, and part craft guide, Ek Cup
                            Chiya explores how a humble cup becomes a bridge—between people,
                            places, and times. From mist-kissed gardens of Ilam and the Indian
                            Northeast to conversations at the Chiya Lounge, the book celebrates
                            farmer wisdom, mindful brewing, and the dignity of honest work.
                            You’ll find heritage stories, practical brew notes, and a gentle
                            philosophy of living well—one cup, shared generously.
                        </p>
                    </div>


                    <img
                        src="learn/journey.jpg"
                        alt="Ek Cup Chiya Journey"
                        className="w-[520px] h-[676px] object-cover"
                    />
                </div>
            </div>
        </>
    );
}
