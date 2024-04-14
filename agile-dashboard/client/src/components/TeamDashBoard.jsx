import React from "react";
import Navbar from "./NavBar/navbar";
import Footer from "./footer.tsx";
import BugTypeBarGraph from "./BugTypeBarGraph/BugTypeBarGraph.jsx";
import example_jira_data from "../test-data-pseudo/example_jira_data.json"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faChartSimple , faPercent, faChartPie } from "@fortawesome/free-solid-svg-icons";

const TeamDashboard = (props) => {
    
    return (
        <section className="bg-neutral-800 text-white flex flex-col h-screen"> 
            <Navbar></Navbar>
            <div className="flex flex-1 overflow-auto w-full bg-neutral-600 justify-start align-bottom">
            <div className="bg-slate-800 flex w-50 border-r flex-col p-5">
                <div className=""><button className="p-5 hover:bg-neutral-500 rounded-md hover:text-blue-400">Flow Metrics<FontAwesomeIcon icon={faChartPie} className="pl-3" /></button></div>
                <div className="p-5">Sprint Metrics<FontAwesomeIcon icon={faChartSimple} className="pl-3" /></div>
                <div className="p-5">Coverage Metrics<FontAwesomeIcon icon={faPercent} className="pl-3"/></div>
            </div>
                <BugTypeBarGraph data={example_jira_data}></BugTypeBarGraph>
                <div>
                    <div className="bg-green-400 m-10 ">1</div>
                    <div className=" bg-red-800 m-10">2</div>
                    <div className=" bg-orange-500 m-10">3</div>
                </div>

                <div>
                    <div className="bg-green-400 m-10">1</div>
                    <div className=" bg-red-800 m-10">2</div>
                    <div className=" bg-orange-500 m-10">3</div>
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
}

export default TeamDashboard;
