import React from 'react';
import Hero from './Hero';
import About from './About';
import Activities from './Activities';
import Products from './Products';

export default function LandingPage() {
    return (
        <div>
            <Hero />
            <About/>
            <Products/>
        </div>
    );
}