import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, useRef, useState } from 'react';
import MENUITEMS from '../public/Data/Menu';

const Header = ({ setFontSize, leftSidebar, setLeftSidebar, topLinks, setTopLinks, setOverlay, input, setInput }) => {
  const [suggetionList, setSuggetionList] = useState([]);
  const [active, setActive] = useState();
  const router = useRouter();
  const searchInput = useRef(null);
  const scrollList = useRef(null);
  const suggestionItems = useRef(null);
  const handleChange = (e) => {
    setInput(e.target.value);

    setSuggetionList([]);

    MENUITEMS.map((data, i) => {
      data.children.map((menuTitle) => {
        menuTitle.title.toLowerCase().includes(e.target.value.toLowerCase()) && setSuggetionList((prev) => [...prev, { title: [menuTitle.title], path: menuTitle.path }]);
        menuTitle.headings &&
          menuTitle.headings.map((childMenuTitle) => {
            childMenuTitle.title.toLowerCase().includes(e.target.value.toLowerCase()) && setSuggetionList((prev) => [...prev, { title: [childMenuTitle.title, menuTitle.title], path: `${menuTitle.path}#${childMenuTitle.id}` }]);
            childMenuTitle.innerHeadings &&
              childMenuTitle.innerHeadings.map((innerChildMenu) => {
                innerChildMenu.title.toLowerCase().includes(e.target.value.toLowerCase()) && setSuggetionList((prev) => [...prev, { title: [menuTitle.title, childMenuTitle.title, innerChildMenu.title], path: `${menuTitle.path}#${innerChildMenu.id}` }]);
              });
          });
      });
    });
  };

  const handleUpKey = (e) => {
    active ? setActive(active - 1) : setActive(suggetionList.length || 0);
    return true;
  };
  const handleDownKey = (e) => {
    active ? setActive(active + 1) : setActive(1);
    return true;
  };

  return (
    <div>
      <div className='home-section'>
        <nav className='navbar navbar-expand-lg'>
          <div className='container custom-container'>
            <div className='main-menu'>
              <a className='navbar-brand' href='index.html'>
                <img src='/assets/images/logo/logo.png' alt='' />
              </a>
              <div>
                <button className='navbar-toggler collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation' onClick={() => setTopLinks(!topLinks)}>
                  <i className='fa fa-bars'> </i>
                </button>
                <div className={`collapse navbar-collapse ${topLinks ? 'show' : ''}`} id='navbarSupportedContent'>
                  <ul className='navbar-nav menu'>
                    <li className='nav-item active'>
                      <a className='nav-link' href='https://1.envato.market/3GVzd' role='button' aria-haspopup='true' aria-expanded='false' target='_blank' rel='noreferrer'>
                        Purchase
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link' href='https://support.pixelstrap.com/' role='button' aria-haspopup='true' aria-expanded='false' target='_blank' rel='noreferrer'>
                        Support
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link' href='http://surl.li/lvcab' role='button' aria-haspopup='true' aria-expanded='false' target='_blank' rel='noreferrer'>
                        Demo
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a className='nav-link' href='http://surl.li/lvcab' role='button' aria-haspopup='true' aria-expanded='false' target='_blank' rel='noreferrer'>
                        Feature{' '}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <ul className='nav-right'>
                <li>
                  <div className='d-lg-none d-block'>
                    <a className='toggle-sidebar' href='#' onClick={() => setLeftSidebar(!leftSidebar)}>
                      <i className='fa fa-sliders' />
                    </a>
                  </div>
                </li>
                <li>
                  <div className='btn-group'>
                    <a className='decrease btn btn-doc' href='#' title='Decrease font size' onClick={() => setFontSize('font-decrease')}>
                      A-
                    </a>
                    <a className='reset btn btn-doc' href='#' title='Default font size' onClick={() => setFontSize('')}>
                      A
                    </a>
                    <a className='increase btn btn-doc' href='#' title='Increase font size' onClick={() => setFontSize('font-increase')}>
                      A+
                    </a>
                  </div>
                </li>
                <li>
                  <a className='btn btn-dark mode' href='#' title='Dark' onClick={() => document.body.classList.toggle('dark-only')}>
                    <i className='fa fa-moon-o' />
                    <span>Dark</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='container custom-container'>
          <div className='search-input'>
            <h1 className='technologyText'>Next Document</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                let tempHref = suggetionList.filter((data, i) => {
                  return i + 1 == active ? true : false;
                });
                tempHref[0].path && router.push(tempHref[0].path);
                searchInput.current.blur();
                setInput('');
              }}
            >
              <div className='input-group mb-md-3 mb-0'>
                <input
                  ref={searchInput}
                  type='text'
                  className='form-control'
                  placeholder='search anything here'
                  aria-label="Recipient's username"
                  aria-describedby='basic-addon2'
                  value={input}
                  onChange={(e) => {
                    handleChange(e);
                    setActive();
                  }}
                  onFocus={(e) => {
                    setOverlay(true);
                    handleChange(e);
                  }}
                  onBlur={() => setOverlay(false)}
                  onKeyDown={(e) => {
                    e.key == 'ArrowDown' && handleDownKey(e) && e.preventDefault();
                    e.key == 'ArrowUp' && handleUpKey(e) && e.preventDefault();
                  }}
                />
                <span className='input-group-text' id='basic-addon2'>
                  Search
                </span>
                {!!suggetionList.length && input && (
                  <div className='suggetion-box'>
                    <div className='suggestion-list' ref={scrollList}>
                      {suggetionList.map((data, i) => (
                        <div className={`suggetion-item ${i + 1 == active ? `active` : ''}`} key={i} ref={suggestionItems}>
                          <p className=''>
                            <Link href={data.path}>
                              <a>
                                {data.title.map((title, i) => (
                                  <Fragment key={i}>
                                    {i !== 0 && <i className='fa fa-angle-double-right px-2' aria-hidden='true'></i>}
                                    {title}
                                  </Fragment>
                                ))}
                              </a>
                            </Link>
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </form>
            <div className='popular-search'>
              <span>Popular Search:</span>
              <ul>
                <li>
                  <Link href='/getting_started/installation'>
                    <a>
                      <span className='badge bg-primary'>Installation</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/getting_started/sidebar'>
                    <a>
                      <span className='badge bg-primary'>Sidebar</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/getting_started/create_new_page'>
                    <a>
                      <span className='badge bg-primary'>Create New Page</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='effect-sec'>
          <img src='/assets/images/girl.png' className='img-fluid girl-img' alt='' />
          {/* <img src='/assets/images/calendr.png' className='img-fluid cldr-img' alt='' /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
