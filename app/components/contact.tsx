import {
  FiInstagram,
  FiFacebook,
  FiLinkedin,
  FiGithub,
  FiMail,
} from 'react-icons/fi';

export default function Contact() {
  return (
    <>
      <div className="header flex flex-col place-content-start place-items-start gap-y-2">
        <div className="desc text-light-transparent dark:text-dark-transparent">
          Though, I am fairly introverted myself. I do reply to messages as long
          as my human interaction battery lasts. Coding, work, or even useless
          stuff, anything is cool. So feel free to message me on any of my
          social media or shoot me an{' '}
          <a href="mailto:contact@drith.me">email.</a>
        </div>
        <div className="mt text-light-transparent dark:text-dark-transparent">
          Don&apos;t be afraid to contact me!
        </div>
      </div>
      <div className="contact-list  my-5 flex gap-5 text-2xl md:text-3xl ">
        <a
          href="https://www.instagram.com/adrielalfeus/"
          className="text-dark-background hover:text-light-transparent dark:text-light-background hover:dark:text-dark-transparent"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <FiInstagram />
        </a>
        <a
          href="https://www.facebook.com/adrielalfeus/"
          className="text-dark-background hover:text-light-transparent dark:text-light-background hover:dark:text-dark-transparent"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
        >
          <FiFacebook />
        </a>
        <a
          href="https://www.linkedin.com/in/adrielalfeus/"
          className="text-dark-background hover:text-light-transparent dark:text-light-background hover:dark:text-dark-transparent"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FiLinkedin />
        </a>
        <a
          href="https://github.com/Drithh"
          className="text-dark-background hover:text-light-transparent dark:text-light-background hover:dark:text-dark-transparent"
          target="_blank"
          rel="noreferrer"
          aria-label="Github"
        >
          <FiGithub />
        </a>
        <a
          href="mailto:contact@drith.me"
          className="text-dark-background hover:text-light-transparent dark:text-light-background hover:dark:text-dark-transparent"
          target="_blank"
          rel="noreferrer"
          aria-label="Email"
        >
          <FiMail />
        </a>
      </div>
    </>
  );
}
