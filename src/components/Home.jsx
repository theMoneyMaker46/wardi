import Carousel from "./Carousel";
import Category from "./Category";
import SignUp from  "./SignUp";

const imgData = [
    { id: 1, src: '../images/landing_page/1.png', alt: 'Image 1' },
    { id: 2, src: '/images/landing_page/2.png', alt: 'Image 2' },
    { id: 3, src: '/images/landing_page/3.png', alt: 'Image 3' },
    { id: 4, src: '/images/landing_page/4.png', alt: 'Image 4' }
  ];

function Home() {
    return (
        <div>
            <Carousel images={imgData} />
            <Category />
            <SignUp />
        </div>
    );
}

export default Home;