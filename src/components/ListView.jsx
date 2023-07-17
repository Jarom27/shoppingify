import { useContext } from 'react'
import ShoppingView from './ShoppingView'
import ListContext from '../context/ListContext';
import ItemForm from './ItemForm';
import { Outlet } from 'react-router-dom';

export default function ListView() {
    const {view} = useContext(ListContext);
    console.log(view)
    return (
      <aside className='h-screen w-1/2 flex flex-col'>
          <Outlet></Outlet>
      </aside>
    )
}
