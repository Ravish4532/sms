import React from "react";
import cabin from "./assets/img/portfolio/cabin.png"
import cake from "./assets/img/portfolio/cake.png"
import circus from "./assets/img/portfolio/circus.png"
import game from "./assets/img/portfolio/game.png"
import safe from "./assets/img/portfolio/safe.png"
import submarine from "./assets/img/portfolio/submarine.png"
import {AiOutlinePlus} from 'react-icons/ai'
import {BsFillStarFill} from 'react-icons/bs'
const Portfolio = () => {
return (
    <section class="page-section portfolio" id="portfolio">
    <div class="container">
        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
        <div class="divider-custom">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><i class="BsFillStarFill"><BsFillStarFill /></i></div>
            <div class="divider-custom-line"></div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-6 col-lg-4 mb-5">
                <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div class="portfolio-item-caption-content text-center text-white"><i class="AiOutlinePlus"><AiOutlinePlus /></i></div>
                    </div>
                    <img class="img-fluid" src={cabin} alt="..." />
                </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-5">
                <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div class="portfolio-item-caption-content text-center text-white"><i class="AiOutlinePlus"><AiOutlinePlus /></i></div>
                    </div>
                    <img class="img-fluid" src={cake} alt="..." />
                </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-5">
                <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div class="portfolio-item-caption-content text-center text-white"><i class="AiOutlinePlus"><AiOutlinePlus /></i></div>
                    </div>
                    <img class="img-fluid" src={circus} alt="..." />
                </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
                <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div class="portfolio-item-caption-content text-center text-white"><i class="AiOutlinePlus"><AiOutlinePlus /></i></div>
                    </div>
                    <img class="img-fluid" src={game} alt="..." />
                </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-5 mb-md-0">
                <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div class="portfolio-item-caption-content text-center text-white"><i class="AiOutlinePlus"><AiOutlinePlus /></i></div>
                    </div>
                    <img class="img-fluid" src={safe} alt="..." />
                </div>
            </div>
            
            <div class="col-md-6 col-lg-4">
                <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div class="portfolio-item-caption-content text-center text-white"><i class="AiOutlinePlus"><AiOutlinePlus /></i></div>
                    </div>
                    <img class="img-fluid" src={submarine} alt="..." />
                </div>
            </div>
        </div>
    </div>
</section>

)
}
export default Portfolio;

