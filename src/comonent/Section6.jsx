import React, { useState} from "react";
import s6 from '../image/s6.png'
import bg1 from '../image/s55.png'
import bg2 from '../image/s555.png'
import { AiOutlineFrown,AiOutlineDoubleLeft,AiOutlineDoubleRight ,AiOutlineLike} from "react-icons/ai";


const cards = [
    {
      rating: '4.5',
      image: s6,
      title: 'Basket Ball',
      description: 'I show you how to make a card group easily and very functional with the use of flexbox and its magic and JavaScript.',
    },
    {
      rating: '4.4',
      image: bg1,
      title: 'Volley Ball',
      description: 'I show you how to make a card group easily and very functional with the use of flexbox and its magic and JavaScript.',
    },
    {
      rating: '4.7',
      image: bg2,
      title: 'Disco Ball',
      description: 'I show you how to make a card group easily and very functional with the use of flexbox and its magic and JavaScript.',
    },
    {
        rating: '4.7',
        image: bg2,
        title: 'Disco Ball',
        description: 'I show you how to make a card group easily and very functional with the use of flexbox and its magic and JavaScript.',
      },
      {
        rating: '4.7',
        image: bg2,
        title: 'Disco Ball',
        description: 'I show you how to make a card group easily and very functional with the use of flexbox and its magic and JavaScript.',
      },
  ];

    const Section6 = () => {
        
          const [scrollPos, setScrollPos] = useState(0);
        
          function handleScrollNext() {
            console.log(window.innerWidth)
            const container = document.querySelector('.card-content');
            setScrollPos(scrollPos + (window.innerWidth / 3 > 600 ? window.innerWidth / 6 : window.innerWidth - 100));
            container.scrollLeft += (window.innerWidth / 3 > 600 ? window.innerWidth / 6 : window.innerWidth - 100);
          }
        
          function handleScrollPrev() {
            console.log(window.innerWidth)
            const container = document.querySelector('.card-content');
            setScrollPos(scrollPos - (window.innerWidth / 3 > 600 ? window.innerWidth / 6 : window.innerWidth - 100));
            container.scrollLeft -= (window.innerWidth / 3 > 600 ? window.innerWidth / 6 : window.innerWidth - 100);
          }
        
     
  return (
    <>
        <div id="faq" className='s6 flex w-full h-screen ' >
            <div className=' s6container h-full w-1/2 flex justify-center items-center flex-col'>
                <div className='s6title flex flex-col mt-2 items-start w-5/6'>
                    <p className='title text-4xl mb-5'>
                        Feedback and Questions 
                    </p>
                    <p className='description text-lg w-10/12'>
                        Welcome to our Feedback and Questions Section ! We value your feedback and want to ensure that you have a platform to ask any questions related to drone. 
                        We are committed to providing accurate and up-to-date information on drone regulations and want to make sure that we are meeting your needs.
                    </p>
                </div>
                <div id="form-main">
                    <div id="form-div">
                        <form className="form" id="form1">
                            <p className="name">
                            <input name="name" type="text" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Name" id="name" />
                            </p>
                            <p className="email">
                                <input name="email" type="text" className="validate[required,custom[email]] feedback-input" id="email" placeholder="Email" />
                            </p>
                            <p className="text">
                                <textarea name="text" className="validate[required,length[6,300]] feedback-input" id="comment" placeholder="Comment"></textarea>
                            </p>
                            <div className="submit">
                                <input type="submit" value='SEND' id="button-blue"/>
                                <div className="ease"></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='questionstitle h-full w-1/2 flex  items-center flex-col  '>
                <div className='s6title flex flex-col mt-6 items-start w-4/5'>
                    <p className='title text-4xl mb-5'>
                        Frequently Asked Questions About Drones
                    </p>
                    <p className='description text-lg w-10/12'>
                        Are you curious about drones? Whether you're a beginner or an experienced pilot, 
                        this section is designed to answer some of the most common questions people have about these fascinating flying machines. 
                        From learning how drones work to understanding the legal regulations surrounding their use,
                         we've got you covered. Explore the topics below to find answers to your most pressing questions about drones.
                    </p>
                </div>
                <div className="slider h-2/3">
                  <button id="prev" className="btn" onClick={handleScrollPrev}>
                    <i className="flex justify-center"><AiOutlineDoubleLeft/></i>
                  </button>
                  <div className="card-content" style={{ scrollLeft: scrollPos }}>
                    {cards.map((card, index) => (
                      <div className="card" key={index}>
                        <h4>{card.rating}</h4>
                        <i className="lar la-heart"><AiOutlineLike/></i>
                        <div className="card-text mt-10">
                          <h2>{card.title}</h2>
                          <p>{card.description}</p>
                        </div>
                        <div className="card-text2">
                          <label className="text-xl">Ans:</label>
                          <p>{card.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button id="next" className="btn" onClick={handleScrollNext}>
                  <i className="flex justify-center"><AiOutlineDoubleRight/></i>
                  </button> 
                </div>
            </div>
        </div>
    </>
    )
}

export default Section6