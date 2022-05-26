import "./Blog.css";
import ImageSlider from "./Slider/ImageSlider";
import { SliderData } from "./Slider/SliderData";

function Blog() {
  return <ImageSlider slides={SliderData} />;
}

export default Blog;
