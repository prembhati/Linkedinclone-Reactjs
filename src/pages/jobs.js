import React from "react";

class Jobs extends React.Component {
    render() {
        return (
            <div>
               <header id="header" class="header_box_shadow"/>
        <nav class="navbar"/>
            <div class="left">
                <div class="logo">
                    <i class="fa-brands fa-linkedin"></i>
                </div>

                <div class="search_bar">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input class="search_bar_input" type="text" placeholder="Search for job"/>
                </div>
            </div>
            <div class="icons_bar_profils">
                <ul class="icons_links_profil ">
                    <li class="icon_link not_home_icon"><a href="p1.html"><i class="fa-solid fa-house"></i>
                            <p>Home</p>
                        </a></li>
                    <li class="icon_link"><a href="Mynetwork.html"><i
                                class="fa-solid fa-user-group"></i><span>
                                <p>My Network</p>
                            </span></a></li>
                    <li class="icon_link after_element"><a href="jobs.html"><i class="fa-solid fa-briefcase"></i><span>
                                <p>Jobs</p>
                            </span></a></li>
                    <li class="icon_link"><a href="#"><i class="fa-solid fa-comment-dots"></i><span>
                                <p>Message</p>
                            </span></a></li>
                    <li class="icon_link icon_new_notification "><a href="#"><i
                                class="fa-solid fa-bell"></i><span>
                                <p>Notifications</p>
                            </span></a></li>
                    <li class="icon_link me" id="profil_button">
                        <a href="#" id="link_ckeck_pro"><img id="my_profil" src="ip.jpg"
                                alt=""/><span>
                                <p>Me<i class="fa-solid fa-caret-down"></i></p>
                            </span></a>
                            <div class="profil_link" id="menu_profil"/>
                                <div class="profil_name_job">
                                    <img class="post_photo_profil" src="ip.jpg" alt="#"/>
                                    <div class="name_and_job"> 
                                        <h2>Prem Bhati</h2>
                                        <p> FRONTEND DEVELOPER</p>
                                    </div>
                              
                            </div>
                    </li>
                </ul>

                <ul class="FB"/>
                    <li class="grid_products"/> <i class="fa-solid fa-braille"></i><a href="#">
                            <span>
                                <p>For Business<i class="fa-solid fa-angle-down"></i></p>
                            </span></a>
                    <div class="an">
                        <a href="#">Try Premium for free</a>
                    </div>
                   
            </div>
      
    
{/* <!-- ------------left box--------------- --> */}
    <main class="job_page">
        <section class="left_job_container">
            <div class="left_job_div">
                <p><i class="fa-solid fa-bookmark"></i><a href="#">My jobs</a></p>
                <p><i class="fa-solid fa-bell"></i><a href="#">Job alerts</a></p>
                <p><i class="fa-solid fa-money-bill"></i><a href="#">Skill Assessments</a></p>
                <p><i class="fa-solid fa-clipboard"></i><a href="#">Resume Builder</a></p>
                <p><i class="fa-brands fa-youtube"></i><a href="#">Job seeker guidance</a></p>
                <p><i class="fa-solid fa-gear"></i><a href="#">Application settings</a></p>
            </div>
            <div class="add_job"> <i class="fa-solid fa-file-pen"></i><a href="#">Post a free job</a>
            </div>
        </section>

{/* <!-- ------------center box--------------- --> */}
        <section class="center_job_container">
            <div class="left_job_div responsive_box_job">
                <p><i class="fa-solid fa-bookmark"></i><a href="#">Mes offres d"emplois</a></p>
            </div>

            <div class="preview_job_search">
                <h2>Recent job search<span>View more</span></h2>
                <p>Web developer intership<span>(210 new jobs)</span> <br/> <span class="country_name">canada</span> </p>
                <p>Android Development<span >(2 new jobs)</span> <br/><span class="country_name">canada</span> </p>
                <p>Front-end intership <span>(13 new jobs)</span><br/><span class="country_name">canada</span> </p>
            </div>
            <div class="see_more_job"> <p>See More<i class="fa-solid fa-angle-down"></i></p> </div>

            <div class="job_oportunity first_oportunity">
                <h2>Inter-state opportunités</h2>
                <p>Because you have expressed your interest in Local Jobs</p>
                <div class="company_job">
                    <img class="company_job_photo" src="w1.jpg" alt="#"/>
                    <div class="job_description">
                        <h6><a href="#">crypto coding intern</a> </h6>
                        <p><a href="#">Sovereign Prime </a> <br/>
                        Ottawa, ON (50km distance)</p>
                        <div class="photo_pro_text">
                            <img class="ph_pro_job" src="w2.png" alt="#"/>
                            <p>Your profile matches this offer</p>
                        </div>
                        <span>6 hours ago</span>
                    </div>
                    <i class="fa-solid fa-eye-slash"></i>
                    <i class="fa-solid fa-bookmark"></i>
                </div>
            </div>

            <div class="job_oportunity">
                <div class="company_job">
                    <img class="company_job_photo" src="w3.jpg" alt="#"/>
                    <div class="job_description">
                        <h6><a href="#">Product Design Intern (UX/UI) - Summer <br/> 2022 (May) </a> </h6>
                        <p><a href="#">Pilot </a> <br/>
                        Vancouver, BC (20km distance)</p>
                        <div class="photo_pro_text">
                            <p> Your profile matches this offer</p>
                        </div>
                        <span>8 hours ago</span>
                    </div>
                    <i class="fa-solid fa-eye-slash"></i>
                    <i class="fa-solid fa-bookmark"></i>
                </div>
            </div>

            <div class="job_oportunity">
                <div class="company_job">
                    <img class="company_job_photo" src="w4.jpg" alt="#"/>
                    <div class="job_description">
                        <h6><a href="#">Virtual HR Internship or CO-OP</a> </h6>
                        <p><a href="#">GAOTek Inc.</a> <br/>  Pickering, ON (À distance)</p>
                        <div class="photo_pro_text">
                            <i class="fa-solid fa-bullseye"></i>
                            <p>Your profile matches this offer</p>
                        </div>
                        <span>10 hours</span>
                    </div>
                    <i class="fa-solid fa-eye-slash"></i>
                    <i class="fa-solid fa-bookmark"></i>
                </div>
            </div>

            <div class="job_oportunity">
                <div class="company_job">
                    <img class="company_job_photo" src="w5.png" alt="#"/>
                    <div class="job_description">
                        <h6><a href="#">crypto coding intern</a> </h6>
                        <p><a href="#">Sovereign Prime </a> <br/>
                        Ottawa, ON (10kmdistance)</p>
                        <div class="photo_pro_text">
                            <p>Your profile matches this offer</p>
                        </div>
                        <span>12 hours ago</span>
                    </div>
                    <i class="fa-solid fa-eye-slash"></i>
                    <i class="fa-solid fa-bookmark"></i>
                </div>
            </div>
            <div class="see_more_job"> <p>See More </p> </div>
        </section>



    </main>

 {/*   <!--message abox--> */}
    <article class="messages_float_box " id="sms_float_container">
        <div class="sms_float_header">
            <div class="photo_and_title">
                <div class="sms_float_photo">
                    <img src="ip.jpg" alt="#"/>
                </div>
                <h4>Messages</h4>
            </div>
            <div class="float_icons_box">
                <i class="fa-solid fa-ellipsis"></i>
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-arrow-up-right-from-square"></i> 
                <span id="btn_toggle_message_box">

                    <i class="fa-solid fa-angle-up"></i>
                    <i class="fa-solid fa-angle-down"></i>
                </span>
            </div>
        </div>

        <div class="sms_container">
            <div class="message_input_container">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input class="message_input" id="search_message" type="text" placeholder="Search Messages"
                    onkeyup="dynamicSearch()"/>
                <i class="fa-solid fa-sliders"></i>
            </div>
            <div class="meassage_profil_container">
                <div class="message_profils_sider">
                    <a href="messagerie.html">
                        <div class="message_profil_item message_one others_message">
                            <div class="message_profil_photo">
                                <img src="o1.jpg" alt=""/>
                            </div>
                            <div class="message_profil_name_and_text">
                                <p><span class="name_pro">Himanshu Sharma</span>&nbsp; &nbsp; &nbsp; <span
                                        class="message_profil_date">20 min</span>
                                    <i class="fa-solid fa-envelope"></i>
                                    <i class="fa-solid fa-comment-slash"></i>
                                </p>
                                <p>I have a job offer  <br/> regards</p>
                            </div>
                        </div>
                    </a>

                    <div class="message_profil_item others_message">
                        <div class="message_profil_photo">
                            <img src="o2.jpg" alt=""/>
                        </div>
                        <div class="message_profil_name_and_text">
                            <p><span class="name_pro">Aditya Yadav</span> &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; <span
                                    class="message_profil_date">19 hr</span> <i class="fa-solid fa-envelope"></i>
                                <i class="fa-solid fa-comment-slash"></i>
                            </p>
                            <p>Hii prem Bhati<br/> You are my mentor</p>
                        </div>
                    </div>
                    <div class="message_profil_item others_message">
                        <div class="message_profil_photo">
                            <img src="o3.jpg" alt=""/>
                        </div>
                        <div class="message_profil_name_and_text">
                            <p><span class="name_pro">Riya Bhati</span> &nbsp; <span class="message_profil_date">20 hr</span><i class="fa-solid fa-envelope"></i>
                                <i class="fa-solid fa-comment-slash"></i>
                            </p>
                            <p>Riya Bhati:I will let you know</p>
                        </div>
                    </div>
                    <div class="message_profil_item others_message">
                        <div class="message_profil_photo">
                            <img src="o6.png" alt=""/>
                        </div>
                        <div class="message_profil_name_and_text">
                            <p> <span class="name_pro">Siddharth Bhati</span> &nbsp; &nbsp; <span
                                    class="message_profil_date">35 hr</span><i class="fa-solid fa-envelope"></i>
                                <i class="fa-solid fa-comment-slash"></i>
                            </p>
                            <p>Jobs fair at Delhi <br/> Grab a job according to your credials</p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>


    </article>
            </div>
        );
    }
}
export default Jobs;