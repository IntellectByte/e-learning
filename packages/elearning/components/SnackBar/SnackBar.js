import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import styles from './SnackBar.module.css';
import baseUrl from '../../utils/baseUrl';
import axios from 'axios';

const SnackBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchRecommendedCourses = async () => {
            const response = await axios.get(
                `${baseUrl}/api/get-courses-recommend`
            );
            console.log(response);
            const data = response.data;
            setCourses(data.courses);
        };
        fetchRecommendedCourses();
    }, []);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleClose = (e) => {
        e.stopPropagation();
        setIsOpen(false);
    };

    return (
        <div
            className={`${styles.snackbarContainer} ${
                isOpen ? styles.snackbarContainerOpen : ''
            }`}
            onClick={handleToggle}
        >
            {isOpen ? (
                <div
                    className={styles.snackbarContent}
                    onClick={(e) => e.stopPropagation()}
                >
                    <h3 className={styles.header}>
                        Recommended Courses
                        <AiOutlineClose
                            onClick={handleClose}
                            style={{ marginLeft: 'auto', cursor: 'pointer' }}
                        />
                    </h3>
                    <div className={styles.courseList}>
                        {courses.map((course) => (
                            <div key={course.id} className={styles.courseItem}>
                                <img
                                    src={course.image}
                                    style={{ width: '50px' }}
                                />
                                <div className={styles.courseInfo}>
                                    <h4 className={styles.subtitleRecommends}>
                                        {course.title}
                                    </h4>
                                </div>
                                <button className={styles.buttonRecommends}>
                                    Add to Cart
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className={styles.snackbarCollapsed}>
                    Recommended Courses
                </div>
            )}
        </div>
    );
};

export default SnackBar;
