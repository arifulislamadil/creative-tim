import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import { FaBell, FaGlobe, FaSearch, FaUser } from 'react-icons/fa';
import SettingsIcon from '@mui/icons-material/Settings';
import "./DashBoard.css";
import imgWave from "../Assets/rocket-white.webp";
import rocketWork from "../Assets/rocket-work.jpg";
import Overview from './Overview/Overview';
import BarChart from './BarChart/BarChart';
import Project from './Project/Project';
import OrderOverview from './OrderOverview/OrderOverview';

const DashBoard = () => {
    return (
        <div>
            <div className='top-style'>
                <div style={{ width: "550px", marginLeft: "20px" }}>
                    <h5>Page/DashBoard</h5>
                    <h3>DashBoard</h3>
                </div>
                <div className='input-search'>
                    <a href="https://example.com"><span > <FaSearch style={{ marginTop: "12px", textAlign: "center", color: "gray", marginLeft: "10px" }}></FaSearch></span></a>
                    <input placeholder='search' />
                </div>
                <div className='btn-top' style={{ padding: "5px", border: "2px solid gray", marginLeft: "30px", marginRight: "30px", borderRadius: "5px" }}>
                    <Button style={{ color: "black" }}>Online Builder</Button>
                </div>
                <div style={{ padding: "10px", display: "flex", width: "80px", marginRight: "20px" }}>
                    <a className='fa-user' href="https://example.com"><FaUser></FaUser> </a>
                    <span><h3 style={{ marginLeft: "2px", marginTop: "-3px" }}>sign in</h3></span>
                </div>
                <div style={{ width: "40px", padding: "10px" }}>
                    <SettingsIcon></SettingsIcon>
                </div>
                <div style={{ padding: "10px", marginRight: "20px" }}>
                    <FaBell></FaBell>
                </div>
            </div>
            {/* end of header part */}

            <div style={{ marginTop: "50px", marginLeft: "20px" }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {Array.from(Array(4)).map((_, index) => (
                            <Grid item xs={2} sm={4} md={3} key={index}>
                                <div style={{ display: "flex", backgroundColor: "whitesmoke", justifyContent: "space-between", padding: "20px", borderRadius: "10px" }}>
                                    <div>
                                        <h5>Today's Money</h5>
                                        <div style={{ display: "flex", marginTop: "10px" }}>
                                            <h3 style={{ marginTop: "20px" }} >$53,000
                                            </h3>
                                            <h5 style={{ marginTop: "25px" }}>+55%</h5>
                                        </div>
                                    </div>
                                    <div style={{ padding: "10px", backgroundImage: "linear-gradient(310deg,#7928ca,#ff0080)", borderRadius: "10px", color: "white", fontSize: "50px" }} >
                                        <FaGlobe></FaGlobe>
                                    </div>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </div>
            {/* end of counter part */}
            <div style={{ marginLeft: "20px", marginTop: "20px" }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={4}>
                        <Grid item xs={6} md={7}>
                            <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "whitesmoke", padding: "20px", borderRadius: "20px" }}>
                                <div>
                                    <h4>
                                        Built by developers
                                    </h4>
                                    <h2>Soft UI Dashboard</h2>
                                    <p>From colors, cards, typography to <br /> complex elements, you will find the full<br /> documentation</p>
                                    <h3 style={{ marginTop: "70px" }}>Read More
                                    </h3>
                                </div>

                                <div style={{ backgroundImage: "linear-gradient(310deg,#7928ca,#ff0080)", padding: "20px", borderRadius: "10px" }}>
                                    <img src={imgWave} alt="Simply Easy Learning" width="100%"
                                        height="210px" />
                                </div>
                            </div>

                        </Grid>
                        <Grid item xs={6} md={5}>
                            <div className='work-rockets'>
                                <img src={rocketWork} alt="Simply Easy Learning" width="100%"
                                    height='250px' />
                            </div>
                            <div className='work-rockets-text' style={{ padding: "40px", }}>
                                <h2 style={{ marginTop: "20px" }}>Work with the rockets</h2>
                                <h4 style={{ marginTop: "20px" }}>Wealth creation is an evolutionarily recent positive-sum <br /> game. It is all about who take the opportunity first.</h4>
                                <h3 style={{ marginTop: "70px" }}>Read More

                                </h3>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            {/* end of DashBoard */}

            <div className='user-overview' style={{ marginTop: "30px", marginLeft: "20px" }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid style={{ padding: "20px" }} container spacing={2} columns={16}>
                        <Grid item xs={6} md={6} style={{ backgroundColor: "whitesmoke", borderRadius: "20px" }}>
                            <BarChart></BarChart>
                        </Grid>
                        <Grid item xs={9} md={9.8} style={{ backgroundColor: "whitesmoke", borderRadius: "20px", marginLeft: "10px" }}>
                            <h4>Sales overview</h4>
                            <Overview></Overview>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            {/* End of overview */}

            <div style={{ marginTop: "20px", marginLeft: "20px",}}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} columns={16}>
                        <Grid item xs={11}>
                            <Project></Project>
                        </Grid>
                        <Grid item xs={5}>
                            <OrderOverview></OrderOverview>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            {/* End of project and overview part */}
            
            <div style={{margin:"20px"}}>
               <span> © 2022, made with  by Creative Tim for a better web.</span>
            </div>
        </div>
    );
};

export default DashBoard;