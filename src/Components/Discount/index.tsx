const Discount = () => {
  return (
    <section class="discount section">
                <div class="discount__container container grid">
                    <div class="discount__animate">
                        <h2 class="discount__title">Immerse yourself in <br> your music</h2>
                        <p class="discount__description">Get it now, up to 50% off.</p>
                        <a href="#" class="button button--flex">
                            <i className="ri-shopping-bag-line button__icon"></i> Shop Now
                        </a>
                    </div>

                    <img src="assets/img/discount.png" alt="" class="discount__img">
                </div>
            </section>
  );
};

export default Discount;