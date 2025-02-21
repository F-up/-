// 轮播图
const box = document.querySelector('.carousel-box');
        const track = document.querySelector('.carousel-track');
        const dotsContainer = document.querySelector('.carousel-dots');
        const items = document.querySelectorAll('.carousel-item');
        
        let currentIndex = 0;
        let autoPlay = true;
        let interval;
        // 创建指示点
        items.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.className = 'carousel-dot';
            if(i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        });
        // 切换逻辑
        function goToSlide(index) {
            currentIndex = index;
            track.style.transform = `translateX(-${index * 483}px)`;
            document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }
        // 自动播放
        function startAutoPlay() {
            interval = setInterval(() => {
                currentIndex = (currentIndex + 1) % items.length;
                goToSlide(currentIndex);
            }, 3000);
        }
        // 事件监听
        document.querySelector('.prev').addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            goToSlide(currentIndex);
        });
        document.querySelector('.next').addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % items.length;
            goToSlide(currentIndex);
        });
        // 悬停暂停
        box.addEventListener('mouseenter', () => clearInterval(interval));
        box.addEventListener('mouseleave', startAutoPlay);
        startAutoPlay();