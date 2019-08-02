const profiles = [
  {
    id: 0,
    image: "https://i.imgur.com/U8BJNqU.jpg",
    name: "johnny",
    last: "bravo",
    role: "Barber",
    location: {
      address: "508 Saint Cloud Road",
      city: "Bel Air",
      state: "CA",
      zip: 21014,
      number: "317-444-444"
    },
    description:
      "I am THE Johnny Bravo. Wanna see me comb my hair, really fast? Hit me up and I'll show you",
    price: {
      "Clipper Cut": 15,
      "Glorious Shampoo": 15,
      "All Over Color": 70,
      "The Works": 100
    },
    portfolio: [
      "https://i.imgur.com/0egAGWj.jpg",
      "https://i.imgur.com/RPDgUMm.jpg",
      "https://i.imgur.com/CQaZyta.jpg",
      "https://i.imgur.com/PmVHgFS.jpg"
    ],
    stars: 1.9
  },
  {
    id: 1,
    image: "https://i.imgur.com/PXeqdsH.jpg",
    name: "Princess Consuela",
    last: "Banana-Hammock",
    role: "Cosmetologist",
    location: {
      address: "742 Evergreen Terrace",
      city: "Springfield",
      state: "Washington",
      zip: 40069,
      number: "987-555-444"
    },
    description:
      "Hello, If you are interested in any of my services please consult with me if you are a new customer.",
    price: {
      "Clipper Cut": 15,
      "Glorious Shampoo": 15,
      "All Over Color": 70,
      "The Works": 100
    },
    portfolio: [
      "https://i.imgur.com/cX7ccxK.jpg",
      "https://i.imgur.com/Nqq8Te4.jpg"
    ],
    stars: 5.0
  },
  {
    id: 2,
    image: "https://i.imgur.com/ILgo4FN.jpg",
    name: "Michael",
    last: "Scofield",
    role: "Barber",
    location: {
      address: "508 Saint Cloud Road",
      city: "Chicago",
      state: "IL",
      zip: 21014,
      number: "317-444-444"
    },
    description:
      "I specialize in the sickest fades out here in Chi town. Check me out",
    price: {
      "Kid's Cut": 10,
      "Razor Shave": 25,
      "All Over Color": 70,
      "Specialty Cut": 80
    },
    portfolio: [
      "https://i.imgur.com/ILgo4FN.jpg",
      "https://i.imgur.com/0egAGWj.jpg",
      "https://i.imgur.com/RPDgUMm.jpg",
      "https://i.imgur.com/CQaZyta.jpg",
      "https://i.imgur.com/PmVHgFS.jpg"
    ],
    stars: 3.0
  },
  {
    id: 3,
    image: "https://i.imgur.com/Dpm9khf.jpg",
    name: "Marvelle",
    last: "Captain",
    role: "Stylist",
    location: {
      address: "245 East 73rd Street",
      city: "NY",
      state: "NY",
      zip: 21014,
      number: "317-444-444"
    },
    description:
      "My duty is to enhance your outer beauty and make you look even more fabulous",
    price: {
      "Shampoo and Set (Natural)": 90,
      "Olaplex Treatment, Partial Balayage": 85,
      "Spiral Set": 70,
      "Wig Consultation": 20
    },
    portfolio: [
      "https://i.imgur.com/ILgo4FN.jpg",
      "https://i.imgur.com/0egAGWj.jpg",
      "https://i.imgur.com/RPDgUMm.jpg",
      "https://i.imgur.com/CQaZyta.jpg",
      "https://i.imgur.com/PmVHgFS.jpg"
    ],
    stars: 4.0
  },
  {
    id: 4,
    image: "https://i.imgur.com/gHcpx9R.jpg",
    name: "Cindy",
    last: "Merrywether",
    role: "Colorist",
    location: {
      address: "245 East 73rd Street",
      city: "Metropolis",
      state: "OH",
      zip: 21014,
      number: "317-444-444"
    },
    description:
      "My duty is to enhance your outer beauty and make you look even more fabulous",
    price: {
      "DC Comic Baliage": 90,
      "Curl and Cut": 85,
      "The Pixie Do": 70,
      "Hair exam Consultation": 20
    },
    portfolio: [
      "https://i.imgur.com/MRDpqHj.jpg",
      "https://i.imgur.com/0egAGWj.jpg",
      "https://i.imgur.com/RPDgUMm.jpg",
      "https://i.imgur.com/CQaZyta.jpg",
      "https://i.imgur.com/PmVHgFS.jpg"
    ],
    stars: 2.0
  },
  {
    id: 5,
    image: "https://i.imgur.com/oRrXaqN.jpg",
    name: "Ellis B",
    last: "Redding",
    role: "Stylist",
    location: {
      address: "4050 Bromfield Road",
      city: "Lucas",
      state: "OH",
      zip: 21014,
      number: "317-444-444"
    },
    description: "I'm that guy that makes you look good. You feel me? ",
    price: {
      "DC Comic Baliage": 90,
      "Curl and Cut": 85,
      "The Pixie Do": 70,
      "Hair exam Consultation": 20
    },
    portfolio: [
      "https://i.imgur.com/ILgo4FN.jpg",
      "https://i.imgur.com/0egAGWj.jpg",
      "https://i.imgur.com/RPDgUMm.jpg",
      "https://i.imgur.com/CQaZyta.jpg",
      "https://i.imgur.com/PmVHgFS.jpg"
    ],
    stars: 3.3
  },
  {
    id: 6,
    image: "https://i.imgur.com/gCFZiyD.jpg",
    name: "Bucky",
    last: "Barnes",
    role: "Loctician",
    location: {
      address: "245 East 73rd Street",
      city: "Metropolis",
      state: "OH",
      zip: 21014,
      number: "317-444-444"
    },
    description: "Quality service for an affordable price ",
    price: {
      "Faux Locs Installs": 500,
      "Loc Maintenance": 185,
      "Loc Installs": 350,
      "Hair exam Consultation": 20
    },
    portfolio: [
      "https://i.imgur.com/MRDpqHj.jpg",
      "https://i.imgur.com/hZdkwdC.jpg",
      "https://i.imgur.com/FRfsebD.jpg",
      "https://i.imgur.com/nhXcjjD.jpg"
    ],
    stars: 4.8
  },
  {
    id: 7,
    image: "https://i.imgur.com/sjpQ78p.jpg",
    name: "Luke",
    last: "Cage",
    role: "Salon/Spa Owner",
    location: {
      address: "5066 Wisteria Lane",
      city: "Orlando",
      state: "FL",
      zip: 21014,
      number: "317-444-444"
    },
    description:
      "I specialize in enhancing your health to upgrade your beauty. ",
    price: {
      "DC Comic Baliage": 90,
      "Curl and Cut": 85,
      "The Pixie Do": 70,
      "Hair exam Consultation": 20
    },
    portfolio: [
      "https://i.imgur.com/ILgo4FN.jpg",
      "https://i.imgur.com/0egAGWj.jpg",
      "https://i.imgur.com/RPDgUMm.jpg",
      "https://i.imgur.com/CQaZyta.jpg",
      "https://i.imgur.com/PmVHgFS.jpg"
    ],
    stars: 4.2
  },
  {
    id: 8,
    image: "https://i.imgur.com/DjNO3KI.jpg",
    name: "Wednesday",
    last: "Addams",
    role: "Nail Tech",
    location: {
      address: "0001 Cemetery Lane",
      city: "Round Mountain",
      state: "MN",
      zip: 21014,
      number: "317-444-444"
    },
    description: "Nails everyone? Come through, I'll pamper you like crazy",
    price: {
      "DC Comic Baliage": 90,
      "Curl and Cut": 85,
      "The Pixie Do": 70,
      "Hair exam Consultation": 20
    },
    portfolio: [
      "https://i.imgur.com/ILgo4FN.jpg",
      "https://i.imgur.com/0egAGWj.jpg",
      "https://i.imgur.com/RPDgUMm.jpg",
      "https://i.imgur.com/CQaZyta.jpg",
      "https://i.imgur.com/PmVHgFS.jpg"
    ],
    stars: 3.2
  },
  {
    id: 9,
    image: "https://i.imgur.com/FI3NTFC.jpg",
    name: "Lisbeth",
    last: "Salander",
    role: "Makeup Artist",
    location: {
      address: "4222 Clinton Way",
      city: "LA",
      state: "CA",
      zip: 21014,
      number: "317-444-444"
    },
    description: "Makeup can help you capture a moment. ~ Carine Roitfeld",
    price: {
      "DC Comic Baliage": 90,
      "Curl and Cut": 85,
      "The Pixie Do": 70,
      "Hair exam Consultation": 20
    },
    portfolio: [
      "https://i.imgur.com/ILgo4FN.jpg",
      "https://i.imgur.com/0egAGWj.jpg",
      "https://i.imgur.com/RPDgUMm.jpg",
      "https://i.imgur.com/CQaZyta.jpg",
      "https://i.imgur.com/PmVHgFS.jpg"
    ],
    stars: 5.0
  }
];

export { profiles };
