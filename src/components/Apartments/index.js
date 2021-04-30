import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

function Apartments(props) {
  const {data = []} = props;
  const  [page, setPage] = useState(1);
  const [shortedData, setShortedData] = useState([]);

  useEffect(() => {
    setPage(1);
    setShortedData(data && data.length ? data.slice(0, 4 > data.length ? data.length : 4) : [])
  }, [data])

  const getMoreData = (newPage) => {
    setPage(newPage)
    const max = newPage * 4;
    setShortedData(data.slice(0, max > data.length ? data.length : max));
  }

  return (
    <div className="apartments" id="scrollable-div">
      <InfiniteScroll
        dataLength={shortedData.length}
        next={() => getMoreData(page + 1)}
        scrollableTarget="scrollable-div"
        hasMore={data.length !== shortedData.length}
      >
        {shortedData.map((item) => (
          <div key={item.id}>
            <div className="apartment mt-2">
              <div className="position-relative">
                <img width="100%" height="300px" alt="apartment" src={item.picture} />
                <div className="price-tag position-absolute w-100 px-3 py-2">
                  <div className="fs-4">{`${item.price} $`}</div>
                  <div>{`${Math.floor(item.price/item.sqm)} $/m^2`}</div>
                </div>
              </div>
            </div>
            <div className="apartment-details">
              <div className="apartment-title p-2 text-primary border-bottom">
                {item.title}
              </div>
              <div className="row m-0 py-2 border-bottom">
                <div className="col-4 text-left border-right">
                  {item.sqm}
                </div>
                <div className="col-4 text-center border-right">
                  {item.number_of_bedrooms} beds
                </div>
                <div className="col-4 text-right">
                  {item.number_of_bathrooms} bath
                </div>
              </div>
            </div>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  )
}

export default Apartments;