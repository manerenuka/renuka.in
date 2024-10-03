document.addEventListener("DOMContentLoaded", function() {
    // About Me section
    const aboutText = "I am Renuka Mane, a QA Engineer with rich experience in Web Development, Cloud, and Automation Testing. I am responsible for maintaining the quality of software, skilled in designing test plans, executing test cases, and utilizing automation tools to enhance efficiency.";
    document.getElementById('about-text').textContent = aboutText;

    // Skills Section - Dynamically render skills
    const skills = [
        "Automation Testing", "Functional Testing", "Manual Testing", 
        "API Testing", "Mobile Testing", "GraphQL Testing", 
        "JAVA", "Maven", "Jira", "Git", "POM", 
        "Selenium Web Driver", "TestNG", "Cucumber", "Rest-Assured"
    ];
    const skillsList = document.getElementById('skills-list');
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    // Certifications Section - Dynamically render certifications
    const certifications = [
        {
            img: "cert-placeholder.png", // Replace with actual image link
            link: "#", // Replace with actual certification link
            name: "Certification 1"
        },
        {
            img: "cert-placeholder.png",
            link: "#",
            name: "Certification 2"
        }
    ];

    const certificationsContainer = document.getElementById('certifications-container');
    certifications.forEach(cert => {
        const certDiv = document.createElement('div');
        certDiv.classList.add('certification-item');
        
        const img = document.createElement('img');
        img.src = cert.img;
        img.alt = cert.name;
        certDiv.appendChild(img);
        
        const anchor = document.createElement('a');
        anchor.href = cert.link;
        anchor.textContent = cert.name;
        certDiv.appendChild(anchor);

        certificationsContainer.appendChild(certDiv);
    });

    // Mobile Navigation Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});
