import React from 'react';
import DashboardServicePage from './(dashBoardLayout)/blog/page';
import ServicePage from './(dashBoardLayout)/service/page';

const DashboardPage = () => {
    return (
        <div>
            <h1>Dashboard Page</h1>
            <DashboardServicePage></DashboardServicePage>
            <ServicePage></ServicePage>
        </div>
    );
};

export default DashboardPage;