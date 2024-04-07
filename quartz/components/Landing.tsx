import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import landingStyle from "./styles/Landing.scss"


export const TOTAL_CARDS = 8
export const CARDS = {
  "Architecture": (
    <a href={"/VN/Kien-Truc/Noi-Dung"}>
      <div class="card card-1">
        <p class="card-title">Kiến Trúc</p>
        <p class="card-subhead">101</p>
        <img src="/VN/static/1-ball.png" class="card-illustration-1" />
      </div>
    </a>
  ),
  "Landscape-design": (
    <a href={"/VN/Kien-Truc-Canh-Quan/Noi-Dung"}>
      <div class="card card-2">
        <p class="card-title">Kiến Trúc Cảnh Quan</p>
        <p class="card-subhead">101</p>
        <img src="/VN/static/2-ball.png" class="card-illustration-2" />
      </div>
    </a>
  ),
  "Interior-design": (
    <a href={"/VN/Kien-Truc-Noi-That/Noi-Dung"}>
      <div class="card card-3">
        <p class="card-title">Kiến Trúc Nội Thất</p>
        <p class="card-subhead">101</p>
        <img src="/VN/static/3-ball.png" class="card-illustration-3" />
      </div>
    </a>
  ),
  "Spatial-design": (
    <a href={"/VN/Thiet-Ke-Khong-Gian/Noi-Dung"}>
      <div class="card card-4">
        <p class="card-title">Thiết Kế Không Gian</p>
        <p class="card-subhead">101</p>
        <img src="/VN/static/4-ball.png" class="card-illustration-4" />
      </div>
    </a>
  ),
  "Urban-design": (
    <a href={"/VN/Quy-Hoach-Do-Thi/Noi-Dung"}>
      <div class="card card-5">
        <p class="card-title">Quy Hoạch Đô Thị </p>
        <p class="card-subhead">101</p>
        <img src="/VN/static/5-ball.png" class="card-illustration-5" />
      </div>
    </a>
  ),

"Industrial-design": (
  <a href={"/VN/Thiet-Ke-Cong-Nghiep/Noi-Dung"}>
    <div class="card card-6">
      <p class="card-title">Thiết Kế Công Nghiệp</p>
      <p class="card-subhead">101</p>
      <img src="/VN/static/6-ball.png" class="card-illustration-6" />
    </div>
  </a>
),

"Lighting-design": (
  <a href={"/VN/Thiet-Ke-Anh-Sang/Noi-Dung"}>
    <div class="card card-7">
      <p class="card-title">Thiết Kế Ánh Sáng</p>
      <p class="card-subhead">101</p>
      <img src="/VN/static/7-ball.png" class="card-illustration-7" />
    </div>
  </a>
),

"AI-new materials": (
  <a href={"/VN/Vat-Lieu-Trong-Thiet-Ke/Noi-Dung"}>
    <div class="card card-8">
      <p class="card-title">Vật Liệu Mới </p>
      <p class="card-subhead">101</p>
      <img src="/VN/static/8-ball.png" class="card-illustration-8" />
    </div>
  </a>
),
}


export default (() => {
  function LandingComponent() {
    return (
      <div>
        <div class="content-container">
          <p class="landing-header">Welcome to Design-O-Sphere</p>
          <p class="page-subhead">
            Bắt đầu tại đậy •{" "}
            <a href={"/VN/index"} target="_blank">
            Trang Chinh
            </a>{" "}
            •{" "}
            <a href="https://designosphere.wiki" target="_blank">
            Gioi Thieu
            </a>{" "}
            •{" "}
            <a href="https://designosphere.wiki/VN/Gioi-Thieu" target="_self">
            Liên hệ
            </a>{" "}
            •{" "}
            
          </p>
          <div class="issue-container">
            {Object.values(CARDS)}
            {Array(TOTAL_CARDS - Object.keys(CARDS).length)
              .fill(0)
              .map(() => (
                <div class="card card-coming">
                  <p class="card-title">Coming Soon</p>
                  <p class="card-subhead">Issue XXX</p>
                </div>
              ))}
          </div>
        </div>
      </div>
      
    )
  }

  LandingComponent.css = landingStyle
  return LandingComponent
}) satisfies QuartzComponentConstructor