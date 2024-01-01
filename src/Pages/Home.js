import React from "react";
import Layout from "./../Components/Layout";
import Banner from "../Images/Backlog.avif";
import "../styles/HomeStyles.css";
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Tab,
  Tabs,
  Button,
} from "@mui/material";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../styles/slick.css";



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Home = () => {
 

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,

  };
  const slider = React.useRef(null);

  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1 > Experience the Falvors <p>of Tava Kitchen's</p></h1>
          <h3>Delicious Food,unforgettable moments</h3>
          <button>Order Now</button>
        </div>
      </div>

      <br></br>

      <Slider ref={slider} {...settings} style={{ marginLeft: "30px", margin: "30px" }}>

        <div className="slide">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/34a30e77063259.5c7cf3a10dcb1.jpg" alt="Image 1" height={300} width={500} />
        </div>
        <div className="slide">
          <img src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2014/12/FINAL-Bread.jpg?resize=600%2C400&ssl=1" alt="Image 2" height={300} width={500} />
        </div>
        <div className="slide">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/db1fca66207249.5b0e56c8b91f3.jpg" alt="Image 3" height={300} width={490} />
        </div>
        <div className="slide">
          <img src="https://www.fohlio.com/hubfs/ZONA-lighting.jpg" alt="Image 4" height={300} width={470} />
        </div>

      </Slider>

      <br />
      <div class="container" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div class="text">
          <h2 style={{ fontSize: "20px", paddingLeft: "60px" }}>At Tava's Kitchen, we believe in the power of good food,
            great company, and unforgettable experiences.Our café was founded by four passionate friends who share a love
            for culinary delights and a desire to create a warm and
            welcoming space for our community.</h2>
        </div>
        <div style={{ margin: '100px' }}>
          <img src="https://t4.ftcdn.net/jpg/05/90/00/73/240_F_590007302_sxiyopxVM8rAuqGF9yv7VCYc4lWHAZRZ.jpg" style={{ display: "block", marginLeft: "30px", width: '400px', }} />
        </div>
      </div>

      <br />

      <Box sx={{ width: '100%' }}>
        <div className="headerContainer1" >
          <h1>Explore Tava Special Menu</h1>
        </div>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <div className="BoxContainer">
            <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor="secondary" aria-label="secondary tabs example">
              <Tab label=" Tava Special" {...a11yProps(0)} />
              <Tab label="Starters" {...a11yProps(1)} />
              <Tab label="Beverages" {...a11yProps(2)} />
              <Tab label="Alcoholic Beverages" {...a11yProps(3)} />
            </Tabs>
          </div>
        </Box>

        <TabPanel value={value} index={0}style={{ paddingLeft:"220px"}}>
          Tava's Special
          <br />
          <Card sx={{ display: 'flex', maxWidth: 345 }}>
            <Box sx={{ display: '100', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  Masala Parota
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Made of special spicies
                </Typography>
                <Button variant="outlined">Add to Cart</Button>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="https://t3.ftcdn.net/jpg/03/45/31/02/240_F_345310271_0QnRM3Hj1kDPo6wv1n8dbx6KmDpj32Mu.jpg"
              alt="Live from space album cover"
            />
          </Card>
          <br />
          <Card sx={{ display: 'flex', maxWidth: 345 }}>
            <Box sx={{ display: '100', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  Panner Tandori
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Barbecue Grill
                </Typography>
                <Button variant="outlined">Add to Cart</Button>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="https://t4.ftcdn.net/jpg/02/69/81/97/240_F_269819762_9fbJjPcPAo9JD2xNx7QofHyg2pqx4Qz3.jpg"
              alt="Live from space album cover"
            />
          </Card>

        </TabPanel>

        <TabPanel value={value} index={1}style={{ paddingLeft:"220px"}}>
          Starters
          <br />
          <Card sx={{ display: 'flex', maxWidth: 345 }}>
            <Box sx={{ display: '100', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  Crispy Aloo Samosa
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">

                </Typography>
                <Button variant="outlined">Add to Cart</Button>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="https://t3.ftcdn.net/jpg/01/15/65/66/240_F_115656667_8qxTZTjUnUro0VVZGDnPUl5H3cScmkrk.jpg"
            />
          </Card>
          <br />
          <Card sx={{ display: 'flex', maxWidth: 345 }}>
            <Box sx={{ display: '100', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  Avacado Smash Toast
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">

                </Typography>
                <Button variant="outlined">Add to Cart</Button>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="https://t4.ftcdn.net/jpg/01/43/06/01/240_F_143060162_XtqJ9vN2gRE82bkNKLK5b1JAmqYHCqTZ.jpg"
            />
          </Card>
          <br />
          <Card sx={{ display: 'flex', maxWidth: 345 }}>
            <Box sx={{ display: '100', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  Peri Peri French Fry
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">

                </Typography>
                <Button variant="outlined">Add to Cart</Button>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151, maxHeight: 200 }}
              image="https://t3.ftcdn.net/jpg/01/70/27/56/240_F_170275666_53KCP4IuiCQEZazFAdexaRmsl7BEMQwI.jpg"
            />
          </Card>

        </TabPanel>
        <TabPanel value={value} index={2} style={{ paddingLeft:"220px"}}>
          Bevarages
          <Card sx={{ display: 'flex', maxWidth: 345 }}>
            <Box sx={{ display: '100', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  Latte Coffee
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">

                </Typography>
                <Button variant="outlined">Add to Cart</Button>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 180, maxHeight: 200 }}
              image="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg"
            />
          </Card>
          <br />
          <Card sx={{ display: 'flex', maxWidth: 345 }}>
            <Box sx={{ display: '100', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  Hot Chocolate
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">

                </Typography>
                <Button variant="outlined">Add to Cart</Button>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 180, maxHeight: 200 }}
              image="https://www.foodandwine.com/thmb/V1OEgtLQGUv_w2Fvm40WMLsJ4rk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Indulgent-Hot-Chocolate-FT-RECIPE0223-fd36942ef266417ab40440374fc76a15.jpg"
            />
          </Card>
          <br />
          <Card sx={{ display: 'flex', maxWidth: 345 }}>
            <Box sx={{ display: '100', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  Black Coffee
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">

                </Typography>
                <Button variant="outlined">Add to Cart</Button>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 180, maxHeight: 200 }}
              image="https://t3.ftcdn.net/jpg/05/95/36/84/240_F_595368476_InFvNNwmas0xQK1rr66R249tIgvKbkyh.jpg"
            />
          </Card>
          <br />
          <Card sx={{ display: 'flex', maxWidth: 345 }}>
            <Box sx={{ display: '100', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  Desi Masala Chai
                </Typography>
                <Button variant="outlined">Add to Cart</Button>
                <Typography variant="subtitle1" color="text.secondary" component="div">

                </Typography>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 180, maxHeight: 200 }}
              image="https://t4.ftcdn.net/jpg/05/88/72/39/360_F_588723964_cGMwZ2jWBkRmsBXbE6SVVq703D80xYJU.jpg"
            />
          </Card>
          <br />
          <Card sx={{ display: 'flex', maxWidth: 345 }}>
            <Box sx={{ display: '100', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  Milkshake
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Chocolate, Vanilla and Strawberry
                </Typography>
                <Button variant="outlined">Add to Cart</Button>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 180, maxHeight: 200 }}
              image="https://t3.ftcdn.net/jpg/02/30/03/40/240_F_230034057_Sqlbff6O4AssaILToSbTzUrTpQEycOHu.jpg"
            />
          </Card>

        </TabPanel>
        <TabPanel value={value} index={3} style={{ paddingLeft:"220px"}}>
          Alcoholic Bevarages
          <br />
          <Card sx={{ display: 'flex', maxWidth: 345 }}>
            <Box sx={{ display: '100', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  Pink Gin
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  With frozen berries
                </Typography>
                <Button variant="outlined">Add to Cart</Button>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 180, maxHeight: 200 }}
              image="https://t3.ftcdn.net/jpg/05/99/33/48/240_F_599334804_5cErR7vnHuBqoCjNwUfiYQbyxpAXilWT.jpg"
            />
          </Card>
          <br />
          <Card sx={{ display: 'flex', maxWidth: 345 }}>
            <Box sx={{ display: '100', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  Mint Julep Cocktail
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Vodka Shot
                </Typography>
                <Button variant="outlined">Add to Cart</Button>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 180, maxHeight: 200 }}
              image="https://t4.ftcdn.net/jpg/01/12/31/21/240_F_112312119_q0387c4KAeuLIyjjF3QQWpTt2OIULNL2.jpg"
            />
          </Card>
          <br />
          <Card sx={{ display: 'flex', maxWidth: 345 }}>
            <Box sx={{ display: '100', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                  Pink Polamo
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  Tequila Shot
                </Typography>
                <Button variant="outlined">Add to Cart</Button>
              </CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 180, maxHeight: 200 }}
              image="https://t3.ftcdn.net/jpg/05/61/01/06/240_F_561010663_E8MSpzwU0Hv0otz7PnUqocbFSlxfXR4f.jpg"
            />
          </Card>
        </TabPanel>
      </Box>
      <br/>
     
    </Layout>

  );
};

export default Home;