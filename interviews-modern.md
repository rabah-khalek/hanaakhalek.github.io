---
layout: page
title: مقابلات
subtitle: Media Interviews
---

<style>
/* Sophisticated interview cards */
.interviews-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 3rem;
    margin: 3rem 0;
}

.interview-card {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid rgba(0, 0, 0, 0.03);
    animation: fadeInUp 0.6s ease-out backwards;
}

.interview-card:nth-child(1) { animation-delay: 0.1s; }
.interview-card:nth-child(2) { animation-delay: 0.2s; }
.interview-card:nth-child(3) { animation-delay: 0.3s; }
.interview-card:nth-child(4) { animation-delay: 0.4s; }
.interview-card:nth-child(5) { animation-delay: 0.5s; }

.interview-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(52, 152, 219, 0.15);
}

.interview-header {
    background: linear-gradient(135deg, #3498DB 0%, #2980B9 100%);
    padding: 2rem;
    color: white;
    text-align: center;
}

.interview-header h3 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 700;
    font-family: var(--arabic-header-font);
    line-height: 1.6;
}

.interview-header .interview-source {
    font-size: 1rem;
    opacity: 0.9;
    margin-top: 0.5rem;
    font-weight: 500;
}

.interview-body {
    padding: 1.5rem;
    background: white;
}

.interview-body iframe {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.interview-body img {
    width: 100%;
    border-radius: 12px;
    transition: transform 0.3s ease;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.interview-body a:hover img {
    transform: scale(1.02);
}

@media (max-width: 768px) {
    .interviews-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
}

.interviews-intro {
    text-align: center;
    padding: 2rem 0 1rem;
    margin-bottom: 2rem;
}

.interviews-intro p {
    font-size: 1.1rem;
    color: #6C757D;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.8;
}
</style>

<div class="interviews-intro">
    <p>مجموعة من المقابلات التلفزيونية والإذاعية حول أعمالي الفنية ورؤيتي الإبداعية</p>
</div>

<div class="interviews-grid">
    <!-- Interview 1: Télé Lumière -->
    <div class="interview-card">
        <div class="interview-header">
            <h3>مقابلة على تلفزيون Télé Lumière</h3>
            <div class="interview-source">قناة تيلي لوميير</div>
        </div>
        <div class="interview-body">
            <iframe height="315" src="https://www.youtube.com/embed/8lq2YdrhSms" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>

    <!-- Interview 2: قناة اليوم -->
    <div class="interview-card">
        <div class="interview-header">
            <h3>مقابلة على قناة اليوم مع الناقد أحمد بزون</h3>
            <div class="interview-source">قناة اليوم</div>
        </div>
        <div class="interview-body">
            <iframe height="315" src="https://www.youtube.com/embed/DSIGIcQCNac" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>

    <!-- Interview 3: تلفزيون لبنان -->
    <div class="interview-card">
        <div class="interview-header">
            <h3>مقابلة على تلفزيون لبنان</h3>
            <div class="interview-source">تلفزيون لبنان - أهلا صباح</div>
        </div>
        <div class="interview-body">
            <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FTL.ahlasabah%2Fvideos%2F547199892750797%2F&show_text=0&width=560" height="400" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
        </div>
    </div>

    <!-- Interview 4: إذاعة لبنان -->
    <div class="interview-card">
        <div class="interview-header">
            <h3>مقابلة في إذاعة لبنان</h3>
            <div class="interview-source">إذاعة لبنان - معنا الاثنين أحلى</div>
        </div>
        <div class="interview-body">
            <a href="http://www.radioliban.gov.lb/ar/programs/معنا-الاثنين-احلى" target="_blank">
                <img src="../assets/img/interviews/Radio-Liban.jpg" alt="إذاعة لبنان" loading="lazy"/>
            </a>
        </div>
    </div>

    <!-- Interview 5: إذاعة صوت لبنان -->
    <div class="interview-card">
        <div class="interview-header">
            <h3>مقابلة في إذاعة صوت لبنان</h3>
            <div class="interview-source">إذاعة صوت لبنان 100.5</div>
        </div>
        <div class="interview-body">
            <iframe height="315" src="https://www.youtube.com/embed/HH6-Ph2uGQ4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>

    <!-- Interview 6: إذاعة الشرق -->
    <div class="interview-card">
        <div class="interview-header">
            <h3>مقابلة في إذاعة الشرق</h3>
            <div class="interview-source">إذاعة صوت الشرق</div>
        </div>
        <div class="interview-body">
            <a href="https://www.youtube.com" target="_blank">
                <img src="../assets/img/interviews/Voice-of-East.jpg" alt="إذاعة الشرق" loading="lazy"/>
            </a>
        </div>
    </div>
</div>

<div class="elegant-divider"></div>

<div style="text-align: center; padding: 2rem 0;">
    <p style="color: #6C757D; font-size: 0.95rem; font-family: var(--arabic-body-font);">
        <i class="fas fa-video" style="margin-left: 0.5rem; color: #3498DB;"></i>
        للمزيد من المقابلات والمحتوى المرئي، تابعوني على وسائل التواصل الاجتماعي
    </p>
</div>
