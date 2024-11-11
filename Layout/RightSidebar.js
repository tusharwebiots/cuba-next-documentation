import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import MENUITEMS from '../public/Data/Menu';
// import useActiveLinkRightBar from '../component/useActiveLinkRightBar';

const RightSidebar = () => {
  const [heading, setHeading] = useState();
  const router = useRouter();
  // useActiveLinkRightBar();

  useEffect(() => {
    setHeading([]);
    MENUITEMS.every((data, i) => {
      var continueLoop = true;
      data.children &&
        data.children.every((child, i) => {
          var continueInnerLoop = true;
          if (child.path == router.pathname && child.headings) {
            setHeading(child.headings);
            continueLoop = false;
            continueInnerLoop = false;
          }
          return continueLoop;
        });
      return continueLoop;
    });
  }, [router]);

  return (
    <div className='left-sidebar right-part'>
      {!!heading?.length && (
        <aside>
          <ul className='list-unstyled nav-sidebar doc-nav'>
            <li className='nav-item'>
              <div className='title'>On this page</div>

              <ul className='dropdown-nav ps-0'>
                {!!heading?.length &&
                  heading.map((data, i) => (
                    <li className='nav-item' key={i}>
                      <a className='nav-link' href={`#${data.id}`}>
                        <i className='fa fa-angle-right me-2' />
                        {data.title}
                      </a>

                      {data.innerHeadings && (
                        <ul className='dropdown-sub-nav'>
                          {data.innerHeadings.map((innerHeading, i) => (
                            <li key={i}>
                              <a className='nav-link' href={`#${innerHeading.id}`}>
                                <i className='fa fa-angle-right me-2' />
                                {innerHeading.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
              </ul>
            </li>
          </ul>
        </aside>
      )}
    </div>
  );
};

export default RightSidebar;
