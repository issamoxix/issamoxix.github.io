import About from '../pages/About'
import Landing from '../pages/Landing'
import Projects from '../pages/Projects'
import Skills from '../pages/Skills'
const Routes = [
    {
        exact:true,
        path:'/Projects',
        component:Projects
    },
    {
        exact:true,
        path:'/Skills',
        component:Skills
    },
    {
        exact:true,
        path:'/About',
        component:About
    },
    {
        exact:true,
        path:'/',
        component:Landing
    },

    
]
export default Routes