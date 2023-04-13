function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>Car</span> Group
              </li>
              <li>
                Chúng tôi cung cấp một loạt các phương tiện đa dạng phù hợp với
                tất cả nhu cầu lái xe của bạn.
              </li>
              <li>
                <a href="tel:123456789">
                  <i className="fa-solid fa-phone"></i> &nbsp; 0200 36954
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                carrental@gmail.com"
                >
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp; car@gmail.com
                </a>
              </li>

              <li></li>
            </ul>

            <ul className="footer-content__2">
              <li>Công ty</li>
              <li>
                <a href="#home">Hà Nội</a>
              </li>
              <li>
                <a href="#home">Tuyển Dụng</a>
              </li>

              <li>
                <a href="#home">Blog</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Thời gian làm việc</li>
              <li>T2 - T6: 9:00AM - 9:00PM</li>
              <li>T7: 9:00AM - 19:00PM</li>
              <li>CN: Đóng cửa</li>
            </ul>

            <ul className="footer-content__2">
              <li>Liên hệ với chúng tôi</li>
              <li>
                <p>
                  Đăng ký email của bạn để nhận tin tức và cập nhật mới nhất.
                </p>
              </li>
              <li>
                <input type="email" placeholder="Nhập email của bạn"></input>
              </li>
              <li>
                <button className="submit-email">Gửi</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
