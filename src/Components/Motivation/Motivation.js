import "./Motivation.css";
import ImageSlider from "./Slider/ImageSlider";
import { SliderData } from "./Slider/SliderData";

function Motivation() {
  return <ImageSlider slides={SliderData} />;
}

export default Motivation;
