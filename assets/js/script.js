var header           = document.getElementById('header');
var navigationHeader = document.getElementById('navigation_header');
var showSidebar      = false;

const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('a');

function toggleSidebar()
{
    showSidebar = !showSidebar;
    if(showSidebar)
    {
        navigationHeader.style.marginLeft = '-10vw';
        navigationHeader.style.animationName = 'showSidebar';
    }
    else
    {
        navigationHeader.style.marginLeft = '-100vw';
        navigationHeader.style.animationName = '';
    }
}

function closeSidebar()
{
    if(showSidebar)
    {
        showSidebar = true;
        toggleSidebar();
    }
}

window.addEventListener('resize', function(event) {
    if(window.innerWidth > 768 && showSidebar) 
    {  
        showSidebar = true;
        toggleSidebar();
    }
});

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY + 160;

    navigationHeader.style.position.scrollY = scrollPosition;
    sections.forEach(section => {
        if (scrollPosition >= section.offsetTop) {
            links.forEach(link => {
                link.classList.remove('active');
                if ("#" + section.getAttribute('id') === link.getAttribute('href') && link.parentElement.parentElement.parentElement.classList == 'navigation_header'){
                    link.classList.add('active');
                }
            });
        }
    });
});