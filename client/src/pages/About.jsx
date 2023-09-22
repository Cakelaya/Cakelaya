import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Announcement from "../components/Announcement";
import styled from "styled-components";
import Header from "../components/Header";

const Container = styled.div``;

const Content = styled.div`
  /* border-top: 2px solid lightgray; */
  margin: 20px auto;
`;
const Head = styled.h1`
  width: 100%;
  text-align: center;
  margin: 50px auto;
  margin-bottom: 10px;
  font-size: 50px;
`;
const Context = styled.div`
  width: 90%;
  margin: 40px auto;
  padding: 10px;
  text-align: justify;
  div{
    text-align: left;
  }
  @media (max-width: 786px) {
    width: 75%;
  }
`;

const Content2 = styled.div``;

const Context2 = styled.div`
  display: flex;
  padding: 5px;
  /* background-color: #f3f2ef; */
  flex-direction: row;
  justify-content: space-around;
  padding: 80px;
  margin: 10px;
  flex-wrap: wrap;
`;

const Box = styled.div`
  width: 400px;
  @media (max-width: 786px) {
    margin-top: 40px;
  }
`;

const Name = styled.h1`
  margin-top: 10px;
  text-align: center;
`;

const Image = styled.img`
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 50%;
  height: 300px;
  width: 300px;
  padding: 10px;
  object-fit: contain;
`;

const Des = styled.div`
  margin-top: 10px;
  width: 100%;
  text-align: center;
  font-size: 20px;
`;

const Dep = styled.div`
  width: 100%;
  text-align: center;
`;

const ImageBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const About = () => {
  return (
    <Container>
      <Announcement />
      <Header />
      <Content>
        <Head>Work for Social Cause</Head>
        <Context>
          
        </Context>
      </Content>
      <Content>
        <Head>About Us</Head>
        <Context>
        For every order you place with us, we donate 5% of the net order value to the KOSHISH EDUCATIONAL & WELFARE SOCIETY (an initiative of one of the alumni of KNIT). The main aim of the NGO lies in imparting and providing the best educational facilities to the ones who are less privileged. You can mail us at contact@cakelaya.com, to know more about our previous donations to the society. We don't charge anything extra for the same, rather from the order you place, we just take out 5% of it to donate to the society.
        </Context>
      </Content>
      <Content style={{ border: "none" }}>
        <Head>Our Aim and Vision</Head>
        <Context>
          Our main aim is to solve the cake delivery problems that persist
          currently in Tier 2 and Tier 3 cities. The current marketplace lacks
          efficient players to tackle the problem of cake delivery to your
          doorstep. If there are, they all sell cake at a very expensive rate.
          The prices are over-hiked. Our aim and vision are to address the same
          concern. To tackle this problem, we have tied up with small/local
          bakers/players/vendors in the market itself and there will be no role
          of any big bakers/players/vendors dominating the market and exploiting
          small/local bakers/players/vendors in the market. Local
          bakers/players/vendors will be contacted to deliver your orders to you
          once you place an order. In this way, even the small vendors won't be
          affected and a healthy marketplace environment will be developed. We
          want the customer and shopkeeper both get benefitted from our
          services. After the lockdown, where several businesses have suffered
          from heavy losses, digitalisation and technology are the way to help
          them. Pricing is set in such a way that even the shopkeeper remains
          profited as well as students get the best and cheapest cake possible
          in the city. We prefer quality over anything. Your health is of utmost
          priority to us and thus all the cakes delivered are freshly baked and
          prepared within 15 minutes thereafter the order is placed. Cake forms
          an important and integral part of any occasion and adds flavours to
          it, be it your anniversary, your birthday, your internship party or
          your placement party. All we request from you is to give our services
          a try and emerge with a hassle-free experience. Wouldn't that be
          convenient for all of us, to sit in our room, in our cosy bed, and
          just scan a QR code to get the best quality cake at the lowest
          possible price (and we assure you that!)? Sounds interesting? Right?
          We know, it does!
        </Context>
      </Content>
      <Content style={{ border: "none" }}>
        <Head>Our Key Values</Head>
        <Context>
          <div>
            We value each of our customers every time, through premium products,
            services and value for money. We are driven by innovation,
            technology &amp; people-first approach. Our core values encroach upon
            Character, Commitment, Compliance, Doing the Most Difficult Task
            First, Ethics, Fair-Play, Finishing to the End, Integrity,
            Ownership, Persistence, Transparency, and Trustworthiness.
            Compassion: Empathy, Gratitude, Inclusiveness and Respect. Customer
            Centric: Accountability, Customer (External as well as Internal i.e.
            Employees &amp; Partners), Pro- Feedback, and Responsiveness. Collective
            Growth: Community service, Cost-Consciousness, Inclusiveness,
            Profitability, Social Responsibility, and Sustainability. Continuous
            Transformation: Adaptability, Agility, Being Devil's Advocate,
            Collaboration, Continuous Improvement, Curiosity, Diversity,
            Experiment, Innovation, Introspection, Resilience, Sharing, and
            Seeking Knowledge.
          </div>
          <ul>
            <li>
              <b>Compassion:</b> Empathy, Gratitude, Inclusiveness and Respect.
            </li>
            <li>
              <b>Customer Centric:</b> Accountability, Customer (External as
              well as Internal i.e. Employees &amp; Partners), Pro- Feedback,
              and Responsiveness.
            </li>
            <li>
              <b>Collective Growth:</b> Community service, Cost-Consciousness,
              Inclusiveness, Profitability, Social Responsibility, and
              Sustainability.
            </li>
            <li>
              <b>Continuous Transformation:</b> Adaptability, Agility, Being
              Devil&#39;s Advocate, Collaboration, Continuous Improvement,
              Curiosity, Diversity, Experiment, Innovation, Introspection,
              Resilience, Sharing, and Seeking Knowledge.
            </li>
          </ul>
        </Context>
      </Content>
      <Content style={{ border: "none" }}>
        <Head>Refund and Cancellation</Head>
        <Context>
          Currently, the option to cancel your order is not available on our website, so we request everyone to place the order with utmost care! In case, if you want to update your delivery address or change your cake flavour, that can be done by contacting the phone numbers mentioned below. For refunds, for requests with a genuine reason, your refund is processed immediately after verification, and the amount is refunded back to your original payment method within 1-2 business days. For any further queries, please feel free to write us at our official mail ID as mentioned below.
          <br></br>
          <br></br>
          <div><b>NOTE:</b> In case of any refunds initiated by users, the amount will be refunded after a standard 5% order value deduction.</div>
        </Context>
      </Content>
      <Content style={{ border: "none" }}>
        <Head>Privacy Policy</Head>
        <Context>
          Your data stored with us is 100% safe as well as secured. We guarantee that your data or details, whether it be related to logging in or payment, won't be leaked under any circumstances. They are completely confidential. Even anyone at Cakeलाया ?, can't look out for any details. For us, the safety and security of the user are of utmost priority. At any point, if the user feels, that they want to remove their data from our database, they can mail us at our official email or contact us at the numbers mentioned below. We take strict actions against any security or safety breaches at our organisation. We believe that customers are next to god, and believe in providing them with the safest and most hassle-free experience. Your feedback will help us improve our services. Feel free to fill out the google form attached below, to give your feedback about our services. We respect your privacy and anonymity, and thus while filling out the form you won't be asked to enter your name/phone number/email ID or any personal details. For any queries, feel free to write to us at our official mail. Usually, we reply to emails within 48 hours. Sometimes, it may take more than that in case of high demand.
          <br />
          <br />
          <div>
            <b>Feedback Form</b>: <a href="https://forms.gle/EzorwsP25DPBBTpr9">https://forms.gle/EzorwsP25DPBBTpr9</a>
          </div>
        </Context>
      </Content>

      {/* <Content2>
        <Head>Founders</Head>
        <Context2>
          <Box>
            <ImageBox>
              <Image src="images/founder1.png"></Image>
            </ImageBox>
            <Name>Advit Mittal</Name>
            <Dep>(Co-Founder, CEO)</Dep>
            <Des>
              Advit Mittal is a young, motivated, talented, and passionate
              individual who aims at building Cakeलाया ? as a successful
              and reputed brand.
            </Des>
          </Box>
          <Box>
            <ImageBox>
              <Image src="images/founder2.png" ></Image>
            </ImageBox>
            <Name>Vaibhav Pathak</Name>
            <Dep>(Co-Founder)</Dep>
            <Des>
              Vaibhav Pathak is the lead developer here. His expertise in the
              field has helped frame the technicalities for Cakeलाया ?.
            </Des>
          </Box>
          <Box>
            <ImageBox>
              <Image src="images/founder3.png"></Image>
            </ImageBox>
            <Name>Abhimanyu Solanki</Name>
            <Dep>(Co-Founder, CMO)</Dep>
            <Des>
              Abhimanyu Solanki possesses excellent communication, persuasion
              and negotiation skills. He is the head of the entire public
              relations department at Cakeलाया ?.
            </Des>
          </Box>
        </Context2>
      </Content2>       */}
      <Footer />
    </Container>
  );
};
