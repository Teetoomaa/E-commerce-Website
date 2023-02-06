import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";

const ProductCard = ({ coffee }) => {
  const { coffeename } = useParams();
  return (
    <div className="product-container">
      {coffee
        .filter((coffee) => coffee.coffee_name === coffeename)
        .map((coffee) => (
          <div className="products-wrapper">
            <div className="product-img">
              <img src={coffee.img} alt="second" />
            </div>

            <div className="product-contents">
              <h1>{coffee.coffee_name}</h1>
              <p>
                Lorem Ipsum id fugiat nostrud irure ex duis ea quis id quis ad
                et. Sunt qui esse pariatur duis mollit dolore cillum minim
                tempor enim.
              </p>
              <span>AVAILABLE</span>

              <div className="product-rating">
                <div>
                <AiFillStar style={{ fontSize: 25, color: "#794e21" }} />
                <AiFillStar style={{ fontSize: 25, color: "#794e21" }} />
                <AiFillStar style={{ fontSize: 25, color: "#794e21" }} />
                <AiFillStar style={{ fontSize: 25, color: "#794e21" }} />
                <AiFillStar style={{ fontSize: 25, color: "#794e21" }} />
                </div>
                <h6>500+ Views</h6>
              </div>

              <div className="product-innercontents">
                <h2>${coffee.price}</h2>
                <button>ADD TO CART</button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductCard;
