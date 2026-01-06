import { AccordionDemo } from "./AccordionDemo";



export default function Faq() {
    return (
        <>
        <div className="flex items-center">
            <div className="w-full  h-[836px] flex items-start justify-between space-x-20">
               

                <h1 className=" fonto-bold text-[56.31px]">FAQ</h1>
                
                <div className="w-[943px] h-[836.98px]">

                    <AccordionDemo></AccordionDemo>
                </div>
            </div>
            </div>
        </>
    )
}