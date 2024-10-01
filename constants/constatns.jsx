export const brand = "Brand";

export const photographyCommunities = [
  {
    name: "Photography Enthusiasts",
    slug: "photography-enthusiasts",
    description: `Photography Enthusiasts is a vibrant community dedicated to individuals who are passionate about the art of photography. This community serves as a space for photographers of all levels to share their work, exchange tips, and engage in meaningful discussions about photography techniques, equipment, and creative processes. Whether you're a seasoned professional or just starting with your first camera, you'll find valuable resources and a supportive network here. Members regularly participate in themed photo challenges, constructive critiques, and collaborative projects that help hone their skills and broaden their perspectives. The community also organizes virtual meetups and workshops with renowned photographers, providing opportunities for learning and growth. Our mission is to foster a culture of creativity, inspiration, and continuous improvement, making Photography Enthusiasts a go-to destination for anyone who loves to capture the world through their lens.`,
    images: [
      "https://assets.skool.com/f/0c60dc308ee84090a5ee3e41ce349cd8/a081760f86874ea7804c3fa357ec94ec7869e933a2d64fb7bf54b8ea550d8334-md.jpg",
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
    ],
    members: ["64d8b2f6e1a55c001bd23a1d", "64d8b2f6e1a55c001bd23a1e"],
    approved: true,
    status: true,
  },
  {
    name: "Travel Photographers",
    slug: "travel-photographers",
    description: `Travel Photographers is a global community that brings together individuals who have a passion for exploring the world and capturing its beauty through their lenses. This community is more than just a group of photographers; it's a gathering of adventurers, storytellers, and cultural enthusiasts who seek to share their unique perspectives and experiences with others. Members of Travel Photographers document their journeys through stunning visuals, showcasing diverse landscapes, vibrant cultures, and the raw beauty of the world. The community encourages the sharing of travel tips, itineraries, and photography techniques, helping each other to improve their craft while also inspiring others to embark on their own adventures. Through collaborative projects, travel challenges, and interactive discussions, Travel Photographers fosters a sense of camaraderie and mutual growth, making it an ideal space for those who love to explore and capture the essence of the world.`,
    images: [
      "https://assets.skool.com/f/0c60dc308ee84090a5ee3e41ce349cd8/a081760f86874ea7804c3fa357ec94ec7869e933a2d64fb7bf54b8ea550d8334-md.jpg",
      "https://example.com/travel1.jpg",
      "https://example.com/travel2.jpg",
    ],
    members: ["64d8b2f6e1a55c001bd23a1f", "64d8b2f6e1a55c001bd23a20"],
    approved: false,
    status: true,
  },
  {
    name: "Nature Lovers",
    slug: "nature-lovers",
    description: `Nature Lovers is a dedicated community for individuals who find peace and inspiration in the natural world. This community is a haven for photographers who specialize in capturing the beauty and intricacy of nature, from expansive landscapes and serene seascapes to the delicate details of flora and fauna. Members of Nature Lovers share a deep appreciation for the environment and strive to raise awareness about the importance of conservation through their work. The community provides a platform for photographers to showcase their nature photography, exchange tips on capturing the perfect shot, and engage in discussions about environmental issues. In addition to photography, Nature Lovers organizes educational initiatives, such as workshops on sustainable practices and collaborations with conservation organizations, aiming to contribute positively to the preservation of natural habitats. Whether you're photographing in your backyard or exploring remote wilderness areas, Nature Lovers is a place to connect with like-minded individuals who share your passion for the earth's natural beauty.`,
    images: [
      "https://assets.skool.com/f/0c60dc308ee84090a5ee3e41ce349cd8/a081760f86874ea7804c3fa357ec94ec7869e933a2d64fb7bf54b8ea550d8334-md.jpg",
      "https://example.com/nature1.jpg",
      "https://example.com/nature2.jpg",
    ],
    members: ["64d8b2f6e1a55c001bd23a21", "64d8b2f6e1a55c001bd23a22"],
    approved: true,
    status: false,
  },
  {
    name: "Street Photography",
    slug: "street-photography",
    description: `Street Photography is a dynamic community that celebrates the art of capturing the essence of urban life. This community is home to photographers who are passionate about documenting the everyday moments, the unposed interactions, and the vibrant energy of city streets. Street Photography provides a space for members to share their work, engage in discussions about technique, and explore the ethical considerations of photographing in public spaces. The community is known for its emphasis on storytelling through imagery, with members often focusing on themes such as social issues, cultural diversity, and the human experience. Through photo walks, collaborative projects, and critique sessions, Street Photography fosters a supportive environment where photographers can learn from each other and refine their skills. The community also highlights the work of emerging street photographers, offering them a platform to gain exposure and connect with a broader audience. Whether you're drawn to the hustle and bustle of a metropolis or the quiet moments in a small town, Street Photography is a place to share your unique perspective on urban life.`,
    images: [
      "https://assets.skool.com/f/0c60dc308ee84090a5ee3e41ce349cd8/a081760f86874ea7804c3fa357ec94ec7869e933a2d64fb7bf54b8ea550d8334-md.jpg",
      "https://example.com/street1.jpg",
      "https://example.com/street2.jpg",
    ],
    members: ["64d8b2f6e1a55c001bd23a23", "64d8b2f6e1a55c001bd23a24"],
    approved: true,
    status: true,
  },
  {
    name: "Wildlife Photographers",
    slug: "wildlife-photographers",
    description: `Wildlife Photographers is a passionate community for those who venture into the wild to capture the stunning and sometimes elusive beauty of the animal kingdom. This community brings together photographers who specialize in wildlife photography, providing a platform for them to share their work, discuss techniques, and learn from one another. Members of Wildlife Photographers are driven by a deep respect for animals and a commitment to raising awareness about wildlife conservation through their images. The community encourages ethical practices in wildlife photography, emphasizing the importance of respecting the natural habitats and behaviors of animals. Through workshops, photo safaris, and collaborations with conservation organizations, Wildlife Photographers aims to inspire and educate both its members and the broader public. Whether you're photographing majestic predators, tiny insects, or the rich biodiversity of a rainforest, Wildlife Photographers offers a supportive environment where you can grow as a photographer and advocate for the protection of the world's wildlife.`,
    images: [
      "https://assets.skool.com/f/0c60dc308ee84090a5ee3e41ce349cd8/a081760f86874ea7804c3fa357ec94ec7869e933a2d64fb7bf54b8ea550d8334-md.jpg",
      "https://example.com/wildlife1.jpg",
      "https://example.com/wildlife2.jpg",
    ],
    members: ["64d8b2f6e1a55c001bd23a25", "64d8b2f6e1a55c001bd23a26"],
    approved: false,
    status: true,
  },
];

export const countries = [
  {
    title: "United States",
    slug: "united-states",
    states: [
      {
        name: "California",
        cities: [
          "Los Angeles",
          "San Francisco",
          "San Diego",
          "San Jose",
          "Sacramento",
        ],
      },
      {
        name: "New York",
        cities: ["New York City", "Buffalo", "Rochester", "Syracuse", "Albany"],
      },
      {
        name: "Texas",
        cities: ["Houston", "Dallas", "Austin", "San Antonio", "Fort Worth"],
      },
      {
        name: "Florida",
        cities: ["Miami", "Orlando", "Tampa", "Jacksonville", "St. Petersburg"],
      },
    ],
  },
  {
    title: "Canada",
    slug: "canada",
    states: [
      {
        name: "Ontario",
        cities: ["Toronto", "Ottawa", "Hamilton", "Kitchener", "London"],
      },
      {
        name: "British Columbia",
        cities: ["Vancouver", "Victoria", "Surrey", "Richmond", "Burnaby"],
      },
      {
        name: "Quebec",
        cities: ["Montreal", "Quebec City", "Laval", "Gatineau", "Sherbrooke"],
      },
      {
        name: "Alberta",
        cities: [
          "Calgary",
          "Edmonton",
          "Red Deer",
          "Lethbridge",
          "Grande Prairie",
        ],
      },
    ],
  },
  {
    title: "United Kingdom",
    slug: "united-kingdom",
    states: [
      {
        name: "England",
        cities: ["London", "Manchester", "Birmingham", "Liverpool", "Leeds"],
      },
      {
        name: "Scotland",
        cities: ["Edinburgh", "Glasgow", "Aberdeen", "Dundee", "Inverness"],
      },
      {
        name: "Wales",
        cities: ["Cardiff", "Swansea", "Newport", "Wrexham", "Bangor"],
      },
      {
        name: "Northern Ireland",
        cities: ["Belfast", "Derry", "Lisburn", "Armagh", "Newry"],
      },
    ],
  },
  {
    title: "Australia",
    slug: "australia",
    states: [
      {
        name: "New South Wales",
        cities: [
          "Sydney",
          "Newcastle",
          "Wollongong",
          "Central Coast",
          "Maitland",
        ],
      },
      {
        name: "Victoria",
        cities: ["Melbourne", "Geelong", "Ballarat", "Bendigo", "Shepparton"],
      },
      {
        name: "Queensland",
        cities: [
          "Brisbane",
          "Gold Coast",
          "Sunshine Coast",
          "Townsville",
          "Cairns",
        ],
      },
      {
        name: "Western Australia",
        cities: ["Perth", "Mandurah", "Bunbury", "Geraldton", "Albany"],
      },
    ],
  },
  {
    title: "Germany",
    slug: "germany",
    states: [
      {
        name: "Bavaria",
        cities: ["Munich", "Nuremberg", "Augsburg", "Regensburg", "Würzburg"],
      },
      {
        name: "Berlin",
        cities: ["Berlin"],
      },
      {
        name: "North Rhine-Westphalia",
        cities: ["Cologne", "Düsseldorf", "Dortmund", "Essen", "Duisburg"],
      },
      {
        name: "Hesse",
        cities: ["Frankfurt", "Wiesbaden", "Kassel", "Darmstadt", "Offenbach"],
      },
    ],
  },
  {
    title: "France",
    slug: "france",
    states: [
      {
        name: "Île-de-France",
        cities: [
          "Paris",
          "Versailles",
          "Boulogne-Billancourt",
          "Neuilly-sur-Seine",
          "Créteil",
        ],
      },
      {
        name: "Provence-Alpes-Côte d'Azur",
        cities: ["Marseille", "Nice", "Toulon", "Aix-en-Provence", "Avignon"],
      },
      {
        name: "Auvergne-Rhône-Alpes",
        cities: [
          "Lyon",
          "Grenoble",
          "Saint-Étienne",
          "Clermont-Ferrand",
          "Annecy",
        ],
      },
      {
        name: "Hauts-de-France",
        cities: ["Lille", "Amiens", "Calais", "Dunkerque", "Lens"],
      },
    ],
  },

 {
  title: "India",
  slug: "india",
  states: [
    {
      name: "Andhra Pradesh",
      cities: [
        "Visakhapatnam",
        "Vijayawada",
        "Guntur",
        "Nellore",
        "Kurnool",
        "Rajahmundry",
        "Tirupati",
        "Kadapa",
        "Anantapur",
        "Kakinada",
        "Chittoor",
        "Eluru",
        "Srikakulam",
        "Vizianagaram",
        "Ongole",
      ],
    },
    {
      name: "Arunachal Pradesh",
      cities: [
        "Itanagar",
        "Naharlagun",
        "Pasighat",
        "Tezu",
        "Ziro",
        "Tawang",
        "Bomdila",
        "Aalo",
        "Roing",
        "Khonsa",
        "Changlang",
        "Lower Subansiri",
        "Upper Subansiri",
        "East Kameng",
        "West Kameng",
      ],
    },
    {
      name: "Assam",
      cities: [
        "Guwahati",
        "Silchar",
        "Dibrugarh",
        "Jorhat",
        "Nagaon",
        "Tinsukia",
        "Tezpur",
        "Bongaigaon",
        "Karimganj",
        "Sivasagar",
        "Nalbari",
        "Goalpara",
        "Dhubri",
        "Cachar",
        "Hailakandi",
      ],
    },
    {
      name: "Bihar",
      cities: [
        "Patna",
        "Gaya",
        "Bhagalpur",
        "Muzaffarpur",
        "Purnia",
        "Darbhanga",
        "Bihar Sharif",
        "Arrah",
        "Begusarai",
        "Katihar",
        "Samastipur",
        "Saharsa",
        "Madhepura",
        "Nalanda",
        "Siwan",
      ],
    },
    {
      name: "Chhattisgarh",
      cities: [
        "Raipur",
        "Bhilai",
        "Bilaspur",
        "Korba",
        "Durg",
        "Rajnandgaon",
        "Jagdalpur",
        "Raigarh",
        "Ambikapur",
        "Dhamtari",
        "Kondagaon",
        "Kanker",
        "Surguja",
        "Mahasamund",
        "Balod",
      ],
    },
    {
      name: "Goa",
      cities: [
        "Panaji",
        "Margao",
        "Vasco da Gama",
        "Mapusa",
        "Ponda",
        "Bicholim",
        "Curchorem",
        "Canacona",
        "Sanquelim",
        "Valpoi",
        "Quepem",
        "Sanguem",
        "Pernem",
        "Dharbandora",
      ],
    },
    {
      name: "Gujarat",
      cities: [
        "Ahmedabad",
        "Surat",
        "Vadodara",
        "Rajkot",
        "Gandhinagar",
        "Bhavnagar",
        "Jamnagar",
        "Junagadh",
        "Anand",
        "Navsari",
        "Kutch",
        "Surendranagar",
        "Patan",
        "Mehsana",
        "Dahod",
      ],
    },
    {
      name: "Haryana",
      cities: [
        "Gurugram",
        "Faridabad",
        "Ambala",
        "Hisar",
        "Karnal",
        "Rohtak",
        "Panipat",
        "Sonipat",
        "Yamunanagar",
        "Sirsa",
        "Panchkula",
        "Bhiwani",
        "Fatehabad",
        "Rewari",
        "Jind",
      ],
    },
    {
      name: "Himachal Pradesh",
      cities: [
        "Shimla",
        "Solan",
        "Mandi",
        "Dharamshala",
        "Baddi",
        "Nahan",
        "Una",
        "Hamirpur",
        "Kullu",
        "Chamba",
        "Kinnaur",
        "Lahaul and Spiti",
        "Bilaspur",
        "Sirmaur",
        "Mandi",
      ],
    },
    {
      name: "Jharkhand",
      cities: [
        "Ranchi",
        "Dhanbad",
        "Jamshedpur",
        "Bokaro",
        "Deoghar",
        "Hazaribagh",
        "Giridih",
        "Ramgarh",
        "Phusro",
        "Gumla",
        "Dumka",
        "Palamu",
        "Koderma",
        "Chatra",
        "Pakur",
      ],
    },
    {
      name: "Karnataka",
      cities: [
        "Bengaluru",
        "Mysuru",
        "Hubli",
        "Dharwad",
        "Mangaluru",
        "Belagavi",
        "Shimoga",
        "Tumkur",
        "Bagalkot",
        "Chitradurga",
        "Davangere",
        "Kolar",
        "Mandya",
        "Hassan",
        "Udupi",
      ],
    },
    {
      name: "Kerala",
      cities: [
        "Thiruvananthapuram",
        "Kochi",
        "Kozhikode",
        "Kollam",
        "Thrissur",
        "Alappuzha",
        "Palakkad",
        "Kannur",
        "Kottayam",
        "Malappuram",
        "Idukki",
        "Wayanad",
        "Ernakulam",
        "Pathanamthitta",
        "Kasargod",
      ],
    },
    {
      name: "Madhya Pradesh",
      cities: [
        "Indore",
        "Bhopal",
        "Jabalpur",
        "Gwalior",
        "Ujjain",
        "Sagar",
        "Ratlam",
        "Rewa",
        "Satna",
        "Murwara (Katni)",
        "Dewas",
        "Khandwa",
        "Shivpuri",
        "Burhanpur",
        "Mandsaur",
      ],
    },
    {
      name: "Maharashtra",
      cities: [
        "Mumbai",
        "Pune",
        "Nagpur",
        "Thane",
        "Aurangabad",
        "Nashik",
        "Solapur",
        "Amravati",
        "Kolhapur",
        "Satara",
        "Kalyan-Dombivli",
        "Vasai-Virar",
        "Bhiwandi",
        "Akola",
        "Jalna",
      ],
    },
    {
      name: "Manipur",
      cities: [
        "Imphal",
        "Thoubal",
        "Bishnupur",
        "Churachandpur",
        "Kakching",
        "Senapati",
        "Ukhrul",
        "Tamenglong",
        "Moreh",
        "Moijing",
        "Khongjom",
        "Lamdeng",
        "Noney",
        "Chandel",
        "Pherzawl",
      ],
    },
    {
      name: "Meghalaya",
      cities: [
        "Shillong",
        "Tura",
        "Nongstoin",
        "Jowai",
        "Baghmara",
        "Williamnagar",
        "Mairang",
        "Mawkyrwat",
        "Sohra (Cherrapunjee)",
        "Umiam",
        "Nongpoh",
        "Rangsakona",
        "Mawphlang",
        "Pynursla",
        "Khliehriat",
      ],
    },
    {
      name: "Mizoram",
      cities: [
        "Aizawl",
        "Lunglei",
        "Serchhip",
        "Champhai",
        "Kolasib",
        "Lawngtlai",
        "Saiha",
        "Mamit",
        "Biate",
        "Saitual",
        "Hnahthial",
        "Khawzawl",
        "Lunglei",
        "Siaha",
        "Champhai",
      ],
    },
    {
      name: "Nagaland",
      cities: [
        "Kohima",
        "Dimapur",
        "Mokokchung",
        "Tuensang",
        "Wokha",
        "Zunheboto",
        "Phek",
        "Kiphire",
        "Longleng",
        "Mon",
        "Chozuba",
        "Peren",
        "Tseminyu",
        "Zunheboto",
        "Kiphire",
      ],
    },
    {
      name: "Odisha",
      cities: [
        "Bhubaneswar",
        "Cuttack",
        "Rourkela",
        "Berhampur",
        "Sambalpur",
        "Puri",
        "Balasore",
        "Bhadrak",
        "Baripada",
        "Angul",
        "Dhenkanal",
        "Jagatsinghpur",
        "Kendrapara",
        "Khurda",
        "Jajpur",
      ],
    },
    {
      name: "Punjab",
      cities: [
        "Chandigarh",
        "Ludhiana",
        "Amritsar",
        "Jalandhar",
        "Patiala",
        "Mohali",
        "Bathinda",
        "Moga",
        "Hoshiarpur",
        "Fatehgarh Sahib",
        "Rupnagar",
        "SAS Nagar",
        "Faridkot",
        "Muktsar",
        "Tarn Taran",
      ],
    },
    {
      name: "Rajasthan",
      cities: [
        "Jaipur",
        "Udaipur",
        "Jodhpur",
        "Kota",
        "Ajmer",
        "Bikaner",
        "Sikar",
        "Tonk",
        "Churu",
        "Alwar",
        "Pali",
        "Jhunjhunu",
        "Nagaur",
        "Barmer",
        "Dausa",
      ],
    },
    {
      name: "Sikkim",
      cities: [
        "Gangtok",
        "Namchi",
        "Gyalshing",
        "Mangan",
        "Jorethang",
        "Singtam",
        "Pakyong",
        "Rangpo",
        "Yuksom",
        "Sombaria",
        "Khamdong",
        "Assangthang",
        "Daramdin",
        "Dikchu",
        "Sajong",
      ],
    },
    {
      name: "Tamil Nadu",
      cities: [
        "Chennai",
        "Coimbatore",
        "Madurai",
        "Tiruchirappalli",
        "Salem",
        "Erode",
        "Tirunelveli",
        "Tiruppur",
        "Vellore",
        "Dindigul",
        "Karur",
        "Kanyakumari",
        "Pudukkottai",
        "Thanjavur",
        "Kanchipuram",
      ],
    },
    {
      name: "Telangana",
      cities: [
        "Hyderabad",
        "Warangal",
        "Nizamabad",
        "Khammam",
        "Karimnagar",
        "Ranga Reddy",
        "Mahbubnagar",
        "Medak",
        "Nalgonda",
        "Adilabad",
        "Jagtiyal",
        "Suryapet",
        "Vikarabad",
        "Jagtial",
        "Kamareddy",
      ],
    },
    {
      name: "Tripura",
      cities: [
        "Agartala",
        "Udaipur",
        "Sabroom",
        "Dharmanagar",
        "Kailashahar",
        "Belonia",
        "Ambassa",
        "Badharghat",
        "Jirania",
        "Khowai",
        "Moharpara",
        "Teliamura",
        "Ranirbazar",
        "Asharambari",
        "Sepahijala",
      ],
    },
    {
      name: "Uttar Pradesh",
      cities: [
        "Lucknow",
        "Kanpur",
        "Varanasi",
        "Agra",
        "Allahabad (Prayagraj)",
        "Bareilly",
        "Ghaziabad",
        "Meerut",
        "Noida",
        "Aligarh",
        "Jhansi",
        "Moradabad",
        "Firozabad",
        "Saharanpur",
        "Rampur",
        "Bijnor",
      ],
    },
    {
      name: "Uttarakhand",
      cities: [
        "Dehradun",
        "Haridwar",
        "Nainital",
        "Rudrapur",
        "Roorkee",
        "Haldwani",
        "Kashipur",
        "Pauri Garhwal",
        "Champawat",
        "Tehri Garhwal",
        "Lansdowne",
        "Bageshwar",
        "Almora",
        "Ranikhet",
        "Kotdwar",
      ],
    },
    {
      name: "West Bengal",
      cities: [
        "Kolkata",
        "Siliguri",
        "Howrah",
        "Durgapur",
        "Asansol",
        "Bardhaman",
        "Malda",
        "Berhampore",
        "Kalyani",
        "Cooch Behar",
        "Siliguri",
        "Jalpaiguri",
        "Nadia",
        "Hooghly",
        "Birbhum",
      ],
    },
    // New union territories
    {
      name: "Andaman and Nicobar Islands",
      cities: [
        "Port Blair",
        "Havelock Island",
        "Neil Island",
        "Baratang",
        "Diglipur",
        "Mayabunder",
        "Little Andaman",
        "Long Island",
        "Ritchie's Archipelago",
        "Campbell Bay",
      ],
    },
    {
      name: "Chandigarh",
      cities: [
        "Chandigarh",
      ],
    },
    {
      name: "Dadra and Nagar Haveli and Daman and Diu",
      cities: [
        "Diu",
        "Daman",
        "Silvassa",
      ],
    },
    {
      name: "Lakshadweep",
      cities: [
        "Kavaratti",
        "Agatti",
        "Minicoy",
        "Kalapeni",
        "Kadmat",
        "Kiltan",
        "Amini",
        "Bangaram",
      ],
    },
    {
      name: "Delhi",
      cities: [
        "New Delhi",
        "Dwarka",
        "Rohini",
        "Pitampura",
        "Lajpat Nagar",
        "Karol Bagh",
        "Greater Kailash",
        "Khan Market",
        "Connaught Place",
        "Vasant Kunj",
        "Saket",
        "Janakpuri",
        "Moti Nagar",
        "Chandni Chowk",
        "Nehru Place",
      ],
    },
    {
      name: "Puducherry",
      cities: [
        "Puducherry",
        "Karaikal",
        "Yanam",
        "Mahe",
      ],
    },
    {
      name: "Ladakh",
      cities: [
        "Leh",
        "Kargil",
      ],
    },
    {
      name: "Jammu and Kashmir",
      cities: [
        "Srinagar",
        "Jammu",
        "Anantnag",
        "Pulwama",
        "Baramulla",
        "Kulgam",
        "Shopian",
        "Rajouri",
        "Poonch",
        "Doda",
        "Kishtwar",
        "Reasi",
        "Udhampur",
        "Samba",
        "Kathua",
      ],
    },
  ],
},
  {
    title: "Japan",
    slug: "japan",
    states: [
      {
        name: "Tokyo",
        cities: ["Tokyo"],
      },
      {
        name: "Osaka",
        cities: ["Osaka"],
      },
      {
        name: "Kyoto",
        cities: ["Kyoto"],
      },
      {
        name: "Hokkaido",
        cities: ["Sapporo", "Hakodate", "Asahikawa", "Obihiro", "Kushiro"],
      },
    ],
  },
  {
    title: "Brazil",
    slug: "brazil",
    states: [
      {
        name: "São Paulo",
        cities: ["São Paulo", "Campinas", "Santos", "Sorocaba", "Jundiaí"],
      },
      {
        name: "Rio de Janeiro",
        cities: [
          "Rio de Janeiro",
          "Niterói",
          "Campos dos Goytacazes",
          "Volta Redonda",
          "Macaé",
        ],
      },
      {
        name: "Minas Gerais",
        cities: [
          "Belo Horizonte",
          "Uberlândia",
          "Juiz de Fora",
          "Betim",
          "Contagem",
        ],
      },
      {
        name: "Bahia",
        cities: [
          "Salvador",
          "Feira de Santana",
          "Vitória da Conquista",
          "Camaçari",
          "Itabuna",
        ],
      },
    ],
  },
  {
    title: "South Africa",
    slug: "south-africa",
    states: [
      {
        name: "Gauteng",
        cities: ["Johannesburg", "Pretoria", "Midrand", "Centurion", "Sandton"],
      },
      {
        name: "Western Cape",
        cities: ["Cape Town", "Stellenbosch", "Paarl", "George", "Knysna"],
      },
      {
        name: "KwaZulu-Natal",
        cities: [
          "Durban",
          "Pietermaritzburg",
          "Richards Bay",
          "Umtata",
          "Newcastle",
        ],
      },
      {
        name: "Eastern Cape",
        cities: [
          "Port Elizabeth",
          "East London",
          "Gqeberha",
          "Mthatha",
          "Queenstown",
        ],
      },
    ],
  },
  {
    title: "Mexico",
    slug: "mexico",
    states: [
      {
        name: "Mexico City",
        cities: ["Mexico City"],
      },
      {
        name: "Jalisco",
        cities: [
          "Guadalajara",
          "Puerto Vallarta",
          "Tlaquepaque",
          "Tequila",
          "Zapopan",
        ],
      },
      {
        name: "Nuevo León",
        cities: [
          "Monterrey",
          "San Nicolás",
          "Apodaca",
          "San Pedro",
          "Santa Catarina",
        ],
      },
      {
        name: "Yucatán",
        cities: ["Mérida", "Valladolid", "Tizimin", "Progreso", "Izamal"],
      },
    ],
  },
  {
    title: "Italy",
    slug: "italy",
    states: [
      {
        name: "Lazio",
        cities: ["Rome", "Fiumicino", "Viterbo", "Latina", "Rieti"],
      },
      {
        name: "Lombardy",
        cities: ["Milan", "Bergamo", "Brescia", "Monza", "Como"],
      },
      {
        name: "Campania",
        cities: ["Naples", "Salerno", "Caserta", "Avellino", "Benevento"],
      },
      {
        name: "Sicily",
        cities: ["Palermo", "Catania", "Messina", "Trapani", "Agrigento"],
      },
    ],
  },
  {
    title: "Spain",
    slug: "spain",
    states: [
      {
        name: "Madrid",
        cities: ["Madrid"],
      },
      {
        name: "Catalonia",
        cities: ["Barcelona", "Girona", "Tarragona", "Lleida", "Reus"],
      },
      {
        name: "Andalusia",
        cities: ["Seville", "Malaga", "Granada", "Córdoba", "Almeria"],
      },
      {
        name: "Valencia",
        cities: ["Valencia", "Alicante", "Castellón", "Elche", "Benidorm"],
      },
    ],
  },
  {
    title: "Russia",
    slug: "russia",
    states: [
      {
        name: "Moscow",
        cities: ["Moscow"],
      },
      {
        name: "Saint Petersburg",
        cities: ["Saint Petersburg"],
      },
      {
        name: "Novosibirsk",
        cities: ["Novosibirsk"],
      },
      {
        name: "Yekaterinburg",
        cities: ["Yekaterinburg"],
      },
    ],
  },
];

export const genderOptions = [
  {
    id: 0,
    title: "Select your gender",
    slug: "",
    description: "",
  },
  {
    id: 1,
    title: "Male",
    slug: "male",
    description: "Identify as male.",
  },
  {
    id: 2,
    title: "Female",
    slug: "female",
    description: "Identify as female.",
  },
  {
    id: 3,
    title: "Non-Binary",
    slug: "non-binary",
    description: "Identify as non-binary, genderqueer, or genderfluid.",
  },
  {
    id: 4,
    title: "Prefer Not to Say",
    slug: "prefer-not-to-say",
    description: "Prefer not to disclose gender.",
  },
  {
    id: 5,
    title: "Other",
    slug: "other",
    description: "Identify as a gender not listed here.",
  },
];
export const occupations = [
  {
    title: "Portrait Photographer",
    slug: "portrait-photographer",
  },
  {
    title: "Event Photographer",
    slug: "event-photographer",
  },
  {
    title: "Photojournalist",
    slug: "photojournalist",
  },
  {
    title: "Commercial Photographer",
    slug: "commercial-photographer",
  },
  {
    title: "Fashion Photographer",
    slug: "fashion-photographer",
  },
  {
    title: "Web Developer",
    slug: "web-developer",
  },
  {
    title: "UI/UX Designer",
    slug: "ui-ux-designer",
  },
  {
    title: "Graphic Designer",
    slug: "graphic-designer",
  },
  {
    title: "Multimedia Artist",
    slug: "multimedia-artist",
  },
  {
    title: "Content Creator",
    slug: "content-creator",
  },
  {
    title: "Landscape Photographer",
    slug: "landscape-photographer",
  },
  {
    title: "Architectural Photographer",
    slug: "architectural-photographer",
  },
  {
    title: "Real Estate Photographer",
    slug: "real-estate-photographer",
  },
  {
    title: "Product Photographer",
    slug: "product-photographer",
  },
  {
    title: "Food Photographer",
    slug: "food-photographer",
  },
  {
    title: "Fine Art Photographer",
    slug: "fine-art-photographer",
  },
  {
    title: "Sports Photographer",
    slug: "sports-photographer",
  },
  {
    title: "Wildlife Photographer",
    slug: "wildlife-photographer",
  },
  {
    title: "Wedding Photographer",
    slug: "wedding-photographer",
  },
  {
    title: "Street Photographer",
    slug: "street-photographer",
  },
  {
    title: "Videographer",
    slug: "videographer",
  },
  {
    title: "Film Editor",
    slug: "film-editor",
  },
  {
    title: "Front-End Developer",
    slug: "front-end-developer",
  },
  {
    title: "Back-End Developer",
    slug: "back-end-developer",
  },
  {
    title: "Full-Stack Developer",
    slug: "full-stack-developer",
  },
  {
    title: "Mobile App Developer",
    slug: "mobile-app-developer",
  },
  {
    title: "Software Engineer",
    slug: "software-engineer",
  },
  {
    title: "Data Analyst",
    slug: "data-analyst",
  },
  {
    title: "SEO Specialist",
    slug: "seo-specialist",
  },
  {
    title: "Digital Marketing Specialist",
    slug: "digital-marketing-specialist",
  },
];
export const clientServices = [
  {
    title: "No cost to join",
    description:
      "Register and browse talent profiles, explore projects, or even book a consultation.",
  },
  {
    title: "Post a job and hire top talent",
    description:
      "Finding talent doesn't have to be a chore. Post a job or we can search for you!",
  },
  {
    title: "Work with the best—without breaking the bank",
    description:
      "Upwork makes it affordable to up your work and take advantage of low transaction rates.",
  },
];
export const freelacerServices = [
  {
    title: "Showcase Your Portfolio for Free",
    description:
      "Join the platform and create a stunning profile to attract clients. It's free and easy to get started.",
  },
  {
    title: "Find Projects Tailored to Your Skills",
    description:
      "Connect with clients who need your expertise. Apply to jobs that match your style and vision.",
  },
  {
    title: "Grow Your Freelance Photography Business",
    description:
      "Access a network of clients while keeping more of your earnings with low fees and transparent pricing.",
  },
];
export const postsArray = [
  {
    // This post is about front-end development, focusing on Web Components, React, and Angular.
    textMessage:
      "I’ve been exploring the latest trends in front-end development, and I’m particularly interested in how Web Components are being integrated into modern frameworks like React and Angular. If anyone has experience with this or knows of some good resources, I’d love to hear your thoughts. Also, has anyone experimented with custom elements and shadow DOM in their projects? I’m curious about the potential benefits and challenges.",
    communityId: "64e9b1a1c25e4f00124c57a9", // ID of the community related to front-end development.
    status: true, // Indicates the post is active/visible.
    createdBy: "64e9b2d1c25e4f00124c57aa", // ID of the user who created the post.
    comments: [
      {
        text: "I've been using Web Components with React, and it’s a game changer! The integration is smooth, but there are some challenges with styling. Shadow DOM can be tricky.",
        commentedBy: "64e9b2d1c25e4f00124c57af", // ID of the user who commented.
      },
      {
        text: "I’m also curious about how Angular handles custom elements. Any good resources you can share?",
        commentedBy: "64e9b2d1c25e4f00124c57b0", // ID of another user who commented.
      },
    ],
  },
  {
    // This post is about a photography project focusing on urban landscapes with natural light.
    textMessage:
      "Just finished a new photography project where I tried to capture the essence of urban landscapes in different light settings. The challenge was to convey the mood of each scene using natural light alone. I’d appreciate any feedback from fellow photographers on how to improve my technique, especially in low-light situations. Check out the attached images and let me know what you think!",
    communityId: "64e9b1a1c25e4f00124c57b0", // ID of the photography-related community.
    status: true, // Indicates the post is active/visible.
    createdBy: "64e9b2d1c25e4f00124c57ab", // ID of the user who created the post.
    comments: [
      {
        text: "Your use of natural light is impressive, especially in urban settings. For low-light, try experimenting with longer exposures or higher ISO settings.",
        commentedBy: "64e9b2d1c25e4f00124c57b1", // ID of the user who commented.
      },
      {
        text: "The mood in your photos is very evocative. Maybe try incorporating reflections or shadows to add more depth?",
        commentedBy: "64e9b2d1c25e4f00124c57b2", // ID of another user who commented.
      },
    ],
  },
  {
    // This post discusses backend development, with a focus on security and implementing OAuth 2.0.
    textMessage:
      "Security in backend development is something I’m deeply passionate about. Lately, I’ve been focusing on implementing OAuth 2.0 for securing APIs. I’m curious about how others are handling token expiration and refresh logic. What are some best practices you’ve found effective in preventing common vulnerabilities like CSRF and XSS attacks in your backend systems? Let’s discuss strategies for maintaining robust security while ensuring a smooth user experience.",
    communityId: "64e9b1a1c25e4f00124c57b1", // ID of the backend development/security community.
    status: true, // Indicates the post is active/visible.
    createdBy: "64e9b2d1c25e4f00124c57ac", // ID of the user who created the post.
    comments: [
      {
        text: "For token expiration, I’ve found that using refresh tokens with a short lifespan works well. It keeps the security tight without impacting the user experience too much.",
        commentedBy: "64e9b2d1c25e4f00124c57b3", // ID of the user who commented.
      },
      {
        text: "CSRF can be tricky. I recommend using SameSite cookies and CSRF tokens in forms. Also, XSS prevention with proper input validation is a must.",
        commentedBy: "64e9b2d1c25e4f00124c57b4", // ID of another user who commented.
      },
    ],
  },
  {
    // This post is from a UI/UX designer discussing the psychology of design and user research.
    textMessage:
      "As a UI/UX designer, I’m constantly seeking ways to improve my skills. Recently, I’ve been studying the psychology of design and how it influences user behavior. I’d love to get some feedback from this community on how you approach user research and testing. Do you have any particular methods or tools that you swear by? Also, what’s your process for iterating on designs based on user feedback? Looking forward to exchanging ideas and learning from your experiences.",
    communityId: "64e9b1a1c25e4f00124c57b2", // ID of the UI/UX design community.
    status: true, // Indicates the post is active/visible.
    createdBy: "64e9b2d1c25e4f00124c57ad", // ID of the user who created the post.
    comments: [
      {
        text: "User testing is key! I always use A/B testing with tools like Optimizely. It’s great for seeing what resonates with users.",
        commentedBy: "64e9b2d1c25e4f00124c57b5", // ID of the user who commented.
      },
      {
        text: "For user research, I’ve been using remote usability testing tools like UserTesting. They provide insightful data that can guide design decisions.",
        commentedBy: "64e9b2d1c25e4f00124c57b6", // ID of another user who commented.
      },
    ],
  },
  {
    // This post is about a web developer seeking feedback on their portfolio.
    textMessage:
      "I’ve been working on my portfolio for a while now, and I’m finally ready to share it with the world. It’s a collection of my best work in web development, including some personal projects and collaborations. I’d love to get some feedback, especially on the overall design and usability. How do you think I can make it stand out in a competitive industry? Any suggestions on how to present my skills and experience more effectively?",
    communityId: "64e9b1a1c25e4f00124c57b3", // ID of the web development community.
    status: true, // Indicates the post is active/visible.
    createdBy: "64e9b2d1c25e4f00124c57ae", // ID of the user who created the post.
    comments: [
      {
        text: "Your portfolio looks great! Consider adding more interactive elements to showcase your skills. It could make your portfolio more engaging.",
        commentedBy: "64e9b2d1c25e4f00124c57b7", // ID of the user who commented.
      },
      {
        text: "I’d suggest highlighting your most recent projects first. It gives a sense of your current skill level and expertise.",
        commentedBy: "64e9b2d1c25e4f00124c57b8", // ID of another user who commented.
      },
    ],
  },
];
export const communitiesConstant = [
  {
    name: "Frontend Developers",
    icon: "💻",
  },
  {
    name: "Nature Lovers",
    icon: "🌳",
  },
  {
    name: "Tech Innovators",
    icon: "⚙️",
  },
  {
    name: "Travel Bloggers",
    icon: "✈️",
  },
];

