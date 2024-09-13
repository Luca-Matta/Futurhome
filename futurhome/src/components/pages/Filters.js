import React, { useRef, useEffect } from 'react';
import '../../styles/Filters.css';

function Filters() {
  const filtersRef = useRef(null);

  const scrollFilters = (direction) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      if (direction === 'left') {
        filtersRef.current.scrollLeft -= 10;
      } else {
        filtersRef.current.scrollLeft += 10;
      }
      scrollAmount += 10;
      if(scrollAmount >= 200){
        window.clearInterval(slideTimer);
      }
    }, 25);
    checkArrows();
  };

  const checkArrows = () => {
    const { scrollLeft, scrollWidth, clientWidth } = filtersRef.current;
    const atStart = scrollLeft === 0;
    const atEnd = scrollWidth - scrollLeft <= clientWidth + 1;

    document.querySelector('.filter-arrow-prev').style.display = atStart ? 'none' : 'block';
    document.querySelector('.filter-arrow-next').style.display = atEnd ? 'none' : 'block';
  };

  useEffect(() => {
    checkArrows();
  }, []);

  return (
    <div className="filters-container">
      <div className="filter-arrow-prev" onClick={() => scrollFilters('left')}></div>
      <div className="filters" ref={filtersRef} onScroll={checkArrows}>
        <div className="filter">Sconto</div>
        <div className="filter">Arredato</div>
        <div className="filter">Giardino</div>
        <div className="filter">Terrazzo</div>
        <div className="filter">Box</div>
        <div className="filter">Fino a 100.000€</div>
        <div className="filter active-filter">Fino a 200.000 €</div>
        <div className="filter">Aria Condizionata</div>
        <div className="filter">Ascensore</div>
        <div className="filter active-filter">Doppi servizi</div>
        <div className="filter">Piscina</div>
        <div className="filter">Vista Mare</div>
      </div>
      <div className="filter-arrow-next" onClick={() => scrollFilters('right')}></div>
    </div>
  );
}

export default Filters;