import What from "./What";

export default function Chiya() {
    return (
        <>
            <div className="flex flex-col items-center justify-evenly">
                <h1 className=" text-[64px]"><b>What</b> We Do</h1>

                <div className="flex justify-center items-center space-x-10 ">
                    <What name="Chiya Lounge" description="A modern tea bar insired by South Asian hositality,offering signature masala chai and single-origin Himalyan teas. The Louge,born from a book,fosters mindful rituals, conversation and now a " />
                    <What name="Premium Teas & Packaging" description="We carft first and second flush selections and soulful blends, presented in elegant, eco-considerate packaging. Every label carries origin stores and producer profiles, so each brew testes of places, season and care" />
                    <What name="Publishing:Book & Magazines" description="Our publishing wing-anchored by Ek Cup Chiyak-extends to magazines celebrating tea culture, farmer voices,wellnes,design, and the quiet art of living well." />

                </div>

            </div>
        </>
    )
}