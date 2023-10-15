import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Sebastian Contreras Portafolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="Sobre mi" />
        <InterestsSection sectionId="details" heading="Tecnologia y conocimientos" />
        <ProjectsSection sectionId="proyectos" heading="Proyectos" />
        <ContactSection sectionId="github" heading="Contactame" />
      </Page>
    </>
  );
}
