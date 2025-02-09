import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import GlobalStyles from './styles/GlobalStyles'

//lessons
import Lesson17 from 'lessons/Lesson17/Lesson17'
import Layout from 'components/pages/UsersApp/Layout/Layout'
import Home from 'components/pages/UsersApp/Home/Home'
import Users from 'components/pages/UsersApp/Users/Users'

//homeworks
import Homework17 from 'homeworks/Homework17/Homework17'

//feedback
import Feedback from 'components/Feedback/Feedback'
//consultations

{/* <Lesson17 /> */}
{/* UserApp - Practice - Lesson17 */}
const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
			{/* <Homework17 /> */}
      <Layout>
        <Routes>
         { <Route path='/' element={<Home/>}/>}
          {<Route path='/users' element={<Users/>}/>}
					
          <Route path='/homework17' element={<Homework17 />} />
					
          <Route path='*' element='Page not found'/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
