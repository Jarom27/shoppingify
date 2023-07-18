import Advice from "./Advice"
import ShoppingList from "./ShoppingList"

export default function ShoppingView() {

    return (
        <>
            <div className='bg-sand h-full py-10'>
                <Advice></Advice>
                <ShoppingList></ShoppingList>
            </div>
            <div>
                
            </div>
        </>
    )
}
