document.addEventListener('DOMContentLoaded', () => {
    const thanksMessages = [
        "💖常務の的確なご指導に、心からの感謝を捧げます！💖",
        "🌟常務の存在は、私たちの希望の星です！🌟",
        "💡常務の決断力と知性は、常に我々を正しい道に導きます！💡",
        "🏆常務のご尽力、決して忘れません！深い敬意を込めて！🏆",
        "🚀常務の熱意は、いつも私たちを鼓舞します！🚀",
        "🙏常務、永遠に我々の精神的支柱です！🙏"
    ];

    const thanksButton = document.getElementById('thanks-button');
    const changeableMessage = document.getElementById('changeable-message');
    const sparkleContainer = document.getElementById('sparkle-container');
    const bgSparkleContainer = document.getElementById('bg-sparkle-container');
    const haloEffect = document.getElementById('halo-effect');

    // takase02.pngを動的に追加
    const flyingTakase = document.createElement('div');
    flyingTakase.id = 'flying-takase';
    document.body.appendChild(flyingTakase);

    let messageIndex = 0;

    // 後光エフェクトの位置を更新する関数 (画面中央に固定)
    function updateHaloPosition() {
        haloEffect.style.left = `calc(50% - ${haloEffect.offsetWidth / 2}px)`;
        haloEffect.style.top = `calc(50% - ${haloEffect.offsetHeight / 2}px)`;
    }

    // ボタンをクリックした時のイベント
    thanksButton.addEventListener('click', () => {
        changeableMessage.innerHTML = thanksMessages[messageIndex];
        changeableMessage.style.animation = 'none';
        void changeableMessage.offsetWidth;
        changeableMessage.style.animation = 'fade-in-up 1.5s ease-out forwards';

        messageIndex = (messageIndex + 1) % thanksMessages.length;

        for (let i = 0; i < 80; i++) {
            createParticle('heart');
            createParticle('star');
            createParticle('sparkle');
        }
    });

    // 常に前景パーティクルを生成
    setInterval(() => {
        createParticle('heart');
        createParticle('star');
        createParticle('sparkle');
    }, 120);

    // 常に背景スパークルを生成
    setInterval(() => {
        createBackgroundSparkle();
    }, 80);

    // 画面読み込み時とリサイズ時に後光エフェクトの位置を調整
    window.addEventListener('load', updateHaloPosition);
    window.addEventListener('resize', updateHaloPosition);

    // 画面読み込み時に最初のエフェクトを大量に生成
    for (let i = 0; i < 200; i++) {
        createParticle('heart');
        createParticle('star');
        createParticle('sparkle');
    }
    for (let i = 0; i < 70; i++) {
        createBackgroundSparkle();
    }

    function createParticle(type) {
        const particle = document.createElement('div');
        particle.classList.add('particle-thanks');
        
        if (type === 'heart') {
            particle.textContent = '💖';
            particle.classList.add('particle-heart');
        } else if (type === 'star') {
            particle.textContent = '⭐';
            particle.classList.add('particle-star');
        } else {
            particle.textContent = '✨';
        }
        
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDuration = `${Math.random() * 3 + 4}s`;
        
        sparkleContainer.appendChild(particle);

        particle.addEventListener('animationend', () => {
            particle.remove();
        });
    }

    function createBackgroundSparkle() {
        const sparkle = document.createElement('div');
        sparkle.classList.add('bg-particle-sparkle');
        sparkle.textContent = '✧';
        
        sparkle.style.left = `${Math.random() * 100}vw`;
        sparkle.style.top = `${Math.random() * 100}vh`;
        sparkle.style.animationDuration = `${Math.random() * 10 + 15}s`;
        sparkle.style.animationDelay = `-${Math.random() * 10}s`;
        sparkle.style.fontSize = `${Math.random() * 1 + 0.5}em`;
        
        bgSparkleContainer.appendChild(sparkle);

        sparkle.addEventListener('animationend', () => {
            sparkle.remove();
        });
    }
});
