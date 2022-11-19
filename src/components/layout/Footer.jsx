const Footer = () => {
  return <footer className="footer-container">
    <div className="footer-wrap">
      <ul className="policy-list">
        <li>이용약관</li>
        <li>개인정보처리방침</li>
      </ul>
      <address className="footer-addr">
        <ul className="addr-list">
          <li>㈜엘지유플러스</li>
          <li>서울특별시 용산구 한강대로 32</li>
          <li>대표이사 황현식</li>
          <li>사업자등록번호 220-81-39938</li>
          <li>통신판매신고 제 2015-서울용산-00481호</li>
          <li>문의 <button className="btn">idolplus.help@gmail.com</button></li>
        </ul>
      </address>
      <p className="copyright">Copyright &copy; LG Uplus Corp. All Rights Reserved.</p>
    </div>
  </footer >
}

export default Footer;