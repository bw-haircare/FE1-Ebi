const profiles = [
  {
    id: 0,
    image: "../img/img9.jpg",
    name: "johnny",
    last: "bravo",
    city: "Indy",
    role: "Barber",
    location: {
      address: "508 Saint Cloud Road",
      city: "Bel Air",
      state: "CA",
      zip: 21014,
      number: "317-444-444"
    },
    description:
      "I am THE Johnny Bravo. Wanna see me comb my hair, really fast? ",
    price: {
      "Clipper Cut": 15,
      "Glorious Shampoo": 15,
      "All Over Color": 70,
      "The Works": 100
    },
    portfolio: [
      "../img/img1.jpg",
      "../img/img2.jpg",
      "../img/img3.jpg",
      "../img/img4.jpg",
      "../img/img5.jpg"
    ],
    stars: 1
  },
  {
    id: 1,
    image: "../img/img10.jpg",
    name: "Princess Consuela",
    last: "Banana-Hammock",
    city: "Jacksonville",
    role: "cosmetologist",
    price: {
      "Model Cut": 30,
      "Condition and Blow Out": 40,
      "Color Retouch": 100
    },
    location: {
      address: "742 Evergreen Terrace ",
      city: "Springfield",
      state: "Washington",
      zip: 40069,
      number: "987-555-444"
    },
    description:
      "Hello, my name is Princess Consuela Banana Hammock. If you are interested in any of my services please consult with me if you are a new customer. ",
    portfolio: ["../img/img6.jpg", "../img/img7.jpg", "../img/img8.jpg"],
    stars: 5
  }
];

export { profiles };
