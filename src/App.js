import './App.css'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Repetitions from './components/repetitions/Repetitions'
import TheaterIs from './components/theater_is/TheaterIs'
import Topic from './components/topic/Topic'
import girlsInBlue from './images/Img/Girls-in-blue.png'
import oratory from './images/Img/oratory.png'
import Indian_dance from './images/Img/Indian-dance.png'
import Alisa from './images/Img/Alisa.png'
import Slider from './components/slider/Slider'
import Footer from './components/footer/Footer'
import Production from './components/production_of/Production_of'
import director from './images/Img/director.png'
import decoration from './images/Img/decoration.png'
import preparation from './images/Img/Masha.png'
import creative_search from './images/Img/creative search.png'
import this_time from './images/Img/last-image.png'
import three_orange from './images/Img/Three_orange.png'

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <TheaterIs />
      <Topic title={repetitions} />
      <Repetitions
        text={trainings}
        text_2={theater_is}
        img2={picture1}
        button_title="пробне заняття"
      />
      <Topic title={additionally} />
      <Repetitions
        topic={topic_speaking}
        text={public_speaking}
        img={picture2}
        button_title="пробне заняття"
      />
      <Repetitions
        topic="Танювальне мистецтво"
        text={dance}
        img2={picture3}
        button_title="пробне заняття"
      />
      <Repetitions
        topic="Музичне мистецтво"
        text={music}
        img={picture4}
        button_title="пробне заняття"
      />
      <Topic title="Репертуар" />
      <Slider />
      <Topic title="Як ставляться спектаклі" />
      <Production
        text1={finde_director}
        text2={buildDecoration}
        img1={director}
        img2={decoration}
      />
      <Production
        text1={preparation_text}
        text2={creative_search_text}
        img1={preparation}
        img2={creative_search}
      />
      <Production
        text1={this_time_text}
        text2={resume_text}
        img1={this_time}
        img2={three_orange}
      />
      {/* <div className="resume">
        <p>{resume_text}</p>
      </div> */}

      <Footer />
    </div>
  )
}

export default App

const picture1 = {
  img: girlsInBlue,
  alt: 'girls in blue',
}

const theater_is = `Театр - це місце, де кожна дитина розкриває свою яскраву творчу частину
// особистості. Тут діти спілкуються з однодумцями, перевтілюються в
// цікавих персонажів, вчаться імпровізувати та впевнено почуватись на
// сцені. Ми граємо спектаклі в Донецьку та іноді гастролюємо, ставимо
// короткі номери, етюди, приймаємо участь у заходах міста. В нас багато
// двіжу!!!`

const repetitions = `Репетиції включають в себе`

const trainings = ` Цікаві тренінги на розвиток навичок працювати в команді, вільно
почуватись на сцені, наносити простий грим, основи естрадного співу
і танця. Репетиції проходять 2 рази на тиждень Декілька разів на
місяць юні актори грають спектаклі`

const topic_speaking = `Ораторське мистецтво`

const public_speaking = `
Курс направлений на вдосконалення вміння говорити до групи людей у структурований, виважений спосіб. Постановка дихання та голосу, вправи для артикуляції 
`
const additionally = `Додатково ви можете обрати для своєї дитини `

const picture2 = {
  img: oratory,
  alt: 'oratory',
}
const picture3 = {
  img: Indian_dance,
  alt: 'Indian dance',
}
const picture4 = {
  img: Alisa,
  alt: 'Alisa',
}

const dance = `
Курс направлений на вдосконалення вміння виражати емоції через рухи, розвиток відчуття ритму та акторського танцю`

const music = `Курс направлений на вдосконалення слуху, вокальна постановка голосу, вивчення пісень або творів на гітарі чи піаніно для виконання у спектаклях`

const finde_director = `1) Спектаклі знаходить режисер в книжках, в інтернеті, діти також можуть знайти п’єсу, яку хотіли б грати.`

const buildDecoration = `2) Збираються декорації, перебираються костюми, які вже є в театрі і відбираються ті, що можуть знадобитись в новому спектаклі. Відсутні костюми ш’ються після підбору акторів і зняття замірів`

const preparation_text = `3) Під час технічних підготувань режисер вже ставить перші сцени, актори разом з режисером, намічають час роботи та об’єм. `

const creative_search_text = `4) Коли загалом актори вже знають, що їм робити, починається творчий пошук: в наступні репетиції йде багато імпровізації та моментів під назвою “А що, якщо зробити так...”.  `

const this_time_text = `В цей час спектакль набирає свого емоційного забарвлення, коли актори вкладають свою душу, так би мовити оживляють дію на сцені.`

const resume_text = `І ось як результат копіткої праці, після всіх цих етапів та довгих старанних репетицій, виходить у світ плід усієї команди - нова вистава!
`
