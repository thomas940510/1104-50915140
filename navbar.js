document.addEventListener("DOMContentLoaded", function () {
    const navbarHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container">
                <a class="navbar-brand" href="index.html">JS 套件介紹</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">首頁</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="validator.html">Validator</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="text-to-speech.html">文字轉語音</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="lottie.html">Lottie 動畫</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="lazy-loading.html">Lazy-loading 懶加載</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="jquery.html">jQuery</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="grid.html">Grid</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="font-awesome.html">Font Awesome</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="datepicker.html">Datepicker</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="chart.html">Chart.js</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="bootstrap.html">Bootstrap</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="aos.html">AOS 動畫</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
    
    // 將生成的 navbar 插入到指定的 div 中
    document.getElementById("navbar-placeholder").innerHTML = navbarHTML;
});
