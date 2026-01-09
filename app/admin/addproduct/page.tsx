import Anav from "../component/Anav";
import Side from "../component/Side";
import Addproducts from "../component/addproductc";


export default function Page() {
    return (
        <> <div>
                        <div className="flex ">
                            <Anav />
                        </div>
        
                        <div className="flex space-x-4">
                            <Side />
                            <Addproducts/>
                        </div>
        
        
                    </div>
        </>
    )
}