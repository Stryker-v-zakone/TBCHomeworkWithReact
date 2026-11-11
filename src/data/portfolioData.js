export const personalInfo = {
  name: "მიხეილ საგრადიანი",
  englishName: "Mikheil Sagradian",
  role: "Front-End & React დეველოპერი",
  status: "ღია ვარ სამუშაო შემოთავაზებებისთვის",
  availableForWork: true,
  bio: "ვქმნი თანამედროვე, სწრაფ და მომხმარებელზე მორგებულ ვებ აპლიკაციებს React-ისა და უახლესი ტექნოლოგიების გამოყენებით. ყურადღებას ვამახვილებ სუფთა კოდზე, კომპონენტურ არქიტექტურასა და ინტუიციურ UI/UX-ზე.",
  location: "თბილისი, საქართველო",
  email: "mikheil.sagradian@example.com",
  phone: "+995 599 12 34 56",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  telegram: "https://t.me",
  resumeUrl: "#contact"
};

export const statsData = [
  {
    id: 1,
    number: "2+",
    label: "წლიანი გამოცდილება",
    sublabel: "React ეკოსისტემაში",
    iconName: "Briefcase"
  },
  {
    id: 2,
    number: "20+",
    label: "წარმატებული პროექტი",
    sublabel: "ვებ და მობილური UI",
    iconName: "FolderGit2"
  },
  {
    id: 3,
    number: "100%",
    label: "კმაყოფილი პარტნიორი",
    sublabel: "ხარისხიანი შედეგი",
    iconName: "Smile"
  },
  {
    id: 4,
    number: "15+",
    label: "ტექნოლოგიური ხელსაწყო",
    sublabel: "თანამედროვე სტეკი",
    iconName: "Code2"
  }
];

export const skillsCategories = [
  {
    id: "frontend",
    title: "Front-End დეველოპმენტი",
    description: "თანამედროვე, სწრაფი და ინტერაქტიული სამომხმარებლო ინტერფეისების აგება.",
    iconName: "Layout",
    color: "#6366f1",
    skills: [
      { name: "React.js", level: 95, tag: "ძირითადი" },
      { name: "JavaScript (ES6+)", level: 90, tag: "მოწინავე" },
      { name: "TypeScript", level: 80, tag: "ტიპიზაცია" },
      { name: "HTML5 & CSS3 / SCSS", level: 95, tag: "სემანტიკა" },
      { name: "Tailwind CSS", level: 90, tag: "სტილიზაცია" },
      { name: "Redux Toolkit / Zustand", level: 85, tag: "State Management" }
    ]
  },
  {
    id: "tools",
    title: "ხელსაწყოები და გარემო",
    description: "სამუშაო პროცესის ოპტიმიზაცია, ვერსიების კონტროლი და ასამბლეა.",
    iconName: "Cpu",
    color: "#a855f7",
    skills: [
      { name: "Git & GitHub", level: 90, tag: "ვერსიონირება" },
      { name: "Vite & Webpack", level: 85, tag: "Build Tools" },
      { name: "Figma to Code", level: 90, tag: "UI/UX დიზაინი" },
      { name: "REST APIs & JSON", level: 95, tag: "ინტეგრაცია" },
      { name: "Postman", level: 80, tag: "ტესტირება" },
      { name: "NPM & Yarn", level: 90, tag: "პაკეტები" }
    ]
  },
  {
    id: "core",
    title: "პრინციპები და უნარები",
    description: "სუფთა კოდის წერის სტანდარტები, ოპტიმიზაცია და გუნდური მუშაობა.",
    iconName: "Sparkles",
    color: "#ec4899",
    skills: [
      { name: "Component-Driven Architecture", level: 95, tag: "მოდულარობა" },
      { name: "Responsive & Mobile-First", level: 95, tag: "ადაპტაცია" },
      { name: "Web Performance & SEO", level: 80, tag: "ოპტიმიზაცია" },
      { name: "Clean Code & Refactoring", level: 90, tag: "სტანდარტები" },
      { name: "Agile & Scrum", level: 85, tag: "გუნდურობა" },
      { name: "Accessibility (a11y)", level: 80, tag: "ხელმისაწვდომობა" }
    ]
  }
];

export const projectCategories = [
  { id: "all", label: "ყველა პროექტი" },
  { id: "react", label: "React აპლიკაციები" },
  { id: "fullstack", label: "Full-Stack & APIs" },
  { id: "ui", label: "UI/UX & დიზაინი" }
];

export const projectsData = [
  {
    id: 1,
    title: "TechNova E-Commerce პლატფორმა",
    description: "თანამედროვე ონლაინ მაღაზია პროდუქციის ფილტრაციით, კალათის მართვით, ლოკალური შენახვითა და შეკვეთის პროცესის სრული იმიტაციით.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    category: "react",
    tags: ["React", "Context API", "Tailwind CSS", "LocalStorage", "Responsive"],
    featured: true,
    demoUrl: "https://example.com/demo1",
    githubUrl: "https://github.com/example/technova-shop"
  },
  {
    id: 2,
    title: "TaskFlow - დავალებების სამართავი სისტემა",
    description: "Trello-ს სტილის Kanban დაფა drag & drop ფუნქციით, დავალებების პრიორიტეტებით, ვადებითა და პროგრესის დეტალური სტატისტიკით.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    category: "react",
    tags: ["React", "HTML5 DnD", "CSS Modules", "Custom Hooks"],
    featured: true,
    demoUrl: "https://example.com/demo2",
    githubUrl: "https://github.com/example/taskflow"
  },
  {
    id: 3,
    title: "CryptoPulse - ფინანსური მონიტორინგი",
    description: "კრიპტოვალუტის ფასების ცოცხალი ანალიტიკა, გრაფიკები, ვალუტის კალკულატორი და საინვესტიციო პორტფელის კალკულაცია რეალურ მონაცემებზე.",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80",
    category: "fullstack",
    tags: ["React", "CoinGecko API", "Chart.js", "Axios", "Async/Await"],
    featured: true,
    demoUrl: "https://example.com/demo3",
    githubUrl: "https://github.com/example/cryptopulse"
  },
  {
    id: 4,
    title: "Georgia Explorer - ტურიზმის გზამკვლევი",
    description: "ინტერაქტიული პლატფორმა საქართველოს ულამაზესი კუთხეების აღმოსაჩენად, ინტერაქტიული რუკით, ლოკაციების ფილტრითა და ტურების დაჯავშნით.",
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=800&q=80",
    category: "ui",
    tags: ["React", "Leaflet Maps", "Styled Components", "UX Design"],
    featured: false,
    demoUrl: "https://example.com/demo4",
    githubUrl: "https://github.com/example/georgia-explorer"
  },
  {
    id: 5,
    title: "WeatherSphere - ამინდის ჭკვიანი პროგნოზი",
    description: "გლობალური ამინდის პროგნოზი 5-დღიანი დეტალური ანალიზით, ანიმაციური ილუსტრაციებითა და გეოლოკაციის ავტომატური ამოცნობით.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&q=80",
    category: "fullstack",
    tags: ["React", "OpenWeather API", "Geolocation API", "CSS Grid"],
    featured: false,
    demoUrl: "https://example.com/demo5",
    githubUrl: "https://github.com/example/weathersphere"
  },
  {
    id: 6,
    title: "PixelCraft - UI კომპონენტების ბიბლიოთეკა",
    description: "ხელახლა გამოყენებადი (Reusable) UI ელემენტების დიზაინ სისტემა რეაქთისთვის, დოკუმენტაციით, კოდის გადაწერისა და კოპირების შესაძლებლობით.",
    image: "https://images.unsplash.com/photo-1581291518655-9523c932edd2?auto=format&fit=crop&w=800&q=80",
    category: "ui",
    tags: ["React", "Storybook", "CSS Variables", "NPM Package"],
    featured: false,
    demoUrl: "https://example.com/demo6",
    githubUrl: "https://github.com/example/pixelcraft-ui"
  }
];

export const experienceData = [
  {
    id: 1,
    period: "2024 - დღემდე",
    role: "Junior Front-End Developer",
    organization: "InnovateTech Georgia",
    location: "თბილისი",
    description: "ვმუშაობ მომხმარებლის ინტერფეისის შემუშავებაზე, React კომპონენტების შექმნასა და backend API-ებთან ინტეგრაციაზე. მონაწილეობას ვიღებ კოდის მიმოხილვებში (Code Review).",
    highlights: [
      "კომპონენტების მოდულარული არქიტექტურის დანერგვა",
      "აპლიკაციის ჩატვირთვის დროის 25%-ით შემცირება",
      "გუნდური მუშაობა Agile/Scrum მეთოდოლოგიით"
    ],
    type: "work"
  },
  {
    id: 2,
    period: "2023 - 2024",
    role: "Front-End Development სტაჟიორი",
    organization: "TBC IT Academy",
    location: "თბილისი",
    description: "გავიარე ინტენსიური პრაქტიკული კურსი React-ისა და თანამედროვე JavaScript-ის მიმართულებით. განვახორციელე რამდენიმე რეალური მასშტაბური სასწავლო პროექტი.",
    highlights: [
      "React Hooks, Context API და State Management-ის ათვისება",
      "რესპონსიული და ადაპტირებული დიზაინის შექმნა",
      "საუკეთესო პრაქტიკების (Best Practices) გაცნობა"
    ],
    type: "education"
  },
  {
    id: 3,
    period: "2020 - 2024",
    role: "კომპიუტერული მეცნიერების ბაკალავრი",
    organization: "თბილისის სახელმწიფო უნივერსიტეტი (TSU)",
    location: "თბილისი",
    description: "საფუძვლიანად შევისწავლე ალგორითმები, მონაცემთა სტრუქტურები, ობიექტზე ორიენტირებული პროგრამირება და პროგრამული უზრუნველყოფის ინჟინერია.",
    highlights: [
      "ალგორითმები და მონაცემთა სტრუქტურები",
      "მონაცემთა ბაზები და ქსელური არქიტექტურა",
      "საბაკალავრო ნაშრომი ვებ-ტექნოლოგიების ოპტიმიზაციაზე"
    ],
    type: "education"
  }
];

export const servicesData = [
  {
    id: 1,
    title: "React ვებ აპლიკაციები",
    description: "სწრაფი, მასშტაბირებადი Single Page Application-ების (SPA) აგება თანამედროვე სტანდარტების დაცვით.",
    iconName: "Code",
    badge: "პოპულარული"
  },
  {
    id: 2,
    title: "მოდულარული კომპონენტები",
    description: "მრავალჯერ გამოყენებადი (Reusable), დატესტილი და ადვილად მართვადი კომპონენტების შემუშავება.",
    iconName: "Layers",
    badge: "არქიტექტურა"
  },
  {
    id: 3,
    title: "UI/UX დიზაინის ინტეგრაცია",
    description: "Figma-ს დიზაინების გადატანა რეალურ, პიქსელ-ზუსტ და რესპონსიულ ვებ გვერდებში.",
    iconName: "Palette",
    badge: "დიზაინი"
  },
  {
    id: 4,
    title: "API ინტეგრაცია & ოპტიმიზაცია",
    description: "RESTful და GraphQL API-ებთან ეფექტური კავშირი, მონაცემთა კეშირება და გვერდების აჩქარება.",
    iconName: "Zap",
    badge: "ეფექტურობა"
  }
];
