# 🚀 React პორტფოლიო | TBC IT Academy Homework

თანამედროვე, სწრაფი და სრულად ადაპტირებული (Responsive) პორტფოლიოსა და ვებ აპლიკაციის საიტი, შექმნილი **React 19**-ის, **React Router v7**-ისა და **Vite**-ის გამოყენებით.

დეველოპერი: **მიხეილ საგრადიანი (Mikheil Sagradian)**

---

## 📁 პროექტის სტრუქტურა და გვერდები

```text
src/
├── pages/                       # 📄 როუტინგის გვერდები (Multi-Page Routing)
│   ├── HomePage.jsx             # მთავარი პორტფოლიოს გვერდი (Hero, About, Skills, Projects, Experience, Contact)
│   ├── UsersPage.jsx            # 🌟 ახალი გვერდი: JSONPlaceholder API (/users) + Live Search
│   ├── NotFoundPage.jsx         # 404 შეცდომის გვერდი
│   └── index.js
│
├── components/
│   ├── common/                  # 🔄 განმეორებადი კომპონენტები (Reusable UI)
│   │   ├── SearchBar.jsx        # 🔍 რეალურ დროში ძებნის კომპონენტი გასუფთავებისა და რაოდენობის ინდიკატორით
│   │   ├── UserCard.jsx         # 👤 API მომხმარებლის ბარათი (ავატარი, სახელი, კომპანია, ქალაქი, კონტაქტები)
│   │   ├── UserDetailsModal.jsx # 📋 მომხმარებლის სრული დეტალების მოდალური ფანჯარა (Geo, მისამართი, Catchphrase)
│   │   ├── ProjectCard.jsx      # 💻 პროექტის ბარათი (სურათი, ტეგები, Live Demo, GitHub)
│   │   ├── SkillCard.jsx        # ⚡ უნარების ბარათი პროგრეს-ბარებით
│   │   ├── StatCard.jsx         # 📊 რიცხვითი სტატისტიკის ბარათი
│   │   ├── ExperienceCard.jsx   # 🎓 სამუშაო/განათლების timeline ბარათი
│   │   ├── ServiceCard.jsx      # 🛠️ სერვისების ბარათი
│   │   ├── ContactCard.jsx      # 📞 საკონტაქტო არხის ბარათი
│   │   ├── SectionTitle.jsx     # 🏷️ უნიფიცირებული სექციის სათაური (Badge + Title + Subtitle)
│   │   ├── Button.jsx           # 🔘 უნივერსალური ღილაკი (primary, secondary, outline, ghost)
│   │   ├── Badge.jsx            # 🔖 ტეგები და სტატუსები
│   │   ├── Card.jsx             # 🪟 Glassmorphism კონტეინერი Hover და Glow ეფექტებით
│   │   ├── ScrollToTop.jsx      # ⬆️ ავტომატური სქროლი გვერდის შეცვლისას
│   │   └── DynamicIcon.jsx      # 🎨 Lucide და SVG იკონების დინამიური რენდერი
│   │
│   ├── layout/                  # 📐 ჩონჩხის (Layout) კომპონენტები
│   │   ├── Navbar.jsx           # ნავიგაცია, გვერდების გადამრთველი, Dark/Light თემა, მობილური მენიუ
│   │   └── Footer.jsx           # ქვედა ზოლი, სოციალური ქსელები, Back to Top
│   │
│   └── sections/                # 🧩 მთავარი გვერდის სექციები
│       ├── Hero.jsx             # მისალმება, სტატუსი, CTA ღილაკები
│       ├── About.jsx            # ჩემ შესახებ, StatCard და ServiceCard
│       ├── Skills.jsx           # ტექნოლოგიური სტეკი SkillCard-ებით
│       ├── Projects.jsx         # პროექტები კატეგორიების ფილტრითა და ძებნით
│       ├── Experience.jsx       # კარიერა & განათლება
│       └── Contact.jsx          # საკონტაქტო ფორმა და ბარათები
│
├── context/
│   ├── themeContextInstance.js
│   ├── ThemeContext.jsx         # Dark / Light რეჟიმის პროვაიდერი
│   └── useTheme.js              # Theme custom hook
│
├── data/
│   └── portfolioData.js         # მონაცემთა გამოყოფილი ბაზა
│
├── styles/
│   ├── variables.css            # CSS ცვლადები
│   ├── components.css           # Reusable კომპონენტების, Search-ის, Modal-ისა და Card-ების სტილები
│   ├── layout.css               # Navbar / Footer
│   └── sections.css             # სექციების გრიდები
│
├── App.jsx                      # Router & ThemeProvider კონფიგურაცია
├── index.css
└── main.jsx
```

---

## 🌐 ახალი გვერდი და API ინტეგრაცია (JSONPlaceholder)

დამატებულია ახალი გვერდი: **`/users`** („პარტნიორები და მომხმარებელთა ქსელი“):
* **API მეთოდი:** `https://jsonplaceholder.typicode.com/users` (Resources: `/users`).
* **მონაცემთა მართვა:** `fetch` ასინქრონული ჩატვირთვა `useEffect`-ში `Abort/ignore` გასუფთავებით (race condition-ებისგან დაცვა).
* **Loading State:** Shimmer ანიმაციური ჩონჩხის (Skeleton) ბარათები ჩატვირთვის დროს.
* **Error State:** შეცდომის შეტყობინება და „ხელახლა ცდის“ (Retry) ფუნქცია.
* **მომხმარებლის დეტალური მოდალი:** ბარათზე „სრული დეტალების“ დაჭერისას იხსნება მოდალური ფანჯარა მომხმარებლის სრული ინფორმაციით (ქუჩა, ინდექსი, გეო-კოორდინატები, კომპანიის სლოგანი და მიმართულება).

---

## 🔍 ძებნის (Search) ფუნქციონალი

რეალიზებულია ცალკე მრავალჯერ გამოყენებადი კომპონენტი: [`SearchBar.jsx`](file:///c:/Users/Misha/Desktop/TBC%20Homework%20With%20React/src/components/common/SearchBar.jsx):
1. **მომხმარებლების გვერდზე (`/users`):**
   * რეალურ დროში ძებნა ერთდროულად: სახელით (`name`), იუზერნეიმით (`@username`), ელ-ფოსტით (`email`), კომპანიით (`company.name`) და ქალაქით (`address.city`).
   * დამატებითი ქალაქების სწრაფი ფილტრი (City Pills).
   * შედეგების რაოდენობის დინამიური მრიცხველი (მაგ. „ნაპოვნია: 3“).
   * ერთი კლიკით ძებნის გასუფთავება (`X` ღილაკი).
   * Empty State („მომხმარებელი ვერ მოიძებნა“) ფილტრის გასუფთავების ღილაკით.
2. **პროექტების სექციაში (მთავარ გვერდზე):**
   * ძებნა პროექტის სახელით, აღწერით ან ტექნოლოგიური ტეგებით (მაგ: React, Redux, API) კატეგორიებთან კომბინაციაში.

---

## 🛠️ გაშვების ინსტრუქცია

1. დეველოპმენტ სერვერის გაშვება:
```powershell
npm.cmd run dev
```
გახსენით ბრაუზერში:
* მთავარი გვერდი: `http://localhost:5173/`
* მომხმარებლების გვერდი (API + Search): `http://localhost:5173/users`

2. კოდის შემოწმება და ბილდი:
```powershell
npm.cmd run lint    # 0 warnings, 0 errors
npm.cmd run build   # წარმატებული საპროდაქშენო ბილდი
```
