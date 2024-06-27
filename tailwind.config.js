/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        background_1: 'url("/background.jpg")',
        im2: 'url("https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg")',
        im3: 'url("https://media.istockphoto.com/id/1322220448/photo/abstract-digital-futuristic-eye.jpg?s=612x612&w=0&k=20&c=oAMmGJxyTTNW0XcttULhkp5IxfW9ZTaoVdVwI2KwK5s=")',
        im4: 'url("https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg")',
        im5: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEAtkYmbQu9OMP1j7bjv0G0rgO12JhLXFQ1uDMSYlUyQ&s")',
        sabya: 'url("/sabya.png")',
        drrada: 'url("/dramin.png")',
        logo: 'url("/Logo.png")',
      },
    },
    colors: {
      grey: "#1c1c1c",
      black: "#000000",
      white: "#ffffff",
      red: "#ff0000",
      green: "#00ff00",
      blue: "#0000ff",
      yellow: "#ffff00",
      cyan: "#00ffff",
      magenta: "#ff00ff",
    },
  },
  plugins: [],
};
