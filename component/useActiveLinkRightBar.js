import { useEffect, useState } from 'react';

const useActiveLinkRightBar = () => {
  const [current, setCurrent] = useState();

  useEffect(() => {
    const sections = [...document.querySelectorAll('.content *[id]')];

    const navLi = document.querySelectorAll('.right-part aside ul li a');

    // window.addEventListener('scroll', () => {
    //   sections.forEach((section) => {
    //     const sectionTop = section.offsetTop;
    //     const sectionHeight = section.clientHeight;
    //     if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
    //       setCurrent(section.getAttribute('id') || current);
    //     }
    //   });
    //   navLi.forEach((el) => {
    //     if (el.getAttribute('href') === `#${current}`) {
    //       el.classList.add('active');
    //     } else {
    //       el.classList.remove('active');
    //     }
    //   });
    // });

    window.addEventListener('scroll', () => {
      const sectionsNum = sections.map((section) => window.scrollY + 5 - section.offsetTop);
      let minVal = Math.min(...sectionsNum);
      let index = sectionsNum.findIndex(minVal);
      let sectionTag = sections[index];
    });
    return () => window.removeEventListener('scroll', () => {});
  });
  return current;
};

export default useActiveLinkRightBar;
