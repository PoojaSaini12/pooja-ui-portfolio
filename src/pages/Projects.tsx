import React from 'react'
import {Navbar} from '../layout/Navbar'
import Header from '../layout/Header'

import Antly from './Companies/Antly'
import Mindrops from './Companies/Mindrops'
import Aquevix from './Companies/Aquevix'
import ElkEducation from './Companies/ElkEducations'
import Footer from '../layout/Footer'

export default function ProjectsPage() {


    return (
        <>
            <div className="min-h-screen overflow-x-hidden">
                <Header />
                <main>
                    <div className='container mx-auto px-6 pt-32 pb-20 relative z-10'>
                       <Antly/>
                       <Mindrops/>
                       <Aquevix/>
                    </div>
                </main>
                <Footer/>
            </div>
        </>

    )
}
