# Jobarcelona 2023 Hackathon - Phase 1

This is the repository for the first phase of the Jobarcelona 2023 hackathon. The goal of this phase was to display a layout with recipe cards containing images that come from the Spoonacular API. Clicking on a recipe should display its ingredients and preparation instructions. Additionally, filters should be included.

![Mockup mobile del proyecto](/src/assets/1.png)

## 🌐 Live Site

https://jobarcelona-hackaton.vercel.app/

## 👩‍💻 Implemented Features:

- Display layout with recipe cards containing images and information that comes from the Spoonacular API.
- Display recipe details upon clicking a card, including ingredients and preparation instructions.
- Routing.
- Caching. Information is saved in localStorage to avoid losing recipes when going back or refreshing, as the layout is displayed randomly.
- Filters for vegan, vegetarian, and/or gluten-free recipes.
- A "show more recipes" button (only 12 recipes are shown at the beginning).
- A "scroll to top" button.
- Animations on card entry and hover.
- Responsive design.

## ⚛️ Technologies used

- React JS
- JavaScript
- Vite
- React Router DOM
- React Icons
- Tailwind CSS and DaisyUI
- Spoonacular API
- Free Hosting Vercel

## 📷 Visuals

![Mockup desktop del proyecto](/src/assets/4.png)
![Mockup ipad del proyecto](/src/assets/3.png)
![Mockup mobile del proyecto](/src/assets/5.png)

## 🏁 How to start the app

1. Clone this repository

`git clone https://github.com/ElionorVendrell/jobarcelona-hackaton.git `

2. Access the app directory

`cd <repository folder>`

3. Installation

`npm install`

4. Run

`npm run dev`

**Important you need to put your own API key in order to use app.**


API: https://spoonacular.com/food-api

## 📝 Additional Notes

The project has been developed with Vite due to its speed and efficiency for small projects. For styling, Tailwind CSS and DaisyUI have been used, which are easy to modify and customize. React Router DOM has also been used to create page routes and useParams to find the recipe ID and display it. For icons, React Icons have been used.

The web has been uploaded to the free hosting service Vercel. The axios library has been used to make requests to the Spoonacular API.

In general, the required functionalities for phase 1 of the hackathon have been implemented, and effective and efficient technologies have been used to achieve them.

## 📩 Contact

elivendrell@gmail.com
