<template>
  <div class="about-us">
    <header class="about-us__header">
      <h1>About Me</h1>
    </header>
    <section class="about-us__content">
      <div class="about-us__intro">
        <img src="../assets/ADEREMI.jpeg" alt="Profile Picture" class="about-us__image" />
        <p>
          Hello! I am Aderemi Oje, an experienced insurance professional and passionate software
          developer. With over nine years in the insurance industry and a robust background in
          software development, I bring a unique blend of expertise to both fields. My goal is to
          leverage technology to create innovative solutions that streamline insurance processes and
          improve client experiences.
        </p>
      </div>
      <div class="about-us__section">
        <h2>My Journey in Insurance</h2>
        <p>
          My career in the insurance industry began Nine (9) years ago. Over the years, I have
          gained extensive knowledge and experience in various aspects of insurance, including
          policy management, risk assessment, and claims processing. My commitment to providing
          exceptional service and tailored insurance solutions has helped many clients secure their
          futures and protect their assets.
        </p>
      </div>
      <div class="about-us__section">
        <h2>Passion for Software Development</h2>
        <p>
          In addition to my insurance expertise, I am also a dedicated software developer. I
          specialize in Html, Css, Typescript, JavaScript, Chakra UI, React, and Vue.js libraries,
          and I have developed numerous applications that solve real-world problems. My technical
          skills allow me to design and implement software solutions that enhance efficiency, reduce
          costs, and provide better user experiences.
        </p>
      </div>
      <div class="about-us__section">
        <h2>Bridging Insurance and Technology</h2>
        <p>
          My unique combination of skills in insurance and software development enables me to bridge
          the gap between these two fields. I am passionate about using technology to innovate and
          improve the insurance industry. Whether it's developing custom software for insurance
          companies or creating digital tools for clients, I strive to integrate the latest
          technological advancements to drive progress and deliver value.
        </p>
      </div>
      <div class="about-us__section">
        <h2>Get in Touch</h2>
        <p>
          If you're looking for an insurance professional who understands the importance of
          technology in today's world, or a software developer with a deep understanding of the
          insurance industry, I'd love to connect. Let's work together to create solutions that meet
          your needs and exceed your expectations.
        </p>
        <p>
          Contact me at <a href="mailto:remoj2003@gmail.com">remoj2003@gmail.com</a> or follow me on
          social media to stay up-to-date.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutUs'
}
</script>

<style scoped>
.about-us {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}

.about-us__header {
  text-align: center;
  margin-bottom: 20px;
}

.about-us__image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
}

.about-us__intro {
  text-align: center;
  margin-bottom: 30px;
}

.about-us__section {
  margin-bottom: 20px;
}

.about-us__section h2 {
  margin-bottom: 10px;
  color: #007bff;
}

.about-us__section p {
  margin-bottom: 10px;
}
</style>
