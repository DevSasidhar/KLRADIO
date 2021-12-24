import { Carousel } from 'react-carousel-minimal';
import "./Carousel.css";
function App() {
 const data = [
    {
      image: "https://images.pexels.com/photos/5461239/pexels-photo-5461239.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      caption: "San Francisco"
    },
    {
      image: "https://images.pexels.com/photos/6194155/pexels-photo-6194155.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      caption: "Scotland"
    },
    {
      image: "https://images.pexels.com/photos/10295516/pexels-photo-10295516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      caption: "Darjeeling"
    },
    {
      image: "https://images.pexels.com/photos/10295509/pexels-photo-10295509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      caption: "San Francisco"
    },
    {
      image: "https://images.pexels.com/photos/5158210/pexels-photo-5158210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      caption: "Scotland"
    },
    {
      image: "https://images.pexels.com/photos/4403408/pexels-photo-4403408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      caption: "Darjeeling"
    },
    {
      image: "https://images.pexels.com/photos/6953672/pexels-photo-6953672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      caption: "San Francisco"
    },
    
    {
      image: "https://images.pexels.com/photos/10448179/pexels-photo-10448179.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      caption: "Darjeeling"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="1500px"
            height="400px"
            captionStyle={captionStyle}
            radius="10px"
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            
            style={{
              textAlign: "center",
              maxWidth: "1700px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
