import React from 'react';
import Navbar from '@/components/_App/Navbar';
import Footer from '@/components/_App/Footer';
import PageNavigation from '@/components/Instructor/PageNavigation';
import { useRouter } from 'next/router';
import UploadVideoForm from '@/components/Instructor/UploadVideoForm';
import SupportButton from '@/components/ContactUs/SupportBtn';

const Index = ({ user }) => {
    const router = useRouter();
    const { id: courseId } = router.query;
    return (
        <>
            <SupportButton />

            <Navbar user={user} />

            <div className='ptb-100'>
                <div className='container'>
                    <PageNavigation
                        courseId={courseId}
                        activeClassname='upload'
                    />

                    <div className='create-course-form'>
                        <UploadVideoForm courseId={courseId} />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Index;
