import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
        Benefits of E-Commerce (Powered by React JS)

1. 24/7 Availability:
With the use of React.js, we’ve built a fast and reliable e-commerce platform that allows customers to shop at any time. You can order your favorite products anytime, day or night.

2. Convenient Shopping from Home:
Using React.js’s dynamic capabilities, we’ve created a seamless shopping experience, where you can browse products from the comfort of your home and enjoy fast loading times while placing your orders.

3. Wide Variety and Range:
Thanks to React.js’s reusable components, our website offers an extensive range of categories and brands that you can easily browse, helping you choose the best products for yourself.

4. Best Discounts and Offers:
With React’s high-performance capabilities, we keep you updated with the latest discounts and offers, ensuring they are instantly displayed on our fast-loading website.

5. Personalization and Recommendations:
Using React.js’s powerful frontend features, we’ve designed our site to provide personalized recommendations based on your shopping history, making it easier for you to find the best options.

6. Cost Efficiency (Powered by React):
React.js’s component-based architecture allows us to develop and maintain our website efficiently and at a lower cost. This helps us ensure fast development and cost-effectiveness in running the platform.

7. Easy Payment Options:
With React’s interactive UI, we offer you a variety of safe and user-friendly payment methods. The payment process on our React-based site is secure and easy to navigate.

8. Global Reach:
React.js’s high-performance and scalable structure enables our e-commerce platform to reach customers worldwide. No matter where you are, our products are easily accessible to you.

9. Customer Reviews and Feedback:
With React’s interactive forms and review section, you can easily share your feedback. This helps us understand your needs better and continuously improve our services.
🙂

        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage