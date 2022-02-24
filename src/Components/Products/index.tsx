const Products= () => {
  return (
    <section class="products section" id="products">
                <h2 class="section__title section__title-gradient products__line">
                    Choose <br> Your Style
                </h2>

                <div class="products__container container grid">
                    <article class="products__card">
                        <div class="products__content">
                            <img src="assets/img/product1.png" alt="" class="products__img">
    
                            <h3 class="products__title">Black</h3>
                            <span class="products__price">$249</span>
    
                            <button class="button button--flex products__button">
                                <i class="ri-shopping-bag-line button__icon"></i>
                            </button>
                        </div>
                    </article>
                    <article class="products__card">
                        <div class="products__content">
                            <img src="assets/img/product2.png" alt="" class="products__img">
    
                            <h3 class="products__title">Red Black</h3>
                            <span class="products__price">$249</span>
    
                            <button class="button button--flex products__button">
                                <i class="ri-shopping-bag-line button__icon"></i>
                            </button>
                        </div>
                    </article>
                    <article class="products__card">
                        <div class="products__content">
                            <img src="assets/img/product3.png" alt="" class="products__img">
    
                            <h3 class="products__title">Night Black</h3>
                            <span class="products__price">$249</span>
    
                            <button class="button button--flex products__button">
                                <i class="ri-shopping-bag-line button__icon"></i>
                            </button>
                        </div>
                    </article>
                    <article class="products__card">
                        <div class="products__content">
                            <img src="assets/img/product4.png" alt="" class="products__img">
    
                            <h3 class="products__title">Blue</h3>
                            <span class="products__price">$249</span>
    
                            <button class="button button--flex products__button">
                                <i class="ri-shopping-bag-line button__icon"></i>
                            </button>
                        </div>
                    </article>

                    <article class="products__card">
                        <div class="products__content">
                            <img src="assets/img/product5.png" alt="" class="products__img">
    
                            <h3 class="products__title">Twilight gray</h3>
                            <span class="products__price">$249</span>
    
                            <button class="button button--flex products__button">
                                <i class="ri-shopping-bag-line button__icon"></i>
                            </button>
                        </div>
                    </article>
                </div>
            </section>
  );
};

export default Products;