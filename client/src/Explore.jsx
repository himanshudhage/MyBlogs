import { Link } from "react-router-dom";
import "./Explore.css";

const categories = [
  { name: "Technology", image: "https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg" },
  { name: "Health", image: "https://jgu.edu.in/blog/wp-content/uploads/2023/12/shutterstock_1451879171.jpg" },
  { name: "Finance", image: "https://staticlearn.shine.com/l/m/images/blog/mobile/emerging_technologies_in_finance.webp" },
  { name: "Lifestyle", image: "https://staticlearn.shine.com/l/m/images/blog/mobile/emerging_technologies_in_finance.webp" },
  { name: "Education", image: "https://media.istockphoto.com/id/1358014313/photo/group-of-elementary-students-having-computer-class-with-their-teacher-in-the-classroom.jpg?s=612x612&w=0&k=20&c=3xsykmHXFa9ejL_sP2Xxiow7zdtmKvg15UxXFfgR98Q=" },
  { name: "Travel", image: "https://blogassets.airtel.in/wp-content/uploads/2023/05/felix-rostig-UmV2wr-Vbq8-unsplash.jpg" },
  { name: "Gaming", image: "https://cdn.bluent.com/images/wher-are-we-going.webp" },
  { name: "Entertainment", image: "https://etimg.etb2bimg.com/photo/81478822.cms" },
//   { name: "Self-Improvement", image: "https://miro.medium.com/v2/resize:fit:1152/1*SyYl_sq7PAAOyLq3T62vLA.png" }
];

export default function Explore() {
  return (
    <div className="explore-container">
      {/* Hero Section */}
      <header className="hero">
        <h1>Welcome to BlogSphere</h1>
      </header>
      
      <div className="explore-hero">
        <h1>Discover Your Next Read</h1>
        <p>Explore the world of knowledge, trends, and insights curated just for you.</p>
      </div>

      {/* Categories Section */}
      <h2 className="explore-title">Explore Categories</h2>
      <div className="explore-grid">
        {categories.map((category, index) => (
          <Link key={index} to={`/category/${category.name.toLowerCase()}`} className="explore-card">
            <img src={category.image} alt={category.name} className="explore-image" />
            <div className="explore-overlay">
              <h2 className="explore-text">{category.name}</h2>
            </div>
          </Link>
        ))}
      </div>

      {/* Motivational Section */}
      <div className="explore-quote">
        <h3>“A reader lives a thousand lives before he dies.”</h3>
        <p>Dive into our blog categories and keep exploring new perspectives.</p>
      </div>

      {/* Footer Section */}
      <footer className="landing-footer">
        <div className="footer-content">
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">&copy; {new Date().getFullYear()} Our Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
