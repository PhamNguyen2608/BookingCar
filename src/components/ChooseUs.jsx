import MainImg from "../images/chooseUs/main.png";
import Box1 from "../images/chooseUs/icon1.png";
import Box2 from "../images/chooseUs/icon2.png";
import Box3 from "../images/chooseUs/icon3.png";

function ChooseUs() {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img
              className="choose-container__img"
              src={MainImg}
              alt="car_img"
            />
            <div className="text-container">
              <div className="text-container__left">
                <h4>Tại Sao Chọn Chúng Tôi</h4>
                <h2> Ưu Đãi</h2>
                <p>
                  Khám phá những ưu đãi tuyệt vời nhất mà bạn sẽ tìm thấy với.
                  Chúng tôi cam kết cung cấp cho bạn giá trị tốt nhất cho tài
                  chính của bạn, để bạn có thể tận hưởng dịch vụ và sản phẩm
                  chất lượng cao mà không phải lo nghĩ.
                </p>
                <a href="#home">
                  Xem chi tiết &nbsp;
                  <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  <img src={Box1} alt="car-img" />
                  <div className="text-container__right__box__text">
                    <h4>Lái Xe Xuyên Quốc Gia</h4>
                    <p>
                      Nâng cao trải nghiệm lái xe của bạn với các phương tiện
                      hàng đầu của chúng tôi cho những cuộc phiêu lưu vượt quốc
                      gia của bạn.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box2} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Giá Cả Bao Gồm Tất Cả</h4>
                    <p>
                      Nhận tất cả những gì bạn cần, minh bạch với chính sách giá
                      cả bao gồm tất cả dịch vụ của chúng tôi
                      <i className=""></i>
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box3} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Không Có Chi Phí Phát Sinh</h4>
                    <p>
                      Hãy yên tâm với chính sách không tính phí phát sinh của chúng
                      tôi. Chúng tôi tin tưởng vào việc định giá minh bạch và
                      trung thực.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
