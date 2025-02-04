import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//BrowserRouter - компонент из react-router-dom, который позволяет нам работать с маршрутами по всему приложению
//lessons
// import Lesson06 from './lessons/lesson06/Lesson06';
// import Lesson07 from './lessons/lesson07/Lesson07';
// import Lesson08 from './lessons/lesson08_emotion/Lesson08';
// import Lesson09 from './lessons/lesson09/Lesson09';
// import Lesson10 from './lessons/lesson10/Lesson10';
// import Lesson11 from './lessons/lesson11_practice/Lesson11';
//import Lesson13 from 'lessons/lesson13_routing/Lesson13';
// import Lesson12 from './lessons/lesson12_yup_formik/Lesson12';
import Lesson14 from 'lessons/Lesson14/Lesson14';
import Layout from 'components/layout/Layout';
import Home from 'pages/Home/Home';
import About from 'pages/About/About';
import Users from 'pages/Users/Users';
import User from 'pages/Users/components/User/User';
import Tesla from 'pages/Clients/components/Tesla/Tesla';
import Apple from 'pages/Clients/components/Apple/Apple';
import Nvidea from 'pages/Clients/components/Globe/Nvidea';
import Clients from 'pages/Clients/Clients';


//homeworks
// import Homework08 from './homeworks/homework08/Homework08';
// import Homework09 from './homeworks/homework09/Homework09';
// import Homework10 from './homeworks/homework10/Homework10';
// import Homework12 from './homeworks/homework12/Homework12';


function App() {



  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        {/* Routes собирает все маршруты приложения */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/user' element={<User />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/clients/tesla' element={<Tesla />} />
          <Route path='/clients/apple' element={<Apple />} />
          <Route path='/clients/nvidea' element={<Nvidea />} />
          <Route path='/lesson14' element={<Lesson14 />} />
          {/* Route * - этот route показывает контент, если маршрута не существует в перечисленных выше */}
          <Route path='*' element='Page not found' />
          {/* Route - компонент, в который передаётся маршрут и контент, 
         который нужно отрисовать по этому маршруту в Layout */}
        </Routes>
      </Layout>
      {/* <Lesson06 /> */}
      {/* Topic: TS - Object types, enum */}
      {/* <Lesson07 /> */}
      {/* <Lesson08 /> */}
      {/* <Homework08 /> */}
      {/* <Lesson09 /> */}
      {/* <Homework09 /> */}
      {/* <Lesson10 /> */}
      {/* <Homework10 /> */}
      {/* <Lesson11 /> */}
      {/* <Lesson12 /> */}
      {/* <Homework12 /> */}
      {/* <Lesson13 /> */}
    </BrowserRouter>
  );
}

export default App;
