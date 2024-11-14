import './App.css';
import './style/reset.css';

function App() {
  return (
    <>
      <section className='main'>
        <div className="main__container">
          <div className="main__content content">
              <div className="content__price">
                <h1 className='content__price-title'>Ціни:</h1>
              </div>

              <div className="content__goods goods">
                <div className="goods__first-position first-position">
                  <h2 className='first-position__title'>
                    <span className='first-position__title-price'>420 грн</span>
                    на особу:
                  </h2>
                  <ul className='first-position__list'>
                  <li className='first-position__item'>Курячі крильця</li>
                  <li className='first-position__item'>Стегна без кісточки</li>
                  <li className='first-position__item'>Шашлик свинний</li>
                  <li className='first-position__item'>Ковбаски гриль</li>
                  <li className='first-position__item'>овочі + картопля</li>
                  </ul>
                </div>
                <div className="goods__second-position">
                <h2 className='second-position__title'>
                    <span className='second-position__title-price'>470 грн</span>
                    на особу:
                  </h2>
                  <ul className='second-position__list'>
                  <li className='second-position__item red'>Телятина на кісточці</li>
                  <li className='second-position__item'>Курячі крильця</li>
                  <li className='second-position__item'>Стегна без кісточки</li>
                  <li className='second-position__item'>Шашлик свинний</li>
                  <li className='second-position__item'>Ковбаски гриль</li>
                  <li className='second-position__item'>овочі + картопля</li>
                  </ul>
                </div>
              </div>
          </div>
          <div className="main__info info">
              <a className='info__tell' href="tel:0636127614">063-61-27-614</a>
              <a className="info__social" href="https://www.instagram.com/uhryba_?igsh=MTRpdmp2aGZmbmU4eA%3D%3D">
                <img className="info__social-img" src="./src/assets/inst.png" alt="instagram" />
              </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
