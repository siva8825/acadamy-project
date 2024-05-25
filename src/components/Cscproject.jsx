import React from 'react'
import BgImage from './images/bgimg01.jpg'
import './Cscproject.css';
import { Col, Container, Row } from 'react-bootstrap-v5';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Collapse } from "antd";
import { FaCircleCheck } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import crs1 from './images/crs1.png'
// import crs2 from './images/crs2.png'
import crs3 from './images/crs3.png'
import crs4 from './images/crs4.png'
import crs5 from './images/crs5.png'
import crs6 from './images/crs6.png'
import crs7 from './images/crs7.png'
// import crs8 from './images/crs8.png'
import crs9 from './images/crs9.png'
import crs10 from './images/crs10.png'
// import number1 from './images/number1.svg'
import arrowup from './images/arrowup.png'
import arrowdown from './images/arrowdown.png'
import creditIcon1 from './images/credit-icon1.svg'
import creditIcon2 from './images/credit-icon2.svg'
import creditIcon3 from './images/credit-icon3.svg'
import creditIcon4 from './images/credit-icon4.svg'
import projectcseImg from './images/projectcseImg.svg'
import benefitIcon1 from './images/benifitIcon1.svg'
import benefitIcon2 from './images/benifit-icon2.svg'
import benefitIcon3 from './images/benifit-icon3.svg'
import benefitIcon4 from './images/benifit-icon4.svg'

const Cscproject = () => {

  const items2 = [
    {
      key: "1",
      label:
        "Am I eligible for this project?",
      children: (
        <div>
          <div className="border-l-4 border-[#49adcc] p-2 answer text-base pl-3 bg-[#49adcc8f]">
          Yes! Those who are interested in computer science are eligible. Even beginners can also enroll in this project.
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: "How much time does it take to complete the project?",
      children: (
        <div>
          <div className="border-l-4 border-[#49adcc] p-2 answer text-base pl-3 bg-[#49adcc8f]">
          It takes around 7 to 10 classes to learn and execute it and then to complete the project. Each class will be around 2 to 3 hours.
          </div>
        </div>
      ),
    },
    {
      key: "3",
      label: "Can we do the project on our own?",
      children: (
        <div>
          <div className="border-l-4 border-[#49adcc] p-2 answer text-base pl-3 bg-[#49adcc8f]">
          The answer is yes. If you are interested in doing the projects on your own you can share the idea so that our experts will guide you to execute the project and get succeeded.
          </div>
        </div>
      ),
    },
    {
      key: "4",
      label:
        "Is it hard to learn and complete the project?",
      children: (
        <div>
          <div className="border-l-4 border-[#49adcc] p-2 answer text-base pl-3 bg-[#49adcc8f]">
          It is not so hard to complete the project. If we understand the basic principles then it is very easy to complete it.
          </div>
        </div>
      ),
    },
    {
      key: "5",
      label:
        "Do we need to join as a team or individually?",
      children: (
        <div>
          <div className="border-l-4 border-[#49adcc] p-2 answer text-base pl-3 bg-[#49adcc8f]">
          It’s purely your wish. You can join as a team or you can join individually too. We can train all the students with proper technical assistance.
          </div>
        </div>
      ),
    },
    {
      key: "6",
      label: "Who will clarify my doubts?",
      children: (
        <div>
          <div className="border-l-4 border-[#49adcc] p-2 answer text-base pl-3 bg-[#49adcc8f]">
          No need to worry about doubts. You can ask doubts until you get clear on topics both online and offline.
          </div>
        </div>
      ),
    },
  ];
  




  return (
    <>
    <Container fluid className='p-0 m-0'>
    <div  className="backgroundImage bg-center" style={{

minHeight:"100vh",
backgroundImage:`url(${BgImage})`,
backgroundRepeat:"no-repeat",
backgroundSize:"cover",

opacity:"0.9"

}}>


<Container fluid className='firstCont    m-0'>
<Row className=' m-0 '>
  <Col xs={12} sm={12} lg={6} className='p-4 mt-3  m-0'> 
  <h1 className='text-white FirstHeading '>Final Year Project for Computer Science</h1>
  <div className="listhead">
  <li className='firstList text-white mt-4'>Kick Start your project from Scratch</li>
  <li className='firstList text-white mt-3'>Learn the fundamentals</li>
  <li className='firstList text-white mt-3'>Get trained by corporate trainer</li>
  <li className='firstList text-white mt-3'>Exercise Hands-on final year projects on CSE</li>
  <li className='firstList text-white mt-3'>Implement your ideas and convert into the project</li>
  <li className='firstList text-white mt-3'>Earn Perks & Skills</li>
  <button className='btn1 mt-5'>Enroll Now</button>
  </div>
  </Col>
  <Col xs={12} sm={12} lg={6} className=' col2 mt-3 p-4 p-0'>  

 <div className="submitForm  ">
<div className="bigqueries  ">
<h4 className='queries p-5'>Have Queries? Ask Our Experts <br />

We Are Ready To Guide You.</h4>
</div>
<div className="queries2 mt-3">
<input type=" text" name="" id="" className='input3  ' placeholder='Name'/>
<input type=" text" name="" id="" className='input3' placeholder='Email'/>
<input type=" number" name="" id="" className='input3' placeholder='Phone'/>
<button className="submit mb-5">Submit</button>
</div>

 </div>



  </Col>
</Row>

</Container>


</div>

    </Container>


<Container className='mb-5 cseContainer1' >
      <Row>
        <Col><h2  className="text-center font-semibold  mt-5 cseTitle1" >Create Your Own Android Project For CSE In Your Final Year.</h2></Col>
      </Row>
      <Row>
        <Col><p className="text-center mt-4 csePara1">For your final year Android project, you have the freedom to explore and create your own ideas. We are here to provide guidance and support in the right direction. Do not be afraid to put your ideas into action. It’s always better to try and take action rather than not doing anything at all.</p></Col>
      </Row>

<Row className='mt-5'>

  <p className='m-0 cseTitle2'>Two Choices Are Offered At Kitkat Software Technologies. You Can Select The Project Based On Your Requirements.</p>
 <li className='cseList1 mt-3'>With the assistance of Kitkat Technologies Trainer, you may create a plan, learn it, put it into practise, and succeed.</li>
 <li className='cseList1 mt-3'>We’ll work on our projects. We will train you so that you can work on a real project, execute it, and succeed with our assistance.</li>

</Row>
    </Container>


    <Container fluid className='cseContainer2 mt-5 '>
     <Container >
<Row>
  <h2 className='cseTitle3 mt-5'>Projects <span className='span1'>We Support</span> </h2>
<li className='mt-4'>We guide you in mini projects for computer science students.</li>
<li className='mt-3'>We support to implement the best final year projects for CSE.</li>
<li className='mt-3'>We support projects for various departments like Computer Science, Information Technology, B.E. Computer Science, MCA and more.</li>
<li className='mt-3'>We support the final year projects for computer science with source code.</li>
<p className="cseSubtitle mt-4 mb-4">Creative Computer Science Project For Final Year</p>
<Col lg={6}>
<p className='cseList2'><FaCircleCheck className='check'  />Android Based Application Development.</p>
<p className='cseList2'><FaCircleCheck className='check'  />Web Application Development using PHP/ MySQL.</p>
<p className='cseList2'><FaCircleCheck className='check'  />Angular based Web Application Development using Node.</p>
</Col>
<Col lg={6} className='mb-4'>
<p className='cseList2'><FaCircleCheck className='check' />Machine Learning & Artificial Intelligence based Application using Python.</p>
<p className='cseList2'><FaCircleCheck className='check' />Analytics using Data Science.</p>
<p className='cseList2'><FaCircleCheck className='check' />Python Web Application Design & Development.</p>
<p className='cseList2'><FaCircleCheck className='check'  />IOT Based Projects.</p>
</Col>
</Row>

     </Container>
    </Container>


<Container className='container3 mt-5 mb-5'>
<Row>
<h2>Courses With Project</h2>
<p>In our Final Year Android project course, we offer comprehensive training to help students stay updated and proficient in the latest technology. Each student is assigned a dedicated trainer who provides personalized guidance throughout the course. We begin with the fundamentals and provide an overview of the course, gradually progressing to more advanced topics once students have completed assigned tasks.</p>
</Row>

</Container>

<Container fluid className='container4'>
  <Container >
    <Row >
<h2 className='cseTitle4 mt-5'>Our <span className='span2'>Trending Courses</span></h2>
<p className='cseTitle4 mt-3'>Kitkat Software Technology Offers A Future Of Technologies With Live Hands-On Training With 100% Placement Support.</p>

<div className="mt-8">
            <Row gutter={16} style={{ margin: 0 }} className="justify-center">
              <Col lg={3} md={3} sm={12} xs={12}>
                <div
                  className="subCourses bg-white text-center p-5 rounded mb-4 flex justify-center items-center " 
                  style={{ height: "203px" }}
                >
                  <div className='fullStack decoration-dotted'>
                    <img src={crs1} alt="crs" className="m-auto" />
                    <div className="text-base font-semibold mt-4 ">
                      Full Stack Development
                     
                    </div>
                  
                    <div className="readMore decoration-dotted">
                <p className=" font-light mt-3  m-0 ">Read More</p>
                <FaArrowRightLong  className='font-light  mt-3'/>
                </div>
                  </div>
                
                </div>
              </Col>
              {/* <Col lg={4} md={4} sm={12} xs={12}>
                <div
                  className="bg-white text-center p-3 rounded mb-4 flex justify-center items-center"
                  style={{ height: "163px" }}
                >
                  <div>
                    <img src={crs2} alt="crs" className="m-auto" />
                    <div className="text-base font-semibold mt-4">
                      Angular Js Training
                    </div>
                  </div>
                </div>
              </Col> */}
              <Col lg={3} md={3} sm={12} xs={12}>
                <div
                  className="subCourses bg-white text-center p-3 rounded mb-4 flex justify-center items-center"
                  style={{ height: "203px" }}
                >
                  <div>
                    <img src={crs3} alt="crs" className="m-auto" />
                    <div className="text-base font-semibold mt-4">
                      IOS Training
                      
                    </div>
                    <div className="readMore decoration-dotted">
                <p className=" font-light mt-3 m-0 ">Read More</p>
                <FaArrowRightLong  className='font-light mt-3 '/>
                </div>
                  </div>
                </div>
              </Col>
              <Col lg={3} md={3} sm={12} xs={12}>
                <div
                  className="subCourses bg-white text-center p-3 rounded mb-4 flex justify-center items-center"
                  style={{ height: "203px" }}
                >
                  <div>
                    <img src={crs4} alt="crs" className="m-auto" />
                    <div className="text-base font-semibold mt-4">
                      Android Training
                    </div>
                    <div className="readMore decoration-dotted">
                <p className=" font-light mt-3 m-0 ">Read More</p>
                <FaArrowRightLong  className='font-light mt-3 '/>
                </div>
                  </div>
                </div>
              </Col>
              <Col lg={3} md={3} sm={12} xs={12}>
                <div
                  className="subCourses bg-white text-center p-3 rounded mb-4 flex justify-center items-center"
                  style={{ height: "203px" }}
                >
                  <div>
                    <img src={crs5} alt="crs" className="m-auto" />
                    <div className="text-base font-semibold mt-4">
                      Python Development
                    </div>
                    <div className="readMore decoration-dotted">
                <p className=" font-light mt-3 m-0 ">Read More</p>
                <FaArrowRightLong  className='font-light mt-3 '/>
                </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row gutter={16} style={{ margin: 0 }} className="justify-center">
              <Col lg={3} md={3} sm={12} xs={12}>
                <div
                  className="subCourses bg-white text-center p-3 rounded mb-4 flex justify-center items-center"
                  style={{ height: "203px" }}
                >
                  <div>
                    <img src={crs6} alt="crs" className="m-auto" />
                    <div className="text-base font-semibold mt-4">
                      PHP Development
                    </div>
                    <div className="readMore decoration-dotted">
                <p className=" font-light mt-3 m-0 ">Read More</p>
                <FaArrowRightLong  className='font-light mt-3 '/>
                </div>
                  </div>
                </div>
              </Col>
              <Col lg={3} md={3} sm={12} xs={12}>
                <div
                  className="subCourses bg-white text-center p-3 rounded mb-4 flex justify-center items-center"
                  style={{ height: "203px" }}
                >
                  <div>
                    <img src={crs7} alt="crs" className="m-auto" />
                    <div className="text-base font-semibold mt-4">
                      Node js Development
                    </div>
                    <div className="readMore decoration-dotted">
                <p className=" font-light mt-3 m-0 ">Read More</p>
                <FaArrowRightLong  className='font-light mt-3 '/>
                </div>
                  </div>
                </div>
              </Col>
              {/* <Col lg={4} md={4} sm={12} xs={12}>
                <div
                  className="bg-white text-center p-3 rounded mb-4 flex justify-center items-center"
                  style={{ height: "163px" }}
                >
                  <div>
                    <img src={crs8} alt="crs" className="m-auto" />
                    <div className="text-base font-semibold mt-4">
                      Core Java Development
                    </div>
                  </div>
                </div>
              </Col> */}
              <Col lg={3} md={3} sm={12} xs={12}>
                <div
                  className="subCourses bg-white text-center rounded  mb-4 flex justify-center items-center"
                  style={{ height: "203px" }}
                >
                  <div >
                    <img src={crs9} alt="crs" className="m-auto" />
                    <div className="text-base font-semibold mt-4">
                      React js Training
                    </div>
                    <div className="readMore decoration-dotted ">
                <p className=" font-light mt-3 m-0 ">Read More</p>
                <FaArrowRightLong className='font-light mt-3 '  />
                </div>
                  </div>
                </div>
              </Col>
              <Col lg={3} md={3} sm={12} xs={12}>
                <div
                  className="subCourses bg-white text-center p-3 rounded mb-4 flex justify-center items-center"
                  style={{ height: "203px" }}
                >
                  <div>
                    <img src={crs10} alt="crs" className="m-auto" />
                    <div className="text-base font-semibold mt-4">
                      DevOps Training
                    </div>
                    <div className="readMore decoration-dotted">
                <p className=" font-light mt-3 m-0 ">Read More</p>
                <FaArrowRightLong  className='font-light mt-3 '/>
                </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>





    </Row>
  </Container>
</Container>


<Container >
  <Row>
    <h2 className='text-center mt-5 mb-3'>Credits <span className='span1'>You Receive</span> </h2>
    <p className='text-center mt-2 mb-4'>Kitkat Software Technologies Offers A Future Of Technologies With Live Hands-On Training With 100% Placement Support.</p>

    
    <Col md={6}  className='mt-5'>
    <div className="creditIcon1">
<div className="creIcon1">
  <img src={creditIcon1} alt="" />
</div>
<div className="content">
  <h5>CSE Final Year Projects</h5>
  <p>You will obtain the CSE final year projects with source code.</p>
</div>
    </div>

    </Col >
    <Col md={6} className='mt-5'>
    <div className="creditIcon2">
    <div className="creIcon2">
  <img src={creditIcon2} alt="" />
</div>
<div className="content">
  <h5>Training Method</h5>
  <p>We provide both Online and Offline classes to learn from anywhere and anytime.</p>
</div>
    </div>
    
    </Col>
 
    <Col md={6} className='mt-5'>
    <div className="creditIcon3">
    <div className="creIcon3">
  <img src={creditIcon3} alt="" />
</div>
<div className="content">
  <h5>Perks</h5>
  <p>You will receive certificates to showcase your skill level.</p>
</div>
    </div>
    
    </Col>
    <Col md={6} className='mt-5'>
    <div className="creditIcon4">
    <div className="creIcon4">
  <img src={creditIcon4} alt="" />
</div>
<div className="content">
  <h5>Expert Solution</h5>
  <p>one-to-one sessions are provided for all.</p>
</div>
    </div>
    
    </Col>



  </Row>
</Container>



<Container fluid className='bigcontainer6 mt-5  '>
  <Container className=''>
<Row>
  <h2 className='text-center mt-5'>How Can You Get Benefited?</h2>
</Row>

  {/* <Row className='mt-4 benefitrow'>
  <Col xs={12} sm={12} md={3}  className='bigBenifit mt-5 mb-5  py-12'>
    <div className="verybig">
      <p className='number1'>01</p>
    <div className="benifit">
    <img src={arrowup} alt=""  className=' arrowup'/>
    <img src={benefitIcon1} alt=""  className='mt-3'/>
    <h5 className='mt-3 '>Hands-On Experience</h5>
    <p className='mt-3 text-sm'>Be a practitioner instead of just <p className='text-center'>saying.</p> </p>
    </div>
    </div>
    </Col>
    <Col xs={12} sm={12} md={3}  className='bigBenifit mt-5 mb-5 py-12'>
   <div className="verybig">  
   <p className='number2'>02</p>  
   <div className="benifit">
    
    <img src={benefitIcon2} alt=""  className='mt-3'/>

    <h5 className='mt-3 '>Skill Development</h5>
    <p className='mt-3 text-sm'>Be a skilled person by working on <p className='text-center'>live projects</p></p>
    <img src={arrowdown} alt=""  className=' arrowdown mt-5'/>
    </div>
    </div>

    </Col>
    <Col xs={12} sm={12} md={3}  className='bigBenifit mt-5 mb-5 py-12'>
    <div className="verybig">
      <p className='number3'>03</p>
    <div className="benifit">
    <img src={arrowup} alt=""  className=' arrowup '/>
    <img src={benefitIcon3} alt=""  className='mt-3'/>
    <h5 className='mt-3 '>Portfolio</h5>
    <p className='mt-3 text-sm'>Build a Project & Course portfolio. <p className='text-center'> Not a cluster of certificates.</p></p>
    </div>
    </div>
    </Col>
    <Col xs={12} sm={12} md={3}  className='bigBenifit mt-5 mb-5 py-12'>
    <div className="verybig">
      <p className='number4'>04</p>
    <div className="benifit">
    <img src={benefitIcon4} alt=""  className='mt-3'/>
    <h5 className='mt-3 '>Placement Support</h5>
    <p className='mt-3  text-sm font-medium'>We support 100% placement <p className='text-center'>opportunities.</p></p>
    <img src={arrowdown} alt=""  className=' arrowdown mt-5'/>
    </div>
    </div>
    </Col>




  </Row> */}

<Row>
<Col xs={12} sm={12} md={6} lg={3}  className='mt-5' >

<div className="bigbig mt-4">
<p className='number1 justify-center'>01</p>


<div className='bigBenifit mb-5 py-12'>

<div className="verybig">
<div className="benifit">
    <img src={arrowup} alt=""  className=' arrowup mt-4'/>
    <img src={benefitIcon1} alt=""  className='mt-3'/>
    <h5 className='mt-4 text-center '>Hands-On Experience</h5>
    <p className='mt-3 mb-4 text-sm'>Be a practitioner instead of just <p className='text-center'>saying.</p> </p>
    </div>

</div>
</div>
</div>
</Col>


<Col xs={12} sm={12}  md={6} lg={3}   className='mt-5' >

<div className="bigbig mt-4">
<p className='number1 justify-center'>02</p>


<div className='bigBenifit mb-5 py-12'>

<div className="verybig">
<div className="benifit">

    <img src={benefitIcon2} alt=""  className='mt-4'/>
    <h5 className='mt-4 text-center'>Skill Development</h5>
    <p className='mt-3 text-sm'>Be a skilled person by working on <p className='text-center'>live projects</p></p>
  <img src={arrowdown} alt=""  className=' arrowdown mt-4'/>
    </div>

</div>
</div>
</div>
</Col>


<Col xs={12} sm={12} md={6}  lg={3}   className='mt-5' >

<div className="bigbig mt-4">
<p className='number1 justify-center'>03</p>


<div className='bigBenifit mb-5 py-12'>

<div className="verybig">
<div className="benifit">
    <img src={arrowup} alt=""  className=' arrowup mt-4'/>
    <img src={benefitIcon3} alt=""  className='mt-3'/>
    <h5 className='mt-4 text-center '>Portfolio</h5>
    <p className='mt-3 text-sm'>Build a Project & Course portfolio. <p className='text-center'> Not a cluster of certificates.</p></p>
    </div>

</div>
</div>
</div>
</Col>


<Col xs={12} sm={12} md={6} lg={3}   className='mt-5' >

<div className="bigbig mt-4">
<p className='number1 justify-center'>04</p>


<div className='bigBenifit mb-5 py-12'>

<div className="verybig">
<div className="benifit">

    <img src={benefitIcon4} alt=""  className='mt-4'/>
    <h5 className='mt-4 text-center '>Placement Support</h5>
    <p className='mt-3  text-sm font-medium'>We support 100% placement <p className='text-center'>opportunities.</p></p>
  <img src={arrowdown} alt=""  className=' arrowdown mt-4'/>
    </div>

</div>
</div>
</div>
</Col>





</Row>





</Container>
</Container>












<Container className='mt-5'>
  <Row>
    <h2 className='text-center'>Why <span className='span1'>N-School?</span></h2>
    <li className='mt-4'>Trainers are certified professionals with over 9 years of experience in their respective domains.</li>
    <li className='mt-3'>Strong Theoretical & Practical Knowledge.</li>
    <li className='mt-3'>Trained more than 500+ students in a year.</li>
    <li className='mt-3'>Well connected with Hiring HR’s in various companies.</li>
    <li className='mt-3'>Trainers teach the students to learn the practices employed by the top IT companies.</li>
    <li className='mt-3'>Expert level Subject Knowledge and fully up-to-date on real-world industry applications</li>
    <li className='mt-3'>Have experienced multiple real-time projects in their Industries.</li>
    <li className='mt-3'>Trainers help the candidates to get placed in their respective company by Employee Referral / Internal Hiring process</li>
    <li className='mt-3'>Industry-experts and subject specialists who have mastered running applications providing the best training to the students.</li>
    <li className='mt-3'>Interactive online training classes permit complete interactivity between the student and the trainer.</li>
    <li className='mt-3'>Interactive online training classes permit complete interactivity between the student and the trainer.</li>
    <li className='mt-3'>We have restricted the batch size to empower students to have great understanding and communication between our trainers and students.</li>
  </Row>
</Container>


<Container fluid className='container5 mt-5 mb-5' >
<img src={projectcseImg} alt="" className='mt-4 mb-4 img-fluid'  />
</Container>



<Container fluid>

<Row>



  <Col xs={12} sm={12} lg={12}>
<div className=" font-semibold  mb-2  faq1">
            Frequently Asked Questions
          </div>
          <div className='faq '>
            <Collapse
              items={items2}
              expandIcon={({ isActive }) => (
                <div className=''>
                  {!isActive ? (
                    <PlusOutlined className="text-white " />
                  ) : (
                    <MinusOutlined className="text-white" />
                  )}
                </div>
              )}
              accordion
            />
          </div>
          </Col>
          </Row>
</Container>





    </>
  )
}

export default Cscproject