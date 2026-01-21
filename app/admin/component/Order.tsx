
interface Props{
    pname:string;
    pprice:number;
    date:Date;
    paddress:string;
    pitems:number;
}

export default function Order(props:Props) {
    return (
        <>
          <div className="w-full border-b py-4">
  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

    {/* Product Info */}
    <div className="flex items-center gap-4">
      <img src="/cup.png" className="w-16 md:w-20" />

      <div className="flex flex-col">
        <h1 className="font-medium">{props.pname}</h1>
        <p className="text-sm text-gray-600">Items: {props.pitems}</p>
      </div>
    </div>

    {/* Address */}
    <div className="text-sm">
      <h1 className="font-medium">Address</h1>
      <p>{props.paddress}</p>
      <p>9744201315</p>
    </div>

    {/* Total */}
    <h1 className="font-medium text-center md:text-left">
      61
    </h1>

    {/* Payment Info */}
    <div className="text-sm">
      <p>Method: COD</p>
      <p>Date: {props.date.toLocaleDateString()}</p>
      <p className="font-medium">Payment: ${props.pprice}</p>
    </div>

  </div>
</div>

            
        </>
    )
}