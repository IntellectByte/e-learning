import baseUrl from '@/utils/baseUrl';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const FunFacts = () => {
    const [students, setStudents] = useState(0);
    const [enrolls, setEnrolls] = useState(0);
    const [instructors, setInstractors] = useState(0);
    const [courses, setCourses] = useState(0);

    useEffect(() => {
        const fethStats = async () => {
            const url = `${baseUrl}/api/funfacts`;
            const response = await axios.get(url);
            setStudents(response.data.students);
            setEnrolls(response.data.enrolments);
            setInstractors(response.data.instructors);
            setCourses(response.data.courses);
        };

        fethStats();
    }, []);
    return (
        <>
            <div className='funfacts-list'>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-6'>
                        <div className='single-funfacts-box'>
                            <h3>4500</h3>
                            <p>Alunos Formados</p>
                        </div>
                    </div>

                    <div className='col-lg-6 col-md-6 col-sm-6'>
                        <div className='single-funfacts-box'>
                            <h3>50+</h3>
                            <p>Horas de Conteúdos</p>
                        </div>
                    </div>

                    <div className='col-lg-6 col-md-6 col-sm-6'>
                        <div className='single-funfacts-box'>
                            <h3>10</h3>
                            <p>cursos e consultorias em 10+ países</p>
                        </div>
                    </div>

                    <div className='col-lg-6 col-md-6 col-sm-6'>
                        <div className='single-funfacts-box'>
                            <h3>5</h3>
                            <p>Cursos Disponíveis</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FunFacts;
