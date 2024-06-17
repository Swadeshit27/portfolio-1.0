$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });
});

// <!-- typed js effect starts -->
let typed = new Typed(".typing-text", {
    strings: ["Full Stack Developer", "Next JS Developer", "React Native Developer"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->


// display Skills 
async function fetchSkills() {
    let response = await fetch("public/skills.json")
    const data = await response.json();
    return data;
}
function showSkills(skills) {
    let skillsContainer = document.querySelector("#skills .skill-container");
    let skillsHTML = "";
    skills.map(skill => {
        skillsHTML += `
            <div class="skill-box">
                <img src="${skill.icon}" alt="skill">
                <h4>${skill.name}</h4>
            </div>
        `
    });
    skillsContainer.innerHTML = skillsHTML;

    /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '50px',
        duration: 600,
        reset: true
    });

    /* SCROLL Skills */
    srtop.reveal('.skills .skill-box', { interval: 100 });
}
fetchSkills().then(data => {
    showSkills(data);
});

// display projects 
async function fetchProjects() {
    let response = await fetch("public/projects.json")
    const data = await response.json();
    return data;
}

function showProjects(projects) {
    let projectsContainer = document.querySelector("#projects .box-container");
    let projectHTML = "";
    projects.map(project => {
        projectHTML += `
            <div class="box">
                <img draggable="false" src="${project.imgUrl}" alt="project" />
                <div class="content">
                    <div class="tag">
                        <h3>${project.name}</h3>
                    </div>
                <div class="desc">
                    <p>${project.techTools}</p>
                        <div class="btns">
                            <a href="${project.demoUrl}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
                            <a href="${project.codeUrl}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        `
    });
    console.log(projectsContainer)
    projectsContainer.innerHTML = projectHTML;

    /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '50px',
        duration: 600,
        reset: true
    });
    srtop.reveal('.projects .box', { interval: 150 });
}

fetchProjects().then(data => {
    showProjects(data);
});

/*  SCROLL ANIMATION   */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 600,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 100 });
srtop.reveal('.home .content p', { delay: 150 });
srtop.reveal('.home .content .custom-btn', { delay: 200 });
srtop.reveal('.home .image', { delay: 300 });
srtop.reveal('.home .social-icons', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 100 });
srtop.reveal('.about .content .tag', { delay: 150 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .custom-btn', { delay: 250 });
srtop.reveal('.about .image', { delay: 200 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 100 });
srtop.reveal('.contact .container', { delay: 100 });