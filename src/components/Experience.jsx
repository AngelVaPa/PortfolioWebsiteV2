// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../css/Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="py-5 bg-light">    
      <div className="container d-flex flex-column align-items-center justify-content-center" 
          style={{ minHeight: '100vh', position: 'relative', zIndex: 2 }}>
        <h1 className="experienceTitle">Experience</h1>
        <h2>Software Development Graduate | Class of 2023</h2>
        <p className="experience-cont">Since the beginning of my studies in software development, I have actively engaged in various projects and hands-on exercises to enhance my skills. These include developing bots for Discord channels, building facial recognition attendance systems, designing and managing APIs, creating different types of websites, among others.</p>
        <h2>Junior Software Developer | DevExpress</h2>
        <p className="experience-cont">As part of the cross-platform development team (Web, iOS, Android) at DevExpress, I contributed primarily to frontend development using Flutter and packages like Riverpod, while focusing more on backend development with Firebase and TypeScript.
        One of my key contributions to a digital inspection registration application was implementing the invitation system for associated members, leveraging the Firestore Send Email extension. Additionally, I was responsible for fully implementing the notification system using Firebase Cloud Messaging (FCM).</p>
        <h2>Nowdays</h2>
        <p className="experience-cont">I am currently seeking an entry-level position where I can further develop my skills and contribute to a dynamic team. At the same time, I continue as a volunteer at DevExpress, where I actively engage in projects that enhance my expertise in cross-platform development, backend technologies, and cloud-based solutions. My goal is to apply my knowledge in a professional setting while continuously learning and refining my abilities to deliver high-quality software solutions.</p>
        <p className="experience-cont">Below are some of the projects I have worked on (WIP):</p>
        <div className="project-container">
          <div className="project">
            <a id="portfolioV1" href="https://portfoliov1.angelvapa.com/" target="_blank" rel='noreferrer' className="thumbnail btn btn-outline-light btn-lg"></a>
            <p className='prj-title'>Portfolio V1</p>
          </div>
          <div className="project">
            <a id="techBooksV1" href="https://github.com/JesusVaPa/TechBooksV1/" target="_blank" rel='noreferrer' className="thumbnail btn btn-outline-light btn-lg"></a>
            <p className='prj-title'>TechBooks V1</p>
          </div>
          <div className="project">
            <a id="easyTasks" href="https://easyTasks.angelvapa.com/" target="_blank" rel='noreferrer' className="thumbnail btn btn-outline-light btn-lg"></a>
            <p className='prj-title'>Easy Tasks</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
