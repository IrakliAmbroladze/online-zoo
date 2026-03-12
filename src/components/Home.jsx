import { useState, useRef } from "react";

const getSliderMetrics = (sliderRef, viewportRef, cardSelector) => {
  if (!sliderRef.current || !viewportRef.current) return null;

  const slider = sliderRef.current;
  const viewport = viewportRef.current.offsetWidth;
  const sliderWidth = slider.offsetWidth;
  const gap = parseFloat(
    window.getComputedStyle(slider).getPropertyValue("gap"),
  );
  const card = slider.querySelector(cardSelector);
  const cardWidth = card ? card.offsetWidth : 0;

  return {
    sliderOverflow: sliderWidth - viewport,
    stepWidth: cardWidth + gap,
  };
};

const Home = () => {
  const [offset, setOffset] = useState(0);
  const sliderRef = useRef(null);
  const viewportRef = useRef(null);

  const moveLeft = () => {
    const metrics = getSliderMetrics(sliderRef, viewportRef, ".animals-card");
    if (!metrics) return;
    const { sliderOverflow, stepWidth } = metrics;

    setOffset((prev) => {
      const next = prev + stepWidth;
      return sliderOverflow + next > sliderOverflow ? 0 : next;
    });
  };

  const moveRight = () => {
    const metrics = getSliderMetrics(sliderRef, viewportRef, ".animals-card");
    if (!metrics) return;
    const { sliderOverflow, stepWidth } = metrics;

    setOffset((prev) => {
      const next = prev - stepWidth;
      return sliderOverflow + next < 0 ? -sliderOverflow : next;
    });
  };

  return (
    <div className="page-landing">
      <main className="main">
        <div className="container">
          <div className="title-container">
            <h1>Watch your favorite animal online</h1>
            <h2>
              Explore the exciting and mysterious world of wild animals in a
              natural setting without leaving your home.
            </h2>
            <button className="btn btn--orange">
              view live cam <img src="icons/arrow.svg" alt="arrow" />
            </button>
          </div>
        </div>
        <div className="cover-image">
          <img src="images/Background.jpg" alt="" />
        </div>
      </main>
      <section className="welcome">
        <div className="container">
          <div className="welcome-card-1">
            <div className="welcome-text-content">
              <h2>Welcome to the Online Zoo!</h2>
              <p>
                On our website, using live webcams, fans of all ages can observe
                various animals. Among them, are Giant pandas, eagles,
                alligators, forest gorillas, African lions, and others. It is
                the whole natural world in real-time in front of our cameras. We
                hope you will enjoy watching closely and explore animals'
                behavior and habitats! Note: animals are not always on view on
                cameras, so please check back if you don't see anything.
              </p>
            </div>
            <div className="welcome-image">
              <img src="images/welcome.jpg" alt="welcome" />
            </div>
          </div>
          <div className="welcome-card-2">
            <div className="welcome-text-content">
              <h2>How we work</h2>
              <p>
                Online Zoo is a nonprofit committed to inspiring awareness and
                preservation of nature and wild animals in our zoo and
                worldwide. To continue these efforts, we need your help. We're
                so grateful to our supporters. All donations, large and small,
                go a long way to the conservation efforts of our pets.
              </p>
            </div>
            <div className="welcome-image">
              <img src="images/how_it_works.jpg" alt="how_it_works" />
            </div>
          </div>
        </div>
      </section>
      <section className="donation">
        <div className="container">
          <div className="description">
            <h2>Your donation makes a difference!</h2>
            <p>
              The Online Zoo's animal webcams are some of the most famous on the
              internet. Tune in to watch your favourite animals — live, 24/7!
            </p>
          </div>
          <div className="quick-donate">
            <h3>Quick Donate</h3>
            <div className="amount">
              <span className="donation-amount">$ Donation Amount</span>
              <button className="btn btn--orange">
                <img src="icons/arrow.svg" alt="arrow" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="meet-pets">
        <div className="container" id="pets-container" ref={viewportRef}>
          <div className="intro">
            <h2>Meet some our pets</h2>
            <p>
              Do you have a special place in your heart for animals? Who are
              your favorites? Perhaps you'd like to donate to special ones or
              all our pets? We think it's important for you to choose how your
              donation is used.
            </p>
          </div>
          <div className="slider-arrows">
            <div className="left" id="sldr_left_arr" onClick={moveLeft}></div>
            <div
              className="right"
              id="sldr_right_arr"
              onClick={moveRight}
            ></div>
          </div>
          <div
            className="slider-pets-in-zoo"
            id="slider"
            ref={sliderRef}
            style={{
              transform: offset === 0 ? "none" : `translateX(${offset}px)`,
            }}
          >
            <div className="animals-card">
              <label>Liz</label>
              <div className="cover">
                <img src="images/koala.png" alt="koala" />
              </div>
              <div className="title">Australian Koala</div>
              <p>
                The elevated walkways bring you to eye level with the koalas as
                they perch in their forest.
              </p>
              <button className="btn btn--pure-text-orange">
                <span>view live cam</span>
                <img src="icons/arrow.svg" alt="arrow" />
              </button>
            </div>
            <div className="animals-card">
              <label>Shake</label>
              <div className="cover">
                <img src="images/lion.png" alt="lion" />
              </div>
              <div className="title">African Lion</div>
              <p>
                Lions roam the savannas and grasslands of Africa, hunting and
                raising cubs in the pride.
              </p>
              <button className="btn btn--pure-text-orange">
                <span>view live cam</span>
                <img src="icons/arrow.svg" alt="arrow" />
              </button>
            </div>
            <div className="animals-card">
              <label>Senja</label>
              <div className="cover">
                <img src="images/tiger.png" alt="tiger" />
              </div>
              <div className="title">Sumatran Tiger</div>
              <p>Sumatran Tigers are the smallest of the five sub-species.</p>
              <button className="btn btn--pure-text-orange">
                <span>view live cam</span>
                <img src="icons/arrow.svg" alt="arrow" />
              </button>
            </div>
            <div className="animals-card">
              <label>Sam & Lora</label>
              <div className="cover">
                <img src="images/eagles.png" alt="eagles" />
              </div>
              <div className="title">West End Bald Eagles</div>
              <p>
                Pair of eagle parents lay and protect eggs, feed their chicks
                and teach them to hunt and fly.
              </p>
              <button className="btn btn--pure-text-orange">
                <span>view live cam</span>
                <img src="icons/arrow.svg" alt="arrow" />
              </button>
            </div>
            <div className="animals-card">
              <label>Andy</label>
              <div className="cover">
                <img src="images/lemur.png" alt="lemur" />
              </div>
              <div className="title">Australian Koala</div>
              <p>
                The elevated walkways bring you to eye level with the koalas as
                they perch in their forest.
              </p>
              <button className="btn btn--pure-text-orange">
                <span>view live cam</span>
                <img src="icons/arrow.svg" alt="arrow" />
              </button>
            </div>
            <div className="animals-card">
              <label>Glen</label>
              <div className="cover">
                <img src="images/gorilla.png" alt="gorilla" />
              </div>
              <div className="title">Gorilla in Congo</div>
              <p>
                Variety of snacks very important for the healthy life of
                gorillas and his plenty of babies.
              </p>
              <button className="btn btn--pure-text-orange">
                <span>view live cam</span>
                <img src="icons/arrow.svg" alt="arrow" />
              </button>
            </div>
            <div className="animals-card">
              <label>Mike</label>
              <div className="cover">
                <img src="images/alligator.png" alt="alligator" />
              </div>
              <div className="title">Chinese Alligator</div>
              <p>
                From nose to tail, belly to back, hard scales protect this
                petite alligator.
              </p>
              <button className="btn btn--pure-text-orange">
                <span>view live cam</span>
                <img src="icons/arrow.svg" alt="arrow" />
              </button>
            </div>
            <div className="animals-card">
              <label>Lucas</label>
              <div className="cover">
                <img src="images/panda.png" alt="panda" />
              </div>
              <div className="title">Giant Panda</div>
              <p>
                Native to central China, giant pandas have come to symbolize
                vulnerable species.
              </p>
              <button className="btn btn--pure-text-orange">
                <span>view live cam</span>
                <img src="icons/arrow.svg" alt="arrow" />
              </button>
            </div>
          </div>
          <button className="btn btn--font-navy btn-favorite">
            <span>choose your favorite</span>
            <img src="icons/arrow.svg" alt="arrow" />
          </button>
        </div>
      </section>
      <section className="pay-and-feed">
        <h2>Pay and feed</h2>
      </section>
    </div>
  );
};

export default Home;
