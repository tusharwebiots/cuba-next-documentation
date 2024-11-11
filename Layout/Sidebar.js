import Link from 'next/link';
import { useRouter } from 'next/router';
import MENUITEMS from '../public/Data/Menu';

const Sidebar = ({ leftSidebar, setLeftSidebar }) => {
  const router = useRouter();

  return (
    <div className={`left-sidebar ${leftSidebar ? 'open' : ''}`}>
      <aside>
        <ul className='list-unstyled nav-sidebar doc-nav'>
          {MENUITEMS.map((navHeading, index) => (
            <li className='nav-item' key={index}>
              <div className='title'>
                <img src='/assets/images/document/React.png' alt='' />

                {navHeading.children ? (
                  navHeading.title
                ) : (
                  <Link href={navHeading.path}>
                    <a className='title'>{navHeading.title}</a>
                  </Link>
                )}
              </div>
              <ul className='dropdown-nav'>
                {navHeading.children &&
                  navHeading.children.map((navLink, i) => (
                    <li className='nav-item' key={i}>
                      <Link href={navLink.path}>
                        <a className={`nav-link ${router.pathname === navLink.path ? 'active' : ''}`} onClick={() => setLeftSidebar(false)}>
                          {navLink.title}
                        </a>
                      </Link>
                    </li>
                  ))}
              </ul>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