export const communityCategories = [
  {
    icon: "img", // Replace with the actual icon component or SVG
    categoryName: "Web Development",
    posts: [
      {
        title: "Best practices for React development",
        author: "Jane Doe",
        date: "2024-08-19",
        content: "Discussion on best practices and patterns for React apps...",
      },
      {
        title: "What's new in HTML5",
        author: "John Smith",
        date: "2024-08-18",
        content: "Exploring the latest features in HTML5...",
      },
    ],
  },
  {
    icon: "img",
    categoryName: "Photography",
    posts: [
      {
        title: "Tips for stunning landscape photography",
        author: "Alice Green",
        date: "2024-08-17",
        content:
          "Learn how to capture breathtaking landscapes with these tips...",
      },
      {
        title: "Understanding the exposure triangle",
        author: "Bob White",
        date: "2024-08-16",
        content: "A guide to mastering exposure settings for better photos...",
      },
    ],
  },
  {
    icon: "img",
    categoryName: "Graphic Design",
    posts: [
      {
        title: "Creating effective logos",
        author: "Sarah Blue",
        date: "2024-08-15",
        content: "A walkthrough of the logo design process...",
      },
      {
        title: "Typography tips for designers",
        author: "David Brown",
        date: "2024-08-14",
        content: "Enhance your designs with these typography techniques...",
      },
    ],
  },
  // Add more categories as needed
];

export const skills = [
  "JavaScript",
  "HTML",
  "CSS",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Redux",
  "TypeScript",
  "RESTful APIs",
  "GraphQL",
  "Webpack",
  "Babel",
  "Git/GitHub",
  "Responsive Design",
  "Bootstrap",
  "Tailwind CSS",
  "Material-UI",
  "Testing (Jest, Mocha, Chai)",
  "Authentication (JWT, OAuth)",
  "State Management",
  "Database Design",
  "Mongoose",
  "API Integration",
  "WebSocket",
  "Deployment (Heroku, Netlify, Vercel)",
  "Docker",
  "CI/CD",
  "Version Control",
  "Problem Solving",
  "Agile Methodology",
];

export const jobsData = [
  {
    title: "Frontend Developer",
    company: "Tech Corp",
    location: "New York, NY",
    type: "Full-time",
    description:
      "We are looking for a skilled Frontend Developer with experience in React and Tailwind CSS to join our team. The ideal candidate will have a deep understanding of modern web development practices and be able to work closely with our design team to bring innovative solutions to life.",
    experience: "3-5 years",
    skills: ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Backend Developer",
    company: "Innovatech",
    location: "San Francisco, CA",
    type: "Part-time",
    description:
      "Seeking a Backend Developer with expertise in Node.js and MongoDB to work on our cloud-based applications. This role requires a strong understanding of server-side development and database management, as well as the ability to collaborate effectively with front-end developers.",
    experience: "4-6 years",
    skills: [
      "Node.js",
      "MongoDB",
      "Express.js",
      "API Design",
      "Database Management",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Web Solutions",
    location: "Austin, TX",
    type: "Remote",
    description:
      "We are searching for a Full Stack Developer who is proficient in both front-end and back-end technologies. The successful candidate will have experience with JavaScript frameworks such as React and Node.js, as well as a solid understanding of RESTful APIs and database design.",
    experience: "5-7 years",
    skills: [
      "React",
      "Node.js",
      "RESTful APIs",
      "Database Design",
      "JavaScript",
    ],
  },
  {
    title: "UI/UX Designer",
    company: "Creative Minds",
    location: "Los Angeles, CA",
    type: "Contract",
    description:
      "Creative Minds is looking for a UI/UX Designer to help us create user-friendly interfaces and enhance the user experience for our digital products. The ideal candidate should have a keen eye for detail and be able to design with both aesthetics and functionality in mind.",
    experience: "2-4 years",
    skills: ["UI Design", "UX Research", "Adobe XD", "Figma", "Prototyping"],
  },
  {
    title: "DevOps Engineer",
    company: "Cloud Innovators",
    location: "Seattle, WA",
    type: "Full-time",
    description:
      "Join our team as a DevOps Engineer and play a crucial role in managing our cloud infrastructure. You will work with cutting-edge technologies to automate deployment processes and ensure the reliability and scalability of our systems.",
    experience: "3-5 years",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Automation"],
  },
  {
    title: "Data Scientist",
    company: "Data Insights",
    location: "Boston, MA",
    type: "Full-time",
    description:
      "We are hiring a Data Scientist to analyze complex datasets and provide actionable insights to drive business decisions. The role requires strong analytical skills and experience with data visualization tools, as well as proficiency in Python and SQL.",
    experience: "4-6 years",
    skills: [
      "Python",
      "SQL",
      "Data Analysis",
      "Machine Learning",
      "Data Visualization",
    ],
  },
  {
    title: "Mobile App Developer",
    company: "Appify",
    location: "Chicago, IL",
    type: "Full-time",
    description:
      "Appify is looking for a Mobile App Developer with experience in developing iOS and Android applications. The successful candidate will have strong programming skills in Swift and Kotlin, and be able to work in a fast-paced environment to deliver high-quality mobile solutions.",
    experience: "3-5 years",
    skills: [
      "Swift",
      "Kotlin",
      "iOS Development",
      "Android Development",
      "Mobile UI/UX",
    ],
  },
];
export const imageSrc = [
  "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b850995827afaa8db4_633c148b9b819badd7bbcde8_627a8d3e69e23713762e6b34_Vector.svg",
  "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359ba3497cf06ff9e8f71_633c14899b819b7aafbbcde1_627a8da607be73fd13e76134_basf.svg",
  "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b9b2d3d56a1d071ef8_633c148a12c2cf0d8c755473_61957d908c68e7c692fe642e_haufe.svg",
  "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359bafc1c77261cbab22d_633c148a8b25dcfcd2e387b2_61957e512832dbf5efe8cdc6_mural.svg",
  "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d485bb37c8fc880cdfad_bcgp-1.svg",
  "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d300a4cce143f24735d3_sevdesk-black.svg",
  "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88f5_660191f0bd52de169c0dbc94_Logo-black.svg",
  "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6666ed38989e70633b7658b5_Singularity_logo.svg",
  "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6694f0ff430a1585cff47451_botify-black.svg",
  "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66979aab7dc661744003a210_logo-black.svg",
  "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b5306b05c2b704224d_65b2ca264ed8d89bad9b331c_Logo%2520Black%25201.svg",
  "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8e7a169e0b41018de63_Intesneye-logo-black.svg",
  "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b62de955b9aa4d2ddb_64868958b0d3ba04534cc3b3_Silvr_logo_black.png",
  "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d76e013990180ea2be31_jungle-logo-black.svg",
  "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b997d53302df1b9072_633c148ad1bb7f022754664e_626be03929598bb074de4cc1_Remind.webp",
  "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b8724afca0a36e7e8d_633c148cf63c4467416f9bea_61ee848c05ba9c9caff5fd64_yahoo.svg",
  "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b850995827afaa8db4_633c148b9b819badd7bbcde8_627a8d3e69e23713762e6b34_Vector.svg",
  "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359ba3497cf06ff9e8f71_633c14899b819b7aafbbcde1_627a8da607be73fd13e76134_basf.svg",
  "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b9b2d3d56a1d071ef8_633c148a12c2cf0d8c755473_61957d908c68e7c692fe642e_haufe.svg",
  "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359bafc1c77261cbab22d_633c148a8b25dcfcd2e387b2_61957e512832dbf5efe8cdc6_mural.svg",
  "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d485bb37c8fc880cdfad_bcgp-1.svg",
  "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d300a4cce143f24735d3_sevdesk-black.svg",
  "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88f5_660191f0bd52de169c0dbc94_Logo-black.svg",
  "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6666ed38989e70633b7658b5_Singularity_logo.svg",
  "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6694f0ff430a1585cff47451_botify-black.svg",
  "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66979aab7dc661744003a210_logo-black.svg",
  "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b5306b05c2b704224d_65b2ca264ed8d89bad9b331c_Logo%2520Black%25201.svg",
  "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8e7a169e0b41018de63_Intesneye-logo-black.svg",
  "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b62de955b9aa4d2ddb_64868958b0d3ba04534cc3b3_Silvr_logo_black.png",
  "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d76e013990180ea2be31_jungle-logo-black.svg",
  "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b997d53302df1b9072_633c148ad1bb7f022754664e_626be03929598bb074de4cc1_Remind.webp",
  "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b8724afca0a36e7e8d_633c148cf63c4467416f9bea_61ee848c05ba9c9caff5fd64_yahoo.svg",
];
