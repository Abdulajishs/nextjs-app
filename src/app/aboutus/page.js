//our-domain.com/aboutus

import Link from "next/link";

const AboutPage = () => {
  return (
    <>
      <h1>Welcome to About-us Page</h1>
      <ul>
        <li>
          <Link href="/aboutus/1">Yash</Link>
        </li>
        <li>
          <Link href="/aboutus/2">Vaibhav</Link>
        </li>
        <li>
          <Link href="/aboutus/3">Suresh</Link>
        </li>
      </ul>
    </>
  );
};

export default AboutPage;
