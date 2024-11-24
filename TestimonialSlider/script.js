const data = [
    {
        imgSrc: "amber.jpg",
        testimonial: "This role has exceeded all my expectations. From day one, I was given the tools and resources to succeed. The leadership team fosters a culture of creativity and autonomy, empowering us to think outside the box and deliver impactful campaigns. The best part is the sense of camaraderie among the team – everyone is willing to lend a hand and share their expertise. Working here has helped me refine my skills, tackle challenges head-on, and take my career to the next level. It’s truly a place where you can thrive professionally and personally.",
        name: "- Amber Heard",
    },
    {
        imgSrc: "donal.jpg",
        testimonial: "This role has been one of the most fulfilling experiences of my career. Every day brings new challenges, and I love the problem-solving aspect of my work. The team’s collaborative spirit makes it easy to brainstorm ideas and deliver outstanding results. I also appreciate the emphasis on personal growth – I’ve had access to various training programs and opportunities to take on leadership responsibilities. It’s not just a job; it feels like being part of a family where everyone works toward a shared vision. I’m excited about the future and proud of what we accomplish together.",
        name: "- Donald Trump",
    },
    {
        imgSrc: "putin.jpg",
        testimonial: "Working here has been an inspiring journey. The creative freedom I’ve been given allows me to push boundaries and explore new ideas. The feedback and support from the team help refine my work and bring out the best in me. The projects are diverse and exciting, which keeps things fresh and engaging. I also appreciate the work-life balance and the genuine efforts to make everyone feel valued. It’s amazing to be part of a team that not only celebrates creativity but also fosters a culture of respect and continuous learning.",
        name: "- Vladimir Putin",
    },
    {
        imgSrc: "xavier.jpg",
        testimonial: "This role has been a perfect fit for my passion for data and problem-solving. I’ve had the chance to work on projects that challenge me intellectually while driving real impact. The leadership team encourages innovation, and there’s a strong emphasis on collaboration across departments. What stands out most is the focus on personal development – I’ve had regular access to training and mentoring that’s helped me expand my skill set. It’s empowering to work in an environment where my contributions are recognized, and I’m supported in achieving my professional goals.",
        name: "- Xavier",
    },
    {
        imgSrc: "speed.jpg",
        testimonial: "Being part of this team has been a truly rewarding experience. The collaborative culture and open communication make every project exciting. I’ve had countless opportunities to enhance my skills and contribute to meaningful projects that have real-world impact. The mentorship I’ve received here has been invaluable in my professional growth. It’s rare to find a place where innovation is encouraged, and hard work is consistently recognized. I feel motivated every day to do my best, and it’s all thanks to the supportive environment and incredible people I work with.",
        name: "- Darren Jason Jr.",
    },
];

let image = document.getElementById("image");
let testimonial = document.getElementById("testimonal");
let names = document.getElementById("name");

let currentIndex = 0;

function changeDetails() {
    image.src = data[currentIndex].imgSrc;
    testimonial.innerHTML = data[currentIndex].testimonial;
    names.innerHTML = data[currentIndex].name;

    currentIndex++;
    if (currentIndex >= data.length) {
        currentIndex = 0;
    }

}

setInterval(changeDetails, 10000);

changeDetails();
