import React from "react";
import ImageSlider from "../../components/imageSlider";
import { SliderData } from "../../components/dashboardSlider";


function Dashboard(){
    return (
        <section className="dashboard_image_slider">
            <ImageSlider slides={SliderData}/>
        </section>
    )
}
export default Dashboard;