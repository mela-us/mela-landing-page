"use client"

import { useEffect, useRef } from "react"
import "../styles/AboutPage.css"

const AboutPage = () => {
  const sectionsRef = useRef([])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)
    

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [])

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }

  return (
    <div className="about-page">
      <div className="page-header">
        <h1>Về chúng tôi</h1>
      </div>

      <div className="about-container">
        <section className="about-section" ref={addToRefs}>
          <h2>Sứ mệnh của MELA</h2>
          <p>
            MELA ra đời với sứ mệnh mang đến một phương pháp học toán mới mẻ, hiệu quả và thú vị cho học sinh. Chúng tôi
            tin rằng việc học toán không chỉ là ghi nhớ công thức và làm bài tập, mà còn là phát triển tư duy logic, khả
            năng giải quyết vấn đề và sự sáng tạo.
          </p>
          <p>
            Với đội ngũ giáo viên giàu kinh nghiệm và các chuyên gia công nghệ, chúng tôi đã phát triển MELA - ứng dụng
            học toán tư duy đột phá, kết hợp giữa kiến thức toán học và công nghệ AI hiện đại.
          </p>
        </section>

        <section className="about-section" ref={addToRefs}>
          <h2>Tầm nhìn</h2>
          <p>
            MELA hướng đến việc trở thành người bạn đồng hành đáng tin cậy trong hành trình học toán của mỗi học sinh.
            Chúng tôi mong muốn xây dựng một cộng đồng học tập nơi mọi người đều có thể tiếp cận với kiến thức toán học
            một cách dễ dàng, hiệu quả và thú vị.
          </p>
          <p>
            Trong tương lai, MELA sẽ không ngừng phát triển, mở rộng nội dung và tính năng, để đáp ứng nhu cầu học tập
            ngày càng cao của học sinh và phụ huynh.
          </p>
        </section>

        <section className="about-section" ref={addToRefs}>
          <h2>Giá trị cốt lõi</h2>
          <div className="core-values">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Sáng tạo</h3>
              <p>Luôn đổi mới phương pháp giảng dạy và nội dung học tập</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Đồng hành</h3>
              <p>Luôn đồng hành cùng học sinh trong hành trình học tập</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Phát triển</h3>
              <p>Không ngừng phát triển để mang đến trải nghiệm tốt nhất</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Tâm huyết</h3>
              <p>Làm việc với tất cả tâm huyết và trách nhiệm</p>
            </div>
          </div>
        </section>

        <section className="about-section" ref={addToRefs}>
          <h2>Câu chuyện của chúng tôi</h2>
          <div className="story-content">
            <div className="story-image">
              <img src="/images/about-story.jpg" alt="MELA Story" />
            </div>
            <div className="story-text">
              <p>
                MELA bắt đầu từ ý tưởng của một nhóm sinh viên đam mê công nghệ và giáo dục tại Trường Đại học Khoa học
                Tự nhiên, Khoa Công nghệ Thông tin. Chúng tôi nhận thấy rằng nhiều học sinh gặp khó khăn trong việc học
                toán, đặc biệt là toán nâng cao và tư duy logic.
              </p>
              <p>
                Với mong muốn giúp các em học sinh yêu thích môn toán và phát triển tư duy logic, chúng tôi đã phát
                triển MELA - ứng dụng học toán tư duy với sự hỗ trợ của công nghệ AI.
              </p>
              <p>
                Sau nhiều tháng nghiên cứu, phát triển và thử nghiệm, MELA đã ra đời và nhận được sự đón nhận tích cực
                từ học sinh, phụ huynh và giáo viên.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutPage

