import Image from 'next/image';
import Link from 'next/link';
import AlbumSvg from '@/components/AlbumSvg';
import { IMAGES } from '@/assets';

export default function Home() {
  return (
    <>
      <header className={'header'}>
        <div className={'center-text mb-8'}>
          <h2 className="heading-secondary">Kiary</h2>
        </div>
      </header>
      <section className={'section-about grid grid-cols-2'}>
        <div className={'col-span-1'}>
          <h3 className="heading-tertiary mb-1.5">Diary for ???</h3>
          <p className={'paragraph'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            culpa, cumque doloribus excepturi ipsam, itaque natus nihil nostrum
            nulla obcaecati pariatur, porro provident quam quidem ratione
            recusandae repudiandae voluptas voluptatem?
          </p>
          <h3 className="heading-tertiary mb-2">TBU</h3>
          <p className={'paragraph'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            culpa, cumque doloribus excepturi ipsam, itaque natus nihil nostrum
            nulla obcaecati pariatur, porro provident quam quidem ratione
            recusandae repudiandae voluptas voluptatem?
          </p>
          <Link href={'#'} className={'btn-text'}>
            Find more &rarr;
          </Link>
        </div>
        <div className="composition col-span-1">
          <Image
            src={IMAGES.homeTodo}
            alt={'to do feature image'}
            fill
            className="composition__photo composition__photo--p1"
          ></Image>
          <Image
            src={IMAGES.homeAlbum}
            alt={'album feature image'}
            fill
            className="composition__photo composition__photo--p2"
          ></Image>
          <Image
            src={IMAGES.homeChat}
            alt={'chat feature image'}
            fill
            className="composition__photo composition__photo--p3"
          ></Image>
        </div>
      </section>
      <section className="section-features" id={'section-tours'}>
        <div className="grid grid-cols-4">
          <div className={'col-span-1'}>
            <div className="feature-box">
              <AlbumSvg
                width={80}
                height={80}
                className={'feature-box__icon'}
              />
              <h3 className={'heading-tertiary mb-1.5'}>Album</h3>
              <p className={'feature-box__text'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Architecto aut deleniti deserunt dolores eum excepturi fuga non
                saepe suscipit voluptas. Itaque, nesciunt nihil. Beatae dolore
                fuga odio reiciendis, sit voluptates.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-pricing">
        <div className="center-text">
          <h2 className="heading-secondary">asdasdasd</h2>
        </div>
        <div className={'grid grid-cols-3'}>
          <div className="col-span-1">
            <div className="card">
              <div className={'card__side card__side--front'}>
                <div className="card__picture card__picture--1">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--1">
                    basic pricing
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>up to 10 to dos a day</li>
                    <li>free 50 images storage</li>
                    <li>free 1 private album</li>
                    <li>basic features</li>
                    <li>and totally free</li>
                  </ul>
                </div>
              </div>
              <div
                className={'card__side card__side--back card__side--back--1'}
              >
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Lifetime</p>
                    <p className="card__price-value">Free</p>
                  </div>
                  <a href="#popup" className="btn btn--white">
                    Sign up now!
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="card">
              <div className={'card__side card__side--front'}>
                <div className="card__picture card__picture--2">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--2">
                    standard pricing
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>up to 20 to dos a day</li>
                    <li>free 500 images storage</li>
                    <li>free 5 private album</li>
                    <li>???</li>
                    <li>and advanced features</li>
                  </ul>
                </div>
              </div>
              <div
                className={'card__side card__side--back card__side--back--2'}
              >
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">only</p>
                    <p className="card__price-value">1,900원/월</p>
                  </div>
                  <a href="#popup" className="btn btn--white">
                    Sign up now!
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="card">
              <div className={'card__side card__side--front'}>
                <div className="card__picture card__picture--3">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--3">
                    best pricing
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>up to 50 to dos a day</li>
                    <li>1000 images storage</li>
                    <li>50 private album</li>
                    <li>???</li>
                    <li>all features</li>
                  </ul>
                </div>
              </div>
              <div
                className={'card__side card__side--back card__side--back--3'}
              >
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">only</p>
                    <p className="card__price-value">2,900원/월</p>
                  </div>
                  <a href="#popup" className="btn btn--white">
                    Sign up now!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="center-text mb-4">
          <a href={'#'} className={'btn btn--green mt-4'}>
            Or, Try free trial!
          </a>
        </div>
      </section>
      <section className="section-stories">
        <div className="bg-video">
          <video src="" className="bg-video__content" autoPlay muted loop>
            {/*<source src={} type={'video/mp4'} />*/}
            {/*<source src={} type={'video/webm'} />*/}
          </video>
        </div>
        <div className="center-text mb-2">
          <h2 className="heading-secondary">
            We make a day genuinely memorable
          </h2>
        </div>
        <div className="row">
          <div className="story">
            <figure className="story__shape">
              <img
                src={
                  'https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
                alt={'hero image 1'}
                className={'story__img'}
              />
              <figcaption className="story__caption">Mary Smith</figcaption>
            </figure>
            <div className="div story__text">
              <h3 className="heading-tertiary mb-2">text</h3>
              <p>
                asdasdasdas asdasd asdas dasdasd asdasdasdasdas
                dasdasdasdasdasda sdasdasdasdas dasda sdasdasdasdas
                dasdasdasdasd asdasdasdasdasdas dasdasda sdasdasdas
                dasdasdasdasd asdasdasdasd asdas dasdasdasd
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="story">
            <figure className="story__shape">
              <img
                src={
                  'https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
                alt={'hero image 1'}
                className={'story__img'}
              />
              <figcaption className="story__caption">Mary Smith</figcaption>
            </figure>
            <div className="div story__text">
              <h3 className="heading-tertiary mb-2">text</h3>
              <p>
                asdasdasdas asdasd asdas dasdasd asdasdasdasdas
                dasdasdasdasdasda sdasdasdasdas dasda sdasdasdasdas
                dasdasdasdasd asdasdasdasdasdas dasdasda sdasdasdas
                dasdasdasdasd asdasdasdasd asdas
              </p>
            </div>
          </div>
        </div>

        <div className="center-text mt-2">
          <a href="" className="btn--text">
            Discover more! &rarr;
          </a>
        </div>
      </section>
      <section className="section-book">
        <div className="row">
          <div className="book">
            <div className="book__form">
              <form className="form">
                <div className="center-text mb-8">
                  <h2 className="heading-secondary">
                    Subscribe our news letter
                  </h2>
                </div>
                <div className="form__group">
                  <input
                    id={'name'}
                    type="text"
                    className="form__input"
                    placeholder={'Full Name'}
                    required
                  />
                  <label htmlFor="name" className="form__label">
                    Full name
                  </label>
                </div>
                <div className="form__group">
                  <input
                    id={'email'}
                    type="email"
                    className="form__input"
                    placeholder={'Email address'}
                    required
                  />
                  <label htmlFor="email" className="form__label">
                    Email address
                  </label>
                </div>
                <div className="form__group">
                  <div className="form__radio-group">
                    <input
                      type="radio"
                      className="form__radio-input"
                      id={'free'}
                      name={'grade'}
                    />
                    <label htmlFor="free" className="form__radio-label">
                      <span className="form__radio-button"></span>
                      Free
                    </label>
                  </div>
                  <div className="form__radio-group">
                    <input
                      type="radio"
                      className="form__radio-input"
                      id={'premium'}
                      name={'grade'}
                    />
                    <label htmlFor="premium" className="form__radio-label">
                      <span className="form__radio-button"></span>
                      Premium
                    </label>
                  </div>
                </div>
                <div className="form__group">
                  <button className="btn btn--green">Next Step &rarr;</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__logo-box">
          <Image src={IMAGES.homeAlbum} alt="logo" className={'footer__logo'} />
          <div className="row">
            <div className="col-span-1">
              <div className="footer__navigation">
                <ul className="footer__list">
                  <li className="footer__item">
                    <a href="" className="footer__link">
                      Company
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="" className="footer__link">
                      Contact us
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="" className="footer__link">
                      Careers
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="" className="footer__link">
                      Privacy policy
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="" className="footer__link">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-1">
              <p className="footer_copyright">
                Built my{' '}
                <a href="#" className="footer__link">
                  KKU
                </a>
                . Copyright &copy; by Kiary.
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className={'popup'} id={'popup'}>
        <div className="popup__content">
          <div className="popup__left">
            <Image src={IMAGES.homeTodo} alt="logo" className={'popup__img'} />
            <Image src={IMAGES.homeAlbum} alt="logo" className={'popup__img'} />
          </div>
          <div className="popup__right">
            <a href={'#section-tours'} className="popup__close">
              &times;
            </a>
            <h2 className="heading-secondary">Start Subscribe now</h2>
            <h3 className="heading-tertiary">
              Important &ndahs; Please read these terms before subscribe
            </h3>
            <div className="popup__text">
              asldkjaskdljaasdadasdasdsasskljdlkasjdklasldkjaskdljaasdadasdasdsassk
              ljdlkasjdklasldkjaskdljaasdadasdasdsasskljdlkasjdklasldkjaskdljaasdadasdasdsasskljd
              lkasjdklasldkjaskdljaasdadasdasdsasskljdlkasjdklasldkjaskdljaasdadasdasdsasskljdlkasjdkl
              asldkjaskdljaasdadasdasdsasskljdlkasjdklasldkjaskdljaasdadasdasdsasskljdasldkjaskdljaasdadasdasdsa
              sskljdlkasjdklasldkjaskdljaasdadasdasdsasskljdlkasjdklasldkjaskdljaasdadasdasdsasskljdlkasjdklas
              ldkjaskdljaasdadasdasdsasskljdlkasjdklasldkjaskdljaasdadasdasdsasskljdlkasjdklasldkjaskdljaasdadasdas
              dsasskljdlkasjdklasldkjaskdljaasdadasdasdsasskljdlkasjdklasldkjaskdljaasdadasdas
              dsasskljdlkasjdklasldkjaskdljaasdadasdasdsasskljdlkasjdklasldkjaskdljaasd
              adasdasdsasskljdlkasjdklasldkjaskdljaasdadasdasdsasskljdlkasjdklasldk
            </div>
            <a href="" className="btn btn--green">
              Subscribe now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
