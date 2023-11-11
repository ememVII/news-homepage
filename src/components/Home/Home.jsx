import React from 'react'
import { homeBgDesktop } from '../../Utilities/images'
import { img01 } from '../../Utilities/images'
import { img02 } from '../../Utilities/images'
import { img03 } from '../../Utilities/images'
import './Home.css'

export default function Home() {
  return (
    <header>
    {/* First */}
    <div className="row pt-3">
        <div className="col-md-8">
            <div className="image">
                <img src={homeBgDesktop} alt="home background" className='w-100' />
            </div>
            <div className="row pt-3 center px-2">
                <div className="heading col-md-4">
                    <h1 className='mainHeading '>The Bright Future of Web 3.0?</h1>
                </div>
                <div className="headingInfo col-md-6">
                    <p className='pb-4'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                    <button className='button'>Read More</button>
                </div>
            </div>
        </div>
        <div className="new-bar col-md-3 col-sm-12 p-4">
            <h2 className='mb-4'>New</h2>
            <div className="sub-bar mb-3">
                <p><a href="#">Hydrogen VS Electric Cars</a></p>
                <span>Will hydrogen-fueled cars ever catch up to EVs?</span>
            </div>
            <hr />
            <div className="sub-bar mb-3">
                <p><a href="#">The Downsides of AI Artistry</a></p>
                <span>What are the possible adverse effects of on-demand AI image generation?</span>
            </div>
            <hr />
            <div className="sub-bar mb-3">
                <p><a href="#">Is VC Funding Drying Up?</a></p>
                <span>Private funding by VC firms is down 50% YOY. We take a look at what that means.</span>
            </div>
        </div>
    </div>
    {/* Second */}
    <div className="row pt-5 center pe-4">
        <div className="col-md-4">
            <div className="content align-center">
                <div className="image me-4">
                    <img src={img02} alt="Retro Pcs" width={90} height={130} />
                </div>
                <div className="description">
                    <span>01</span>
                    <h6 className='mt-2'><a href="#">Reviving Retro PCs</a></h6>
                    <p>What happens when old PCs are given modern upgrades?</p>
                </div>
            </div>
        </div>
        
        <div className="col-md-4">
            <div className="content align-center">
                <div className="image me-4">
                    <img src={img03} alt="Labtop" width={90} height={130} />
                </div>
                <div className="description">
                    <span>02</span>
                    <h6 className='mt-2'><a href="#">Top 10 Laptops of 2022</a></h6>
                    <p>Our best picks for various needs and budgets.</p>
                </div>
            </div>
        </div>
        
        <div className="col-md-4">
            <div className="content align-center">
                <div className="image me-4">
                    <img src={img01} alt="ps5 joystick" width={90} height={130} />
                </div>
                <div className="description">
                    <span>03</span>
                    <h6 className='mt-2'><a href="#">The Growth of Gaming</a></h6>
                    <p>How the pandemic has sparked fresh opportunities.</p>
                </div>
            </div>
        </div>
    </div>
    
    
    <div class="attribution text-center">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://github.com/ememVII" target={'_blank'}>Mahmoud Magdy</a>.
  </div>
    </header>
  )
}
