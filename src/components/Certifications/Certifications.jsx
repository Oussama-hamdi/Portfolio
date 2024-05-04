import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import Certification from "./Certification";
import "./Certifications.css";
import cert1 from "../../assets/alx-program.png";
import cert2 from "../../assets/bits-and-bytes-of-computer-networking.jpeg";
import cert3 from "../../assets/technical-support-fundamentals.jpeg";
import cert4 from "../../assets/hacker-rank-javascript.png";

/*
  we need to pass these data as a props  { img, title, provider, date, link }
*/

function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <div className="container">
        <SectionHeader title="Certifications" />
        <div className="certifications-content">
          <Certification
            img={cert1}
            title={"ALX Software Engineering"}
            provider={"Alx"}
            date={"05 April 2024"}
            link={"https://intranet.alxswe.com/certificates/JmHyY2hp6L"}
          />
          <Certification
            img={cert2}
            title={"Networking"}
            provider={"Coursera"}
            date={"23 January 2023"}
            link={
              "https://www.coursera.org/account/accomplishments/verify/TH9CQL6UU754"
            }
          />
          <Certification
            img={cert3}
            title={"Technical Support Fundamentals"}
            provider={"Coursera"}
            date={"23 January 2023"}
            link={
              "https://www.coursera.org/account/accomplishments/verify/4GA3DKCDAYL7"
            }
          />
          <Certification
            img={cert4}
            title={"JavaScript (Basic)"}
            provider={"Hacker Rank"}
            date={"10 October 2022"}
            link={"https://www.hackerrank.com/certificates/3e46f39c436e"}
          />
        </div>
      </div>
    </section>
  );
}

export default Certifications;
