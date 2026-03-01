import weatherService from "./services/weatherService";

export const data = []

const randomCity = () => {
  const cities = ["New York", "Oyo", "London", "Tokyo", "Paris"];
  for(let i=0; i<4; i++){
    const randomIndex = Math.floor(Math.random() * cities.length);
    weatherService.get(`/weather?q=${cities[randomIndex]}&units=metric`)
      .then((res) => {
        data.push({
          id: i + 1,
          temperature: res.data?.main?.temp,
          date: "Friday, 5 September",
          city: res.data?.name,
          country: res.data?.sys?.country
        })
      })
      .catch((err) => console.error(err.message));
  }
};

export default randomCity;

// export const data = [
//   {
//     id: 1,
//     temperature: 16,
//     date: "Friday, 5 September",
//     city: "New York",
//     country: "USA",
//   },
//   {
//     id: 2,
//     temperature: 33,
//     date: "Friday, 5 September",
//     city: "Oyo",
//     country: "NG",
//   },
//   {
//     id: 3,
//     temperature: 16,
//     date: "Friday, 5 September",
//     city: "New York",
//     country: "USA",
//   },
//   {
//     id: 4,
//     temperature: 33,
//     date: "Friday, 5 September",
//     city: "Oyo",
//     country: "NG",
//   },
// ];
