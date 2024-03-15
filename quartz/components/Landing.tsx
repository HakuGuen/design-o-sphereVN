import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import landingStyle from "./styles/Landing.scss"


export const TOTAL_CARDS = 8
export const CARDS = {
  basics: (
    <a href={"/Giới-Thiệu"}>
      <div class="card card-1">
        <p class="card-title">Kiến Trúc</p>
        <p class="card-subhead"> Thế giới và Việt Nam </p>
        <img src="/static/1-illo.png" class="card-illustration-1" />
      </div>
    </a>
  ),
  "getting-started": (
    <a href={"/getting-started"}>
      <div class="card card-2">
        <p class="card-title">Kiến Trúc Cảnh Quan</p>
        <p class="card-subhead">Thiết Kế Cảnh Quan</p>
        <img src="/static/1-illo.png" class="card-illustration-2" />
      </div>
    </a>
  ),
  "growing-people": (
    <a href={"/growing-people"}>
      <div class="card card-3">
        <p class="card-title">Kiến Trúc Nội Thất</p>
        <p class="card-subhead">Thiết Kế Nội Thất</p>
        <img src="/static/1-illo.png" class="card-illustration-3" />
      </div>
    </a>
  ),
  "superboosting-ideas": (
    <a href={"/superboosting-ideas"}>
      <div class="card card-4">
        <p class="card-title">Thiết Kế Không Gian</p>
        <p class="card-subhead">Chuyên ngành mới</p>
        <img src="/static/1-illo.png" class="card-illustration-4" />
      </div>
    </a>
  ),
  maintenance: (
    <a href={"/maintenance"}>
      <div class="card card-5">
        <p class="card-title">Quy Hoạch Đô Thị </p>
        <p class="card-subhead">Thiết kế đô thị </p>
        <img src="/static/1-illo.png" class="card-illustration-5" />
      </div>
    </a>
  ),

"industrial-design": (
  <a href={"/maintenance"}>
    <div class="card card-6">
      <p class="card-title">Thiết Kế Công Nghiệp</p>
      <p class="card-subhead">Đồ Nội Thất</p>
      <img src="/static/1-illo.png" class="card-illustration-6" />
    </div>
  </a>
),

"Lighting-Material": (
  <a href={"/maintenance"}>
    <div class="card card-7">
      <p class="card-title">Ánh Sáng & Vật Liệu</p>
      <p class="card-subhead">ứng dụng trong thiết kế </p>
      <img src="/static/1-illo.png" class="card-illustration-7" />
    </div>
  </a>
),

"Case Study": (
  <a href={"/maintenance"}>
    <div class="card card-8">
      <p class="card-title">AI & Công cụ mới </p>
      <p class="card-subhead">ứng dụng trong thiết kế</p>
      <img src="/static/1-illo.png" class="card-illustration-8" />
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
            <a href={"/Giới-Thiệu"} target="_blank">
            Giới thiệu
            </a>{" "}
            •{" "}
            <a href="https://github.com/Socratica-Org/toolbox" target="_blank">
            Hướng dẫn
            </a>{" "}
            •{" "}
            <a href="https://hakuguen.github.io/design-o-sphereEN" target="_self">
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