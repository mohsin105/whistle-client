import React from 'react';
import { Link } from 'react-router';
import FeatureCards from '../components/HomePage/FeatureCards';
import HeroArea from '../components/HomePage/HeroArea';
import HomeCarousel from '../components/HomePage/HomeCarousel';
const Home = () => {
    return (
        <div>
            <HeroArea/>
            <h2>What you'll have</h2>
            <FeatureCards/>
            <HomeCarousel/>
            <section className='w-5/6 mx-auto my-4 bg-blue-500 text-center flex justify-center items-center text-white p-6 rounded-lg shadow-blue-200  '>
                <p className='text-2xl font-semibold'> See what others whistle. </p>
                    <Link 
                        to={'newsfeed'}
                        className='btn btn-accent  p-6 ml-4'>
                            Explore Whistle
                    </Link>
            </section>
            <section className='w-5/6 mx-auto my-4 bg-violet-500 flex justify-center items-center rounded-lg  p-6 gap-4'>
                <p className='text-2xl font-semibold'>Ready to whistle your story? </p>
                <Link
                    to={'/login'}
                    className='btn btn-info p-6'>Join today!</Link>

            </section>
        </div>
    );
};

export default Home;