import React, { useRef, useEffect, useState } from 'react';
import * as htmlToImage from 'html-to-image';
import { jsPDF } from 'jspdf';
import baseUrl from '@/utils/baseUrl';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import Navbar from '@/components/_App/Navbar';
import Footer from '@/components/_App/Footer';
import SupportButton from '@/components/ContactUs/SupportBtn';
import Confetti from 'react-confetti';


const slug = ({ user }) => {
    const [student, setStudent] = useState(
        user && `${user.first_name} ${user.last_name}`
    );
    const [course, setCourse] = useState({});
    const router = useRouter();
    const { slug } = router.query;

    const getCurrentDate = () => {
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();

        return `${day}/${month}/${year}`;
    };

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const payload = {
                    params: { slug: slug },
                };
                const url = `${baseUrl}/api/courses/course`;
                const response = await axios.get(url, payload);
                setCourse(response.data.course);
            } catch (err) {
                let {
                    response: {
                        data: { message },
                    },
                } = err;
                toast.error(message, {
                    style: {
                        border: '1px solid #ff0033',
                        padding: '16px',
                        color: '#ff0033',
                    },
                    iconTheme: {
                        primary: '#ff0033',
                        secondary: '#FFFAEE',
                    },
                });
            }
        };

        if (user) {
            fetchCourse();
        } else {
            router.push(`/learning/my-courses`);
        }
    }, [slug]);

    const domEl = useRef(null);

    const downloadCertificate = async () => {
        const dataUrl = await htmlToImage.toJpeg(domEl.current);

        //download certificate
        const link = document.createElement('a');
        link.download = `${student.toLowerCase().replaceAll(' ', '-')}.jpg`;
        link.href = dataUrl;
        link.click();
    };

    const downloadCertificatePdf = async () => {
        const dataUrl = await htmlToImage.toJpeg(domEl.current);

        const pdf = new jsPDF();
        pdf.addImage(dataUrl, 'JPEG', 0, 0);
        pdf.save(`${student.toLowerCase().replaceAll(' ', '-')}.pdf`);
    };

    return (
        <>
            <SupportButton />

            <Navbar user={user} />

            <div className='ptb-100 get-certificate'>
                <div className='container'>
                    <div className='form-box'>
                        <form>
                            <label className='mb-2'>Seu Nome</label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter your name'
                                value={student}
                                onChange={(e) => setStudent(e.target.value)}
                            />
                        </form>
                    </div>
                    <div id='domEl' ref={domEl} className='certificate-img'>
                        <Confetti width={1200} height={700} />
                        <div className='content'>
                            <h2>{student}</h2>
                            <p className='date'>{getCurrentDate()}</p>
                            <p>
                                Por completar o <b>{course && course.title}</b>
                            </p>
                        </div>
                        <img src='/images/certificate2.jpg' alt='' />
                    </div>

                    <div className='caption'>
                        <button
                            className='download-btn download-btn-jpg visible'
                            onClick={downloadCertificate}
                            title='JPEG Image'
                        >
                            Download as JPG
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default slug;
