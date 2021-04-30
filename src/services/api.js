import queryString from 'query-string';

export async function getApartments (queryItems) {
  try {
    const queryParams = {
      ...(queryItems.minPrice && {minimum_price: queryItems.minPrice}),
      ...(queryItems.maxPrice && {maximum_price: queryItems.maxPrice}),
      ...(queryItems.minSqm && {minimum_sqm: queryItems.minSqm}),
      ...(queryItems.maxSqm && {maximum_sqm: queryItems.maxSqm}),
      ...(queryItems.bedrooms && {number_of_bedrooms: queryItems.bedrooms}),
    }
    const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/v1/apartments?${queryString.stringify(queryParams)}`)
    const data = await res.json()
    return data;
  } catch(e) {
    console.log(e);
  }
}
