let slideIndex = 0;
const slides = document.querySelector('.slides-header');
const totalSlides = document.querySelectorAll('.slide').length;
document.querySelector('.next').addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % totalSlides;
    updateSlidePosition();
});
document.querySelector('.prev').addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
});
function updateSlidePosition() {
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}
setInterval(() => {
    slideIndex = (slideIndex + 1) % totalSlides;
    updateSlidePosition();
}, 3000);
const tabs = document.querySelectorAll('.tab');
const tabContent = document.getElementById('content-product-1');

tabs.forEach(tab => {
    tab.addEventListener('click', function (event) {
        event.preventDefault();

        // Remove active classes from all tabs
        tabs.forEach(t => t.classList.remove('border-b-2', 'border-blue-600', 'text-blue-600'));

        // Add active class to the clicked tab
        this.classList.add('border-b-2', 'border-blue-600', 'text-blue-600');

        // Change the content based on the tab
        const tabText = this.textContent;
        
        tabContent.innerHTML = `
<div class="product-list-top-trending">
                <div class="product-item">
                    <img src="IMAGE/sp1.jpg" alt="Quần Suông Tuysi Magic"/>
                    <div class="product-info">
                        <div class="product-name">Quần Suông Tuysi Magic</div> 
                        <div class="product-price">
                            <ul>
                                <li class="price-sale">1,390,000đ</li>
                                <li class="price-orginal">1,990,000đ</li>
                            </ul>
                        </div> <br>
                        <!-- <a href="" class="buy-now">Mua Ngay</a> -->
                    </div> 
                </div>
                <div class="product-item">
                    <img src="IMAGE/sp1.jpg" alt="Quần Suông Tuysi Magic"/>
                    <div class="product-info">
                        <div class="product-name">Quần Suông Tuysi Magic</div> 
                        <div class="product-price">
                            <ul> 
                                <li class="price-sale">1,390,000đ</li>
                                <li class="price-orginal">1,990,000đ</li>
                            </ul>
                        </div> <br>
                        <!-- <a href="" class="buy-now">Mua Ngay</a> -->
                    </div> 
                </div>
                <div class="product-item">
                    <img src="IMAGE/sp1.jpg" alt="Quần Suông Tuysi Magic"/>
                    <div class="product-info">
                        <div class="product-name">Quần Suông Tuysi Magic</div> 
                        <div class="product-price">
                            <ul>
                                <li class="price-sale">1,390,000đ</li>
                                <li class="price-orginal">1,990,000đ</li>
                            </ul>
                        </div> <br>
                        <!-- <a href="" class="buy-now">Mua Ngay</a> -->
                    </div> 
                </div>
                <div class="product-item">
                    <img src="IMAGE/sp1.jpg" alt="Quần Suông Tuysi Magic"/>
                    <div class="product-info">
                        <div class="product-name">Quần Suông Tuysi Magic</div> 
                        <div class="product-price">
                            <ul><li class="price-sale">1,390,000đ</li>
                                <li class="price-orginal">1,990,000đ</li>
                            </ul>
                        </div> <br>
                        <!-- <a href="" class="buy-now">Mua Ngay</a> -->
                    </div> 
                </div>
                <div class="product-item">
                    <img src="IMAGE/sp1.jpg" alt="Quần Suông Tuysi Magic"/>
                    <div class="product-info">
                        <div class="product-name">Quần Suông Tuysi Magic</div> 
                        <div class="product-price">
                            <ul>
                                <li class="price-sale">1,390,000đ</li>
                                <li class="price-orginal">1,990,000đ</li>
                            </ul>
                        </div> <br>
                        <!-- <a href="" class="buy-now">Mua Ngay</a> -->
                    </div> 
                </div>
            </div>
`;
    });
});

// Automatically click on Tab 1 when the page loads
document.addEventListener('DOMContentLoaded', function () {
    const firstTab = tabs[0];
    firstTab.click();  // Trigger a click event on the first tab
});