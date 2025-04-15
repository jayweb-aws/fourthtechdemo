import React from 'react';
import ProgramHero from './ProgramHero/ProgramHero';
import ProgramOverview from './ProgramOverview/ProgramOverview';
import ProgramCurriculam from './ProgramCurriculam/ProgramCurriculam';
import ProgramSchedule from './ProgramSchedule/ProgramSchedule';
import ProgramSupport from './ProgramSupport/ProgramSupport';
import ProgramTeam from './ProgramTeam/ProgramTeam';
import ProgramCareerService from './ProgramCareerService/ProgramCareerService';
import ProgramStudentReview from './ProgramStudentReview/ProgramStudentReview';
import ProgramTuitionFinance from './ProgramTuitionFinance/ProgramTuitionFinance';
import ProgramUpcomingCourse from './ProgramUpcomingCourse/ProgramUpcomingCourse';
import TestimonialSimple from '../testimonialsV2/TestimonialSimple/TestimonialSimple';

const SingleProgram = () => {
    return (
        <div className='font-poppins'>
            {/* <ProgramHero />
            <ProgramOverview />
            <ProgramCurriculam />
            <ProgramSchedule />
            <ProgramSupport />
            <ProgramTeam />
            <ProgramCareerService />
            <ProgramStudentReview />
            <ProgramTuitionFinance />
            <ProgramUpcomingCourse /> */}

            <ProgramHero />
            <ProgramOverview />
            <ProgramUpcomingCourse />
            <ProgramTeam />
            <TestimonialSimple />
            <ProgramSupport />
            <ProgramSchedule />
        </div>
    );
};

export default SingleProgram;