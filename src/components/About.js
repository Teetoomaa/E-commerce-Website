import image from "../images/Coffeeimg.jpg";

const About = () => {
  return (
    <div className="about-container">
      <h2>ABOUT US</h2>

      <div className="image-container">
        <img src={image} alt="image" />

        <div className="text-container">
          <p>
            Lorem Ipsum Aliqua id fugiat nostrud irure ex duis ea quis id quis
            ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum
            minim tempor enim. Elit aute irure tempor cupidatat incididunt sint
            deserunt ut voluptate aute id deserunt nisi.
          </p>
          <p>
            Lorem Ipsum id fugiat nostrud irure ex duis ea quis id quis ad et.
            Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
            tempor enim.
          </p>
          <h6>
            Lorem Ipsum mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum.
          </h6>
          </div>
      </div>
    </div>
  );
};

export default About;
