import { useState } from 'react';

export function Sidebar() {
  const [active, setActive] = useState<string>('home');

  return (
    <div className="sidebar-container">
      <div className="sidebar-wrapper">
        This is a sidebar
        <div className="menu-container">
          <div
            className={
              'menu-item ' + (active == 'home' ? 'menu-item-active' : '')
            }
            onClick={() => setActive('home')}
          >
            Home
          </div>
          <div
            className={
              'menu-item ' + (active == 'caddies' && 'menu-item-active')
            }
            onClick={() => setActive('caddies')}
          >
            Caddies
          </div>
          <div
            className={'menu-item ' + (active == 'help' && 'menu-item-active')}
            onClick={() => setActive('help')}
          >
            Help
          </div>
        </div>
      </div>
    </div>
  );
}
