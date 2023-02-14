import React from 'react';
import './../stylesheets/articles.css';
import img1 from './../assets/grilledTomatoes.png';
import img2 from './../assets/peachSalsa.jpeg';
import img3 from './../assets/mealPrepIdeas.jpeg';
import img4 from './../assets/howToGrillCorn.jpeg';
import img5 from './../assets/crunchWrap.jpeg';
import img6 from './../assets/brocolliSoup.jpeg';

type Props = {};
const items = [
  {
    src: `${img1}`,
    heading: 'Grilled  Tomatoes at Home',
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    src: `${img2}`,
    heading: 'Snacks for Travel',
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    src: `${img3}`,
    heading: 'Post-workout Recipes',
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    src: `${img4}`,
    heading: 'How To Grill Corn',
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    src: `${img5}`,
    heading: 'Crunchwrap Supreme',
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    src: `${img6}`,
    heading: 'Broccoli Cheese Soup',
    description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
];

function About({}: Props) {
  const list = items.map((item) => {
    return (
      <div className='container'>
        <img
          src={item.src}
          className={'articles-img'}
        />
        <h3 className='article-head'>{item.heading}</h3>
        <p className='article-description'>{item.description}</p>

        <button className='bottom read-more-btn'>Read More</button>
      </div>
    );
  });
  return (
    <div className={'wrapper'}>
      <h1 className='bg-none article-heading'>Latest Articles</h1>
      <section
        className={'main bg-none'}
        style={{ overflow: 'scroll' }}>
        {list}
      </section>
    </div>
  );
}

export default About;
