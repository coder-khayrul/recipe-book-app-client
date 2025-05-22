import React from 'react';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import SingleRecipe from '../ui/SingleRecipe';

const TopRecipe = () => {
    return (
        <section className='bg-main-light py-20'>
            <Container>
                <SectionHeader 
                title={<>Top Recipes  <span className="text-third"> of the Week</span>
                </>} 
                subTitle={"Top Recipes"}
                ></SectionHeader>
                <div className='grid grid-cols-2 xm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <SingleRecipe></SingleRecipe>
                    <SingleRecipe></SingleRecipe>
                    <SingleRecipe></SingleRecipe>
                </div>
            </Container>
        </section>
    );
};

export default TopRecipe;