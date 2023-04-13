import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";


function TestimonialsPage() {
  return (
    <>
      <section className="testimonial-page">
        <HeroPages name="Testimonials" />
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Đặt xe bằng cách liên hệ với chúng tôi</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>123 456-7869</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default TestimonialsPage;
