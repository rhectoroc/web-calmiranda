import React from 'react';
import { FranchiseHero } from './components/FranchiseHero';
import { FranchiseBenefitCards } from './components/FranchiseBenefitCards';
import { FranchiseRequirements } from './components/FranchiseRequirements';

export const FranchisePage: React.FC = () => {
    return (
        <div className="pt-20 bg-cal-bone">
            <FranchiseHero />
            <FranchiseBenefitCards />
            <FranchiseRequirements />
        </div>
    );
};
