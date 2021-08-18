function toggleNavbar() {
  document.getElementById("navbar").classList.toggle("active");
}

let cards = [
  {
    imgURL: "../images/Screenshot_2021-05-04 Contact Form.png",
    imgALT: "Photo",
    title: "ContactForm",
    techStack: "Html/CSS",
    description:
      "Making a new discovery I found glass Glassmorphism to create this form.",
    githubURL: "https://github.com/Gary35-bot/first-Contact-from-created",
    liveURL: "https://agitated-kepler-cb2c57.netlify.app/",
  },

  {
    imgURL: "../images/Screenshot_2021-05-04 My timeline.png",
    imgALT: "Photo",
    title: "TimeLine",
    techStack: "Html/CSS",
    description: "This is a timeline I created using aos-animation",
    githubURL: "https://github.com/Gary35-bot/first-Contact-from-created",
    liveURL: "https://admiring-bardeen-57658c.netlify.app/",
  },

  {
    imgURL: "../images/Screenshot_2021-05-04 Testimonial slider.png",
    imgALT: "Photo",
    title: "Testimonial-Slider",
    techStack: "Html/CSS",
    description: "I used owl-carousel to create these testimonials.",
    githubURL: "https://github.com/Gary35-bot/Testomonial-slider",
    liveURL: "https://wizardly-clarke-0f2d34.netlify.app/",
  },

  {
    imgURL: "../images/sneakersite.png",
    imgALT: "Photo",
    title: "Testimonial-Slider",
    techStack: "Html/CSS",
    description:
      "This sneaker-site me and my group put together making it as one.",
    githubURL: "#",
    liveURL: "https://relaxed-saha-d93563.netlify.app/",
  },

  {
    imgURL: "../images/weather2.png",
    imgALT: "Photo",
    title: "Weather App",
    techStack: "Python",
    description:
      "Created a weather app  use API.",
    githubURL: "https://github.com/Gary35-bot/Weather-App",
    liveURL: "https://replit.com/@Gary35bot/weather-App#main.py",
  },
  {
    imgURL: "../images/tempreture-Converter.png",
    imgALT: "Photo",
    title: "Tempreture-Converter",
    techStack: "Python",
    description:
      "Tempreture Converter I build to convert fahrenheit to celsius vice versa ",
    githubURL: "https://github.com/Gary35-bot/calculation-of-cel-and-fan/blob/main/main.py",
    liveURL: "https://replit.com/@Gary35bot/Tempreture#main.py",
  },
];

function createCard(cards) {
  let createCard = `
  <div class="Cards" techStack="${cards.techStack}">
  <img class="projectimg" src="${cards.imgURL}" alt=""/>
  <div class="image-overlay">
    <p class="decrip-tion">${cards.description}</p>
</div>
  <div class="card-items"> 
      <h2>${cards.techStack}</h2>
      <h3>${cards.title}</h3>
  </div>
  <div class="button-2">
  <button class="button1"><a class="button-1" href="${cards.githubURL}" target="_blank"><p class="gitlink">Github</p></a></button>
  <button class="button1"><a class="button-1" href="${cards.liveURL}" target="_blank"><p class="gitlink">Live</p></a></button> 
</div>
</div>
    `;
  return createCard;
}

function renderCards() {
  let cardcontainer = document.querySelector(".cardcontainer");
  for (project of cards) {
    let card = createCard(project);
    cardcontainer.innerHTML += card;
  }
}

renderCards();

function filterCards(catergory) {
  let cards = document.getElementsByClassName("Cards");
  if (catergory == "All") {
    for (project of cards) {
      project.style.display = "block";
    }
    return;
  }

  for (projects of cards) {
    console.log(cards);
    projects.style.display = "none";
  }
  let selectedCards = document.querySelectorAll(`[techStack='${catergory}']`);
  for (card of selectedCards) {
    card.style.display = "block";
  }
}

