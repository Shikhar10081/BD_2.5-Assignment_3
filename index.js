const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

let hotels = [
  {
    id: 1,
    name: 'Romantic Getaway',
    category: 'Resort',
    rating: 2.2,
    reviews: 4572,
    amenity: 'Spa',
    price: 10464,
    country: 'South Africa',
  },
  {
    id: 2,
    name: 'Wellness Retreat',
    category: 'Family',
    rating: 2.8,
    reviews: 2114,
    amenity: 'Pool',
    price: 13243,
    country: 'Australia',
  },
  {
    id: 3,
    name: 'Romantic Getaway',
    category: 'Luxury',
    rating: 3.1,
    reviews: 4359,
    amenity: 'Restaurant',
    price: 3299,
    country: 'Germany',
  },
  {
    id: 4,
    name: 'Luxury Suites',
    category: 'Family',
    rating: 4.9,
    reviews: 3651,
    amenity: 'Bar',
    price: 16359,
    country: 'United Kingdom',
  },
  {
    id: 5,
    name: 'Luxury Suites',
    category: 'Budget',
    rating: 4.6,
    reviews: 688,
    amenity: 'Gym',
    price: 15570,
    country: 'France',
  },
  {
    id: 6,
    name: 'Cultural Heritage Hotel',
    category: 'Boutique',
    rating: 2.0,
    reviews: 219,
    amenity: 'Pet Friendly',
    price: 2321,
    country: 'USA',
  },
  {
    id: 7,
    name: 'Business Hotel',
    category: 'Mid-Range',
    rating: 3.7,
    reviews: 1040,
    amenity: 'Free WiFi',
    price: 4523,
    country: 'India',
  },
  {
    id: 8,
    name: 'Historic Plaza Hotel',
    category: 'Mid-Range',
    rating: 3.5,
    reviews: 300,
    amenity: 'Parking',
    price: 8543,
    country: 'Australia',
  },
  {
    id: 9,
    name: 'Adventure Resort',
    category: 'Boutique',
    rating: 4.2,
    reviews: 1222,
    amenity: 'Gym',
    price: 11894,
    country: 'South Africa',
  },
  {
    id: 10,
    name: 'Mountain Retreat',
    category: 'Resort',
    rating: 4.8,
    reviews: 4015,
    amenity: 'Spa',
    price: 17560,
    country: 'India',
  },
  {
    id: 11,
    name: 'Eco Friendly Lodge',
    category: 'Family',
    rating: 2.4,
    reviews: 528,
    amenity: 'Restaurant',
    price: 3124,
    country: 'Germany',
  },
  {
    id: 12,
    name: 'Urban Boutique Hotel',
    category: 'Mid-Range',
    rating: 3.9,
    reviews: 1401,
    amenity: 'Free WiFi',
    price: 9245,
    country: 'France',
  },
  {
    id: 13,
    name: 'Beachfront Hotel',
    category: 'Luxury',
    rating: 4.5,
    reviews: 489,
    amenity: 'Pool',
    price: 14567,
    country: 'USA',
  },
  {
    id: 14,
    name: 'Ocean View Resort',
    category: 'Budget',
    rating: 3.3,
    reviews: 783,
    amenity: 'Spa',
    price: 7432,
    country: 'United Kingdom',
  },
  {
    id: 15,
    name: 'City Central Hotel',
    category: 'Boutique',
    rating: 4.1,
    reviews: 2133,
    amenity: 'Bar',
    price: 9823,
    country: 'Australia',
  },
  {
    id: 16,
    name: 'Casino Resort',
    category: 'Luxury',
    rating: 4.9,
    reviews: 5000,
    amenity: 'Bar',
    price: 18900,
    country: 'South Africa',
  },
  {
    id: 17,
    name: 'Golf Resort',
    category: 'Mid-Range',
    rating: 4.7,
    reviews: 789,
    amenity: 'Gym',
    price: 16340,
    country: 'France',
  },
  {
    id: 18,
    name: 'Family Fun Hotel',
    category: 'Family',
    rating: 3.2,
    reviews: 1322,
    amenity: 'Pool',
    price: 7500,
    country: 'Germany',
  },
  {
    id: 19,
    name: 'Spa and Relaxation Hotel',
    category: 'Luxury',
    rating: 4.4,
    reviews: 2314,
    amenity: 'Spa',
    price: 14900,
    country: 'United Kingdom',
  },
  {
    id: 20,
    name: 'Country House Hotel',
    category: 'Budget',
    rating: 3.6,
    reviews: 1876,
    amenity: 'Parking',
    price: 6234,
    country: 'Australia',
  },
];

app.get('/hotels', (req, res) => {
  res.json({ hotels });
});

function sortByPricing(hotelA, hotelB, pricing) {
  return pricing === 'low-to-high'
    ? hotelA.price - hotelB.price
    : hotelB.price - hotelA.price;
}

app.get('/hotels/sort/pricing', (req, res) => {
  let pricing = req.query.pricing;
  let Copy = hotels.slice();
  Copy.sort((hotelA, hotelB) => {
    sortByPricing(hotelA, hotelB, pricing);
  });
  res.json({ hotels: Copy });
});

function sortByRating(hotelA, hotelB, rating) {
  return rating === 'low-to-high'
    ? hotelA.rating - hotelB.rating
    : hotelB.rating - hotelA.rating;
}

app.get('/hotels/sort/rating', (req, res) => {
  const rating = req.query.rating;
  let CopyHotels = hotels.slice();
  CopyHotels.sort((hotelA, hotelB) => sortByRating(hotelA, hotelB, rating));
  res.json({ hotels: CopyHotels });
});

function sortByReviews(hotelA, hotelB, reviews) {
  return reviews === 'least-to-most'
    ? hotelA.reviews - hotelB.reviews
    : hotelB.reviews - hotelA.reviews;
}
app.get('/hotels/sort/reviews', (req, res) => {
  const reviews = req.query.reviews;
  let CopyHotels = hotels.slice();
  CopyHotels.sort((hotelA, hotelB) => sortByReviews(hotelA, hotelB, reviews));
  res.json({ hotels: CopyHotels });
});

function filterByAmenity(hotel, amenity) {
  return hotel.amenity.toLowerCase() === amenity.toLowerCase();
}
app.get('/hotels/filter/amenity', (req, res) => {
  const { amenity } = req.query;
  const filteredHotels = hotels.filter((hotel) =>
    filterByAmenity(hotel, amenity)
  );
  res.json({ hotels: filteredHotels });
});

function filterByCountry(hotel, country) {
  return hotel.country.toLowerCase() === country.toLowerCase();
}
app.get('/hotels/filter/country', (req, res) => {
  const country = req.query.country;
  const filteredHotels = hotels.filter((hotel) =>
    filterByCountry(hotel, country)
  );
  res.json({ hotels: filteredHotels });
});
function filterByCategory(hotel, category) {
  return hotel.category.toLowerCase() === category.toLowerCase();
}
app.get('/hotels/filter/category', (req, res) => {
  const category = req.query.category;
  const filteredHotels = hotels.filter((hotel) =>
    filterByCategory(hotel, category)
  );
  res.json({ hotels: filteredHotels });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
