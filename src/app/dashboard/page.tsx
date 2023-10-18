import React from 'react';
import DashboardServicePage from './(dashBoardLayout)/blog/page';
import ServicePage from './(dashBoardLayout)/service/page';
// import UserPage from './(dashBoardLayout)/user/page';
// import FeedbackPage from './(dashBoardLayout)/feedback/[id]/page';

const DashboardPage = () => {
    return (
        <div>
            <h1>Dashboard Page</h1>
            <DashboardServicePage></DashboardServicePage>
            <ServicePage></ServicePage>
            {/* <UserPage></UserPage> */}
            {/* <FeedbackPage params={id}></FeedbackPage> */}
        </div>
    );
};

export default DashboardPage;