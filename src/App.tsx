import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'

//lessons
import Lesson17 from 'lessons/Lesson17/Lesson17'
import Lesson18 from 'lessons/Lesson18/Lesson18'
import Layout from 'components/pages/UsersApp/Layout/Layout'
import Home from 'components/pages/UsersApp/Home/Home'

//homeworks
import Homework17 from 'homeworks/Homework17/Homework17'

//feedback
import Feedback from 'components/Feedback/Feedback'
import Users from 'components/pages/UsersApp/Users/Users'
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
					
					<Route path='/Feedback' element={<Feedback />} />
					
          <Route path='/Homework17' element={<Homework17 />} />
					<Route path='/Lesson18' element={<Lesson18 />} />
					
          <Route path='*' element='Page not found'/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App