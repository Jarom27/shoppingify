import { useContext } from 'react'
import ShoppingView from './ShoppingView'
import ListContext from '../context/ListContext';
import ItemForm from './ItemForm';

export default function ListView() {
    const {view} = useContext(ListContext);
    console.log(view)
    return (
      <aside className='h-screen w-1/2 flex flex-col'>
          {view == "shopping" ? <ShoppingView></ShoppingView> : ""}
          {view == "item-form" ? <ItemForm></ItemForm> : ""}
      </aside>
    )
}
