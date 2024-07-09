import Image from 'next/image';
import Link from 'next/link';
import { IMAGES } from '@/assets';
import AlbumSvg from '@/components/AlbumSvg';

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
            src={IMAGES.image1}
            alt={'to do feature image'}
            className="composition__photo composition__photo--p1"
          ></Image>
          <Image
            src={IMAGES.image2}
            alt={'album feature image'}
            className="composition__photo composition__photo--p2"
          ></Image>
          <Image
            src={IMAGES.image3}
            alt={'chat feature image'}
            className="composition__photo composition__photo--p3"
          ></Image>
        </div>
      </section>
      <section className="section-features">
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
              <div className={'card__side card__side--front'}>Card front</div>
              <div className={'card__side card__side--back'}>Card back</div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="card">Card test</div>
          </div>
          <div className="col-span-1">
            <div className="card">Card test</div>
          </div>
        </div>
      </section>
    </>
  );
}
