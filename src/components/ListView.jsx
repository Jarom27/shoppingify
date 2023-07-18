import { Outlet } from 'react-router-dom';

export default function ListView() {
    return (
      <aside className='h-screen w-1/2 flex flex-col'>
          <Outlet></Outlet>
      </aside>
    )
}
