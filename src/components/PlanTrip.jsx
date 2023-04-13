import SelectCar from "../images/plan/icon1.png";
import Contact from "../images/plan/icon2.png";
import Drive from "../images/plan/icon3.png";

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Lên Kế Hoạch Cho Chuyến Đi Của Bạn</h3>
              <h2>Thuê Xe Nhanh Chóng Và Dễ Dàng.</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <img src={SelectCar} alt="icon_img" />
                <h3>Chọn Xe Bạn Yêu Thích</h3>
                <p>
                  "Chúng tôi cung cấp một loạt các phương tiện đa dạng phù hợp
                  với tất cả nhu cầu lái xe của bạn. Chúng tôi có xe hoàn hảo để
                  đáp ứng nhu cầu của bạn.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Contact} alt="icon_img" />
                <h3>Liên Hệ Với Chúng Tôi</h3>
                <p>
                  Các nhân viên điều hành của chúng tôi luôn sẵn sàng trợ giúp
                  và giải đáp mọi câu hỏi hoặc thắc mắc của bạn.
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <img src={Drive} alt="icon_img" />
                <h3>Nhận xe !</h3>
                <p>
                  Chúng tôi đều đáp ứng nhu cầu của bạn với một loạt các xe đa
                  dạng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
