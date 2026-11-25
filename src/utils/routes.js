import About from '../pages/About'
import Landing from '../pages/Landing'
import Projects from '../pages/Projects'
import Skills from '../pages/Skills'
import Experience from '../pages/Experience'
const Routes = [
    {
        
        path:'/Projects',
        component:Projects
    },
    {
        path:'/Experience',
        component:Experience
    },
    {
        
        path:'/Skills',
        component:Skills
    },
    {
        
        path:'/About',
        component:About
    },
    {
        
        path:'/',
        component:Landing
    },

    
]
export default Routes