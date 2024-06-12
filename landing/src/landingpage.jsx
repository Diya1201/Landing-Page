import React,{useState} from 'react';
import './Styles.css';
import CandlestickChart from './Candlestickchart';
import ValuationMeasures from './ValuationMeasures';
import AnalysisEstimates from './AnalysisEstimates';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Collapsible from 'react-collapsible';
import NewsArticles from './Newsarticle';
import { IoNotifications } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


function StockLandingPage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <div className="navbar">
                <div className="row first-row">
                    <div className="name"> Stock Hub </div>
                    <div className="searchbar">
                        <input type="text" placeholder="search.." />
                        <div className="icon-div">
                            <FaSearch className="icon-search"/>
                        </div>
                    </div>
                    <div className="menu-items">
                        <a href=" "> Home </a>
                        <a href=" "> About Us </a>
                        <a href=" "> News </a>
                        <a href=" "> Contact Us</a>
                    </div>
                    <div className="buttons">
                        <button> <IoNotifications className="i" /></button>
                        <button> <FaRegEnvelope className="i"/> </button>
                        <button> <FaUser className="i"/> SignIn </button>
                    </div>
                </div>
                <div className="row second-row">
                    <div className="menu">
                        <a href=" "> My Profile </a>
                        <a href=" "> Stocks </a>
                        <a href=" "> My Stocks </a>
                        <a href=" "> Personal Finance</a>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="vertical-menu">
                    <a href="#section1"> Stock </a>
                    <a href="#section4"> Chart </a>
                    <a href="#section2"> Ratios </a>
                    <a href="#section5"> Analyst Estimates </a>
                    <a href="#section3"> About Info </a>
                    <a href="#section6"> News </a>
                </div>
                <div className="main-content">
                    <div className="header">
                        <h1> Apple Inc. (APPL) </h1>
                    </div>
                    <div className="values">
                        <div className="col1">
                            <h2> 196.89 <p className="pos-val">+2.41(1.24%)</p></h2>
                            <p className="update"> At close: June 7 at 4:00 PM EDT </p>
                        </div>
                        <div className="col2">
                            <h2> 196.88 <p className="neg-val">-0.01(0.01%)</p></h2>
                            <p className="update"> After hours: June 7 at 7:59 PM EDT </p>
                        </div>
                    </div>
                    <div className="chart-container" id="section1">
                        <CandlestickChart id="section4"/> 
                    </div>
                    <h1> Statistics: AAPL </h1>
                    <div className="statistics" id="section2">
                         <ValuationMeasures />
                         <AnalysisEstimates id="section5"/>
                    </div>
                    <div className="company-info" id="section3">
                        <Collapsible trigger={
                            <div className="trigger-container" onClick={toggleOpen}>
                                {isOpen ? <FaChevronUp className="icon" /> : <FaChevronDown className="icon" />}
                                <span className="company-name">Apple Inc. Overview</span>
                            </div>
                        }>
                            <div className="content-container">
                                <div className="info-col-1">
                                <p>
                                Apple Inc. designs, manufactures, and markets smartphones, personal computers, 
                                tablets, wearables, and accessories worldwide. The company offers iPhone, a line
                                of smartphones; Mac, a line of personal computers; iPad, a line of multi-purpose 
                                tablets; and wearables, home, and accessories comprising AirPods, Apple TV, 
                                Apple Watch,...
                                </p>
                                <p><a href="https://www.apple.com" target="_blank" rel="noopener noreferrer"> wwww.apple.com </a> </p>
                                </div>
                                <div className="info-col-2">
                                    <div class="text-item">
                                        <p className="main-text"> 150,000 </p>
                                        <p class="additional-text">Full Time Employees </p>
                                    </div>
                                    <div class="text-item">
                                        <p className="main-text"> September 30 </p>
                                        <p class="additional-text">Fiscal Year Ends </p>
                                    </div>    
                                    <div className="text-item">
                                        <p className="main-text"> Technology </p>
                                        <p class="additional-text">Sector </p>
                                    </div>
                                    <div className="text-item">
                                        <p className="main-text"> Consumer Electronics</p>
                                        <p class="additional-text"> Industry </p>
                                    </div>
                                </div>
                            </div>
                        </Collapsible>
                    </div>
                    <NewsArticles id="section6"/>
                </div>
            </div>
        </div>
    );
}

export default StockLandingPage;
