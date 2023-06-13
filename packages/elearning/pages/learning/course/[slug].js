import React, {useEffect, useState} from 'react';
import Navbar from '@/components/_App/Navbar';
import Footer from '@/components/_App/Footer';
import StickyBox from 'react-sticky-box';
import Player from '@/components/Learning/Player';
import {useRouter} from 'next/router';
import baseUrl from '@/utils/baseUrl';
import axios from 'axios';
import VideoList from '@/components/Learning/VideoList';
import ProgressManager from '@/components/Learning/ProgressManager';
import CourseOverview from '@/components/Learning/CourseOverview';
import Link from 'next/link';
import CourseAsset from '@/components/Learning/CourseAsset';
import CourseDiscussion from '@/components/Learning/CourseDiscussion';
import CourseRating from '@/components/Learning/CourseRating';
import CourseFeedback from '@/components/Learning/CourseFeedback';
import SupportButton from '@/components/ContactUs/SupportBtn';
import TopBanner from '@/components/TopBanner/TopBanner';
import {redirectUser} from "@/utils/auth";
import App from "next/app";
import {progress} from "@/utils/helper";

const Index = ({user}) => {
    const [videos, setVideos] = useState([]);
    const [modules, setModules] = useState([]);
    const [groups, setGroups] = useState([]);
    const [course, setCourse] = useState({});
    const [selectedVideo, setSelectedVideo] = useState('');
    const [active, setActive] = useState('');
    const [tab, setTab] = useState('overview');
    const {
        query: {slug},
    } = useRouter();
    const router = useRouter()

    const fetchVideos = async () => {


        const url = `${baseUrl}/api/learnings/videos/${slug}`;
        const response = await axios.get(url);
        setVideos(response.data.videos);
        setSelectedVideo(response.data.videos[0].video);
        setActive(response.data.videos[0].id);
        setCourse(response.data.course);

        if (response.data.course.orderNumber > 1) {
            const url1 = `${baseUrl}/api/courses/course/find-one?orderNumber=${response.data.course.orderNumber - 1}`;
            const response1 = await axios.get(url1);
            const previousCourse = response1.data.course
            // console.log(previousCourse)

            const url2 = `${baseUrl}/api/learnings/progress?courseId=${previousCourse.id}&userId=${user.id}`;
            const response2 = await axios.get(url2);
            const previousCourseData = response2.data
            const previousCourseProgress = progress(previousCourseData.courseProgress.length, previousCourseData.totalVideos)
            if (previousCourseProgress < 100) {
                alert("No has terminado el curso anterior")
                router.push('/learning/my-courses/')
            }
            // console.log(response2.data)
        }

        // console.log(user, response.data.course)

    };

    ///TODO: logica para que los modulos sean correlativos (bloquear los siguientes a los que no estan terminados aun)


    useEffect(() => {
        const groups = videos.map(e => e.group_name)
        const hashset = new Set(groups)

        let i = 1

        const modulesVideos = [...hashset].map(mod => {
            return {
                group_name: mod,
                videos: videos.filter(e => e.group_name === mod),
                active: i === 1,
                index: i++
            }
        })
        setModules(modulesVideos)
<<<<<<< HEAD
    }

    useEffect(() => {

        const groups = videos.map(e => e.group_name)
        const hashset = new Set(groups)

        fetchProgresses([...hashset], false)
=======
>>>>>>> 09428ae47409e4dd3d68e4e01e21dd90c2bd3978
        // console.log(modulesVideos)
    }, [videos, modules]);

    useEffect(() => {
        fetchProgresses(groups, false)

    }, [modules]);



    useEffect(() => {
        if (!user) router.push('/')
        fetchVideos();
    }, [slug]);

    const selectVideo = async (videoId) => {
        // console.log(videoId);
        try {
            const payload = {
                params: {userId: user.id, courseId: course.id},
            };
            const url = `${baseUrl}/api/learnings/video/${videoId}`;
            const response = await axios.get(url, payload);
            const {
                data: {video},
            } = response;

            setSelectedVideo(video.video);
            setActive(video.id);

            // console.log(video);
        } catch (err) {
            console.log(err.response.data);
        }
    };

    return (<>
        <SupportButton/>

        <TopBanner/>

        <Navbar user={user}/>

        <div className='mt-5 pb-5 video-area'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-9 col-md-8'>
                        <div className='video-content'>
                            {selectedVideo && (<Player videoSrc={selectedVideo}/>)}

                            <br/>
                            <ul className='nav-style1'>
                                <li>
                                    <Link href={`/learning/course/${slug}`}>
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setTab('overview');
                                            }}
                                            className={tab == 'overview' ? 'active' : ''}
                                        >
                                            Overview
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={`/learning/course/${slug}`}>
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setTab('asset');
                                            }}
                                            className={tab == 'asset' ? 'active' : ''}
                                        >
                                            Assets
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={`/learning/course/${slug}`}>
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setTab('discussion');
                                            }}
                                            className={tab == 'discussion' ? 'active' : ''}
                                        >
                                            Discussion
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={`/learning/course/${slug}`}>
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setTab('rating');
                                            }}
                                            className={tab == 'rating' ? 'active' : ''}
                                        >
                                            Leave a rating
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={`/learning/course/${slug}`}>
                                        <a
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setTab('feedback');
                                            }}
                                            className={tab == 'feedback' ? 'active' : ''}
                                        >
                                            Leave a feedback
                                        </a>
                                    </Link>
                                </li>
                            </ul>

                            {course && tab == 'asset' ? (<CourseAsset {...course} />) : tab == 'discussion' ? (
                                <CourseDiscussion {...course} />) : tab == 'rating' ? (
                                <CourseRating {...course} />) : tab == 'feedback' ? (<CourseFeedback {...course} />) : (
                                <CourseOverview {...course} />)}
                        </div>
                    </div>

                    <div className='col-lg-3 col-md-4'>
                        <StickyBox offsetTop={20} offsetBottom={20}>
                            <div className='video-sidebar'>
                                <ProgressManager
                                    videos_count={videos.length}
                                    userId={user && user.id}
                                    courseId={course.id}
                                    selectedVideo={selectedVideo}
                                />

                                <div className='course-video-list'>

                                    <h4 className='title center text-bg-info mb-5'>
                                        {course && course.title}
                                    </h4>

                                    {videos.length > 0 && modules.length > 0 && modules.map(e => (
                                        <div className='course-video-list'>
                                            <h4 className='title mb-3'>
                                                {e && e.group_name}
                                            </h4>
                                            <ul style={{cursor: 'pointer'}}>

                                                {e.videos.map(video => (<VideoList
                                                    onClick={fetchProgresses}
                                                    groupNames={modules.map(e => e.group_name)}
                                                    key={video.id}
                                                    {...video}
                                                    onPlay={() => selectVideo(video.id)}
                                                    activeClass={active}
                                                />))}


                                            </ul>
                                        </div>))}
                                </div>
                            </div>
                        </StickyBox>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </>);
};

export default Index;
