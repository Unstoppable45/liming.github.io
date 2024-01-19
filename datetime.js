// This script updates the current Gregorian date in the header dynamically
document.addEventListener('DOMContentLoaded', function() {
    const dateElement = document.querySelector('.gregorian-date');

    function updateDate() {
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };

        // Update the Gregorian date
        dateElement.textContent = now.toLocaleDateString('zh-CN', options);
    }

    // Update the date every minute
    setInterval(updateDate, 60000);

    // Initial update
    updateDate();
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 假设您有一个汉堡菜单按钮
document.querySelector('.hamburger-menu').addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('active');
});


// let lastScrollTop = 0;
// window.addEventListener("wheel", function(e) {
//     e.preventDefault(); // 阻止默认滚动行为
//     const delta = e.deltaY;
//     let scrollDirection = '';

//     if (delta > lastScrollTop) {
//         // 向下滚动
//         scrollDirection = 'down';
//     } else {
//         // 向上滚动
//         scrollDirection = 'up';
//     }
//     lastScrollTop = delta <= 0 ? 0 : delta; // 为了跨浏览器兼容性

//     smoothScroll(scrollDirection);
// });

// function smoothScroll(direction) {
//     const sections = document.querySelectorAll("section");
//     const currentSection = document.elementFromPoint(0, window.innerHeight / 2);
//     let currentIndex = Array.from(sections).indexOf(currentSection);
//     if (currentIndex === -1) return;

//     if (direction === 'down' && currentIndex < sections.length - 1) {
//         currentIndex++;
//     } else if (direction === 'up' && currentIndex > 0) {
//         currentIndex--;
//     }

//     sections[currentIndex].scrollIntoView({ behavior: 'smooth' });
// }

// document.addEventListener('DOMContentLoaded', function () {
//     var navbar = document.querySelector('.header-banner');
//     var navbarHeight = navbar.offsetHeight; // 获取导航栏的高度
//     var lastScrollTop = 0; // 用来存储上一次滚动位置

//     window.addEventListener('scroll', function () {
//         var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
//         if (currentScroll > lastScrollTop && currentScroll > navbarHeight) {
//             // 向下滚动，且滚动超过导航栏高度时，隐藏导航栏
//             navbar.classList.add('hide');
//         } else {
//             // 向上滚动时，显示导航栏
//             navbar.classList.remove('hide');
//         }
//         lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
//     }, false);

//     window.addEventListener('mousemove', function (e) {
//         if (e.clientY <= navbarHeight) {
//             // 如果鼠标在导航栏高度范围内，显示导航栏
//             navbar.classList.remove('hide');
//         }
//     }, false);
// });


