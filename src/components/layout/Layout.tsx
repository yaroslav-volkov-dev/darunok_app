import clsx from 'clsx';
import { Outlet } from 'react-router-dom';
import { NavigationBar } from '../navigationBar';
import { Sidebar } from '../sidebar';

export const Layout = () => {
  return (
    <div className="flex">
      <NavigationBar />
      <main className="grow flex justify-center overflow-y-auto">
        <div
          className={clsx(
            'w-[800px]',
            'shrink-0',
            'bg-light-blue',
            'px-5',
            'pt-7',
          )}>
          <Outlet />
        </div>
        <Sidebar />
      </main>
    </div>
  );
};
