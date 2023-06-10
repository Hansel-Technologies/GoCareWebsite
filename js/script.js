// JavaScript code
const testimonials = [
  
   { name:"Klavert Daniel",
     quote: "GoCare is the place to be for for all who seek to be professional certified nursing assistants. I loved it here. Thank you to the teachers and all staff. God Bless you."
   },
   { name:"James Wambui",
    quote: "The institute is very professional and organized. I acquired more than anticipated. Your dedication, passion, and love to train are so amazing. Continue with the good and amazing work. I highly recommend the institution to other learners."
   },

    {name: "Charity Gitiba",
    quote: "The best decision I did was to train with GoCare. They are the best training facility for the HCA course. Best professional study, equipment, and guaranteed attachment. Go! Go! GoCare!"
    },
    {name:"Loise Wairimu",
    quote:"Training the best Caregiving and Home Care experts. I approve and recommend anyone who intends to take a course involving Caregiving and Home Care services."
    },
    {name: "Wycliff Mugwimi",
    quote: "It was great being part of the GoCare Training Institute. I believe I'm now an expert. God bless you GoCare!"
    },
    {name: "Susan Kimani",
    quote: "I like the fact that the program is all about learning how to help people especially the people who are in need of health care. It’s all about giving back to the community, you learn skills in a short period of time."
    },
    {
    name: "Judith Arogo",
    quote:"You have played a great role in my life and now I am better than before. Thank you so much GoCare."
    },
    {
    name:"Joyce Gathoni",
    quote:"They gave me the best they could when I was training with them. GoCare is the place to be when you think of training as a Patient Attendant."
    },
   {name:"Peris K",
    quote:"A great institution, well managed and informative. I would highly recommend anyone wishing to take the Nurse Aider course join the institution. Thank you for the great opportunity."
   },

    {name:"Peter Kamau",
    quote:"I'd recommend everyone who wishes to do a health care assistant/caregiving course to study at GoCare Training Institute. It’s a very good training institution and the teachers are very friendly. Thank you."
    },
    {name:"Sir Ogada",
    quote:"The training was interesting and informative. Well detailed. Friendly lectures and staff. @GoCare you are the Best."
    },
    {name:"Ian Chege",
    quote:"GoCare trainers are the best. They are pioneers who have Identified the need for caregiving, there is no other comparison with them."
    },
    {name: "Vellah Chebet",
    quote:"They have just what's needed for home best nursing care Education. They also have very friendly and willing to help Fraternity"
    },
    {name:"George Odhiambo",
    quote:"This organization is really good and reliable."
    },
    {name:"Grace Wanjiru",
    quote:"An institution of excellence, growth, and advancement. For caregivers willing to expand their knowledge, get a chance for employment and soar higher in their careers, GoCare is the place to be."
    },

    {name:"Joyce Gathoni",
    quote:"I trained with GoCare as a Patient Attendant. The instructors and management are so helpful. I recommend it to anyone who is interested in being a professional Caregiver."
    },

    {name:"Florence Adipo",
    quote:"Thanks for the training and the passionate tutors. I learned a lot and am ready to go take care of patients😊"
    },
    {name:"Meet Veshi",
    quote:"The best school for learning the patient attendant course. They offer the best attachment also. This is the school you are looking for if you want to do this course."
    },

    {name:"Muthoni Njora",
    quote:"As a training institute for nurses, this place has been amazing. Top-notch lecturers who offer nothing but the best."
    },
    {name:"Fatma Hussein",
    quote:"I was trained at GoCare as a Patient Attendant. It's a good school. Thank you!"
    },
    {name:"Cecilia Mwangi",
    quote:"The best place to be, to grow, and nature your career. Thank you for the experience."
    },
    {name:"Calorine Kamutu",
    quote:"Lots of learning. Hope opportunities will show up for us to manifest in serving society. God Bless."
    },
    {name:"Judith Dutira",
    quote:"Big up GoCare. A place everyone would wish to be trained."
    },
    {name:"Maureen Wafula",
    quote:"I had first thought of training in another institution. But after completing the course at GoCare and now working, I value the knowledge and skills I acquired. I am forever grateful for that decision. Long live GoCare!"
    },
    {name:"Cynthia Wambui",
    quote:"I fully recommend GoCare Training Institute 100%. Have faith, apply, join and finish with a smile, never to regret! And enjoy your fulfilling career thereafter."
    },

  ];
  
  const testimonialsPerPage = 5;
  let currentPage = 1;
  
  const testimonialContainer = document.getElementById("testimonial-container");
  const paginationContainer = document.querySelector(".pagination");
  
  function displayTestimonials(testimonials) {
    testimonialContainer.innerHTML = "";
  
    const startIndex = (currentPage - 1) * testimonialsPerPage;
    const endIndex = startIndex + testimonialsPerPage;
  
    const displayedTestimonials = testimonials.slice(startIndex, endIndex);
  
    displayedTestimonials.forEach((testimonial) => {
      const card = document.createElement("div");
      card.classList.add("testimonial-card");
  
      const quoteSymbol = document.createElement("div");
      quoteSymbol.classList.add("quote");
      quoteSymbol.textContent = '"';
  
      const content = document.createElement("div");
      content.classList.add("content");
  
      const name = document.createElement("h3");
      name.classList.add("name");
      name.textContent = testimonial.name;
  
      const quoteText = document.createElement("p");
      quoteText.classList.add("quote-text");
      quoteText.textContent = testimonial.quote;
  
      content.appendChild(name);
      content.appendChild(quoteText);
  
      card.appendChild(content);
      card.appendChild(quoteSymbol);
  
      testimonialContainer.appendChild(card);
    });
  
    updatePagination();
  }
  
  function updatePagination() {
    const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
  
    paginationContainer.innerHTML = "";
  
    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement("button");
      button.textContent = i;
      button.addEventListener("click", () => {
        currentPage = i;
        displayTestimonials(testimonials);
      });
  
      if (i === currentPage) {
        button.classList.add("active");
      }
  
      paginationContainer.appendChild(button);
    }
  }
  
  displayTestimonials(testimonials);
  