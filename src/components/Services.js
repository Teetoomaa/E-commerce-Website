import image1 from "../images/Coffee Image 1.jpg";
import image2 from "../images/Coffee Image 2.jpg";
import image3 from "../images/Coffee Image 3.jpg";
import image4 from "../images/Coffee Image 4.jpg";
import image5 from "../images/Coffee Image 5.jpg";
import image6 from "../images/Coffee Image 6.jpg";

const Services = () => {
  return (
    <div className="services-container">
      <h2>OUR SERVICES</h2>

      <div className="services-grid">
        <div className="services">
          <div className="service-img-container">
          <img src={image1} alt="image1" />
          </div>
          
          <div className="service-contents">
          <h4>High Quality</h4>
          <p>
            Lorem Ipsum Amet minim mollit 
            non deserunt ullamco est sit aliqua
            dolor do amet sint. Velit officia consequat
          </p>
          </div>
        </div>
        <div className="services">
        <div className="service-img-container">
          <img src={image2} alt="image2" />
          </div>
          <div className="service-contents">
          <h4>Selected Coffee Beans</h4>
          <p>
            Lorem Ipsum Amet minim mollit 
            non deserunt ullamco est sit aliqua
            dolor do amet sint. Velit officia consequat
          </p>
          </div>
        </div>
        <div className="services">
        <div className="service-img-container">
          <img src={image3} alt="image3" />
          </div>
          <div className="service-contents">
          <h4>Own Roasting</h4>
          <p>
            Lorem Ipsum Amet minim mollit 
            non deserunt ullamco est sit aliqua
            dolor do amet sint. Velit officia consequat
          </p>
          </div>
        </div>
        <div className="services">
        <div className="service-img-container">
          <img src={image4} alt="image4" />
          </div>
          <div className="service-contents">
          <h4>Freshly Brewed</h4>
          <p>
            Lorem Ipsum Amet minim mollit 
            non deserunt ullamco est sit aliqua
            dolor do amet sint. Velit officia consequat
          </p>
          </div>
        </div>
        <div className="services">
        <div className="service-img-container">
          <img src={image5} alt="image5" />
          </div>
          <div className="service-contents">
          <h4>Coffee Variety</h4>
          <p>
            Lorem Ipsum Amet minim mollit 
            non deserunt ullamco est sit aliqua
            dolor do amet sint. Velit officia consequat
          </p>
          </div>
        </div>
        <div className="services">
        <div className="service-img-container">
          <img src={image6} alt="image6" />
          </div>
          <div className="service-contents">
          <h4>Excellent Grinding</h4>
          <p>
            Lorem Ipsum Amet minim mollit 
            non deserunt ullamco est sit aliqua
            dolor do amet sint. Velit officia consequat
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
