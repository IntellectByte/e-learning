import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import baseUrl from '@/utils/baseUrl';
import CourseCard from '../Courses/CourseCard';
import { toast } from 'react-hot-toast';

const PopularCourses = ({ user }) => {
    const [courses, setCourses] = useState([]);

    const fetchCourses = async () => {
        const payload = {
            params: {
                page: 1,
                limit: 3,
                short: '',
                search: '',
            },
        };

        const response = await axios.get(`${baseUrl}/api/all-courses`, payload);
        setCourses(response.data.courses);
        // console.log(response.data.courses);
    };
    useEffect(() => {
        fetchCourses();
    }, []);

    const handleFav = async (courseId, fav) => {
        if (!user) {
            toast.error('Need to login first.', {
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
            return;
        }
        try {
            const payload = {
                userId: user.id,
                courseId: courseId,
                fav: fav,
            };
            const url = `${baseUrl}/api/favourites/new`;
            const response = await axios.post(url, payload);

            toast.success(response.data.message, {
                style: {
                    border: '1px solid #42ba96',
                    padding: '16px',
                    color: '#42ba96',
                },
                iconTheme: {
                    primary: '#42ba96',
                    secondary: '#ffffff',
                },
            });
        } catch (err) {
            console.log(err.response);
        }
    };

    return (
        <>
            <div className='courses-area ptb-100'>
                <div className='container'>
                    <div className='section-title'>
                        <span className='sub-title'>Comece por aqui</span>
                        <h2>Não sabe por onde começar?</h2>
                        <p>
                            Conheça nossos cursos básicos para se tornar
                            sorveteiro. Garantimos que você não vai querer parar
                        </p>
                    </div>

                    <div className='row'>
                        {courses &&
                            courses.map((course) => (
                                <CourseCard
                                    key={course.id}
                                    {...course}
                                    onFav={() => handleFav(course.id, true)}
                                    onUnFav={() => handleFav(course.id, false)}
                                    userId={user && user.id}
                                />
                            ))}

                        <div className='col-lg-12 col-md-12'>
                            <div className='courses-info'>
                                <p>
                                    Se aprofunde em um tema ou explore todo o
                                    universo da sorveteria. Aqui você monta sua
                                    grade e escolher o que é melhor para o seu
                                    negócio{' '}
                                    {!user && (
                                        <Link href='/authentication'>
                                            <a>Register Free Now!</a>
                                        </Link>
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PopularCourses;
