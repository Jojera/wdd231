

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".navigation");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");

        // Toggle Hamburger & X Icon
        if (navLinks.classList.contains("active")) {
            hamburger.innerHTML = "✖"; // Close icon
        } else {
            hamburger.innerHTML = "☰"; // Hamburger icon
        }
    });
});

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

// 1. First, let's mark some courses as completed (modify as needed)
courses[0].completed = true; // CSE 110
courses[1].completed = true; // WDD 130
courses[3].completed = true; // CSE 210
courses[5].completed = true; // WDD 231

// 2. Function to display courses based on filter
function displayCourses(filter = 'all') {
    const coursesContainer = document.querySelector('.courses');
    coursesContainer.innerHTML = '';
    
    // Filter courses based on selection
    let filteredCourses = courses;
    if (filter !== 'all') {
        filteredCourses = courses.filter(course => course.subject === filter);
    }
    
    // Create and append course elements
    filteredCourses.forEach(course => {
        const courseElement = document.createElement('div');
        const courseCode = `${course.subject} ${course.number}`;
        courseElement.className = `course ${course.subject.toLowerCase()} ${course.completed ? 'completed' : 'incomplete'}`;
        
        // Create course content
        courseElement.innerHTML = `
            <h3>${courseCode}: ${course.title}</h3>
            <div class="course-meta">
                <span class="credits">${course.credits} credits</span>
                <span class="status">${course.completed ? '✓ Completed' : 'In Progress'}</span>
            </div>
            <p class="description">${course.description}</p>
            <div class="technologies">
                Technologies: ${course.technology.join(', ')}
            </div>
        `;
        
        coursesContainer.appendChild(courseElement);
    });
    
    // 5. Calculate and display total credits
    const totalCredits = filteredCourses.reduce((total, course) => total + course.credits, 0);
    let creditDisplay = document.querySelector('.total-credits');
    
    if (!creditDisplay) {
        creditDisplay = document.createElement('div');
        creditDisplay.className = 'total-credits';
        coursesContainer.parentNode.insertBefore(creditDisplay, coursesContainer.nextSibling);
    }
    
    creditDisplay.textContent = `Total Credits for Displayed Courses: ${totalCredits}`;
}

// 3. Add event listeners to filter buttons
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get filter type from button text
            const filterType = button.textContent === 'All' ? 'all' : button.textContent;
            displayCourses(filterType);
        });
    });
    
    // Initial display (all courses)
    displayCourses();
});



document.getElementById('currentyear').textContent= new Date().getFullYear();

document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;