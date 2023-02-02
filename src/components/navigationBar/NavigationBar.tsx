import { NavLink } from 'react-router-dom';
import { Divider } from '../divider';
import { Icon } from '../icon';
import { menuLinks } from './constants';

const getNavLinkClassNames = ({ isActive }: { isActive: boolean }): string => {
  return `p-3 mb-2 cursor-pointer flex items-center hover:bg-light-blue rounded select-none ${isActive ? 'bg-light-blue' : ''}`;
};

export const NavigationBar = () => {
  return (
    <aside className="w-60 px-3 py-4 shrink-0 border-r border-grey">
      <div className="sticky h-auto top-0">
        <div role="button" className="p-3 font-bold cursor-pointer flex items-center justify-between">
          <p className="select-none">DARUNOK APP</p>
        </div>
        <Divider margin={2} />
        <nav>
          {menuLinks.map(({ name, link, iconName }, index) => (
            <NavLink
              to={link}
              className={getNavLinkClassNames}
              key={name + link}
              draggable={false}
            >
              <Icon name={iconName} className="mr-2" />
              {name}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};
