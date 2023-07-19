// // EXTERNAL IMPORTS
// import React, { useState, useEffect } from 'react';

// // INTERNAL IMPORTS
// import Navbar from '@/components/_App/Navbar';
// import MainBanner from '@/components/eLearningSchool/MainBanner';
// import Features from '@/components/eLearningSchool/Features';
// import AboutUs from '@/components/eLearningSchool/AboutUs';
// import PopularCourses from '@/components/eLearningSchool/PopularCourses';
// import GetInstantCourses from '@/components/eLearningSchool/GetInstantCourses';
// import ViewAllCourses from '@/components/eLearningSchool/ViewAllCourses';
// import SubscribeForm from '@/components/Common/SubscribeForm';
// import Footer from '@/components/_App/Footer';
// import baseUrl from '@/utils/baseUrl';
// import PopUp from '@/components/PopUp/PopUp';
// import SupportButton from '@/components/ContactUs/SupportBtn';
// import TopBanner from '@/components/TopBanner/TopBanner';
// import FunFacts from '@/components/eLearningSchool/FunFacts';
// import lulz from '@/components/lulz';

// function Index({ courses, user }) {
//     const [showPopup, setShowPopup] = useState(false);

//     useEffect(() => {
//         const timeout = setTimeout(() => {
//             if (!sessionStorage.getItem('popupShown')) {
//                 setShowPopup(true);
//                 sessionStorage.setItem('popupShown', true);
//             }
//         }, 30000);

//         return () => clearTimeout(timeout);
//     }, []);

//     const handleClosePopup = () => {
//         setShowPopup(false);
//     };

//     return (
//         <>
//             {/* POP UP HOME, DISCOUNT CODE FORM */}
//             {showPopup && <PopUp onClose={handleClosePopup} />}

//             {/* TOP BANNER */}
//             <TopBanner />

//             {/* WHATSAPP BUTTON */}
//             <SupportButton />

//             {/* NAVBAR */}
//             <Navbar user={user} />

//             {/* MAINBANNER */}
//             <MainBanner user={user} courses={courses} />

//             {/* CARDS WITH INFO */}
//             <Features />

//             {/* PIC SLIDER */}
//             <AboutUs />

//             {/* POPULAR COURSES */}
//             <PopularCourses user={user} />

//             {/* EXPERIMENTAL CLASS FORM */}
//             <GetInstantCourses user={user} />

//             {/* IN THE MEDIA */}
//             <ViewAllCourses />

//             {/* +1500 STUDENTS */}
//             <FunFacts />

//             {/* NEWSLETTER SUBS */}
//             <SubscribeForm />

//             {/* FOOTER */}
//             <Footer />
//         </>
//     );
// }

// export async function getServerSideProps() {
//     const res = await fetch(`${baseUrl}/api/home-banner`);
//     const { courses } = await res.json();

//     return { props: { courses } };
// }

// export default Index;
import React from 'react';
import styles from './lulz.module.css';

const index = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100vh',
                backgroundColor: 'black',
            }}
        >
            <h1
                style={{
                    color: 'red',
                    fontSize: '84px',
                    textDecoration: 'underline',
                    fontWeight: 'bolder',
                    textAlign: 'center',
                    marginBottom: '40px',
                    marginTop: '70px',
                }}
            >
                Percorremos todos os sites do Brasil, entre em contato para
                conversarmos
            </h1>
            <span
                style={{
                    fontSize: '34px',
                    color: 'white',
                    textDecoration: 'wavy',
                    marginBottom: '15px',
                    marginTop: '-20px',
                }}
            >
                LulzSec - 'Às vezes é melhor negociar para não chorar'
            </span>
            <div className={styles.pepe}>
                <p style={{ color: 'transparent' }}>
                    {' '}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    minima non animi obcaecati molestias! Reprehenderit beatae
                    quam officia nulla. Molestiae animi impedit ratione harum
                    consequatur eligendi dignissimos soluta consectetur eveniet.
                    Eaque nobis obcaecati consequatur eos quisquam asperiores
                    rerum at, voluptatum incidunt dignissimos distinctio! Porro
                    hic id ex architecto doloremque ad repellendus, molestiae
                    similique voluptas, culpa earum quis ipsum perferendis
                    nesciunt! Repellendus quo voluptatibus aliquam totam quod
                    velit placeat dignissimos hic dolorum sit voluptas, et ipsum
                    officia aperiam numquam est doloribus facere aliquid illum
                    optio sapiente quasi fugiat reiciendis! Laudantium, hic.
                    Quod saepe voluptatum similique dolores aut ea rem voluptas
                    omnis dolorum quidem qui, amet, accusantium sequi provident
                    nostrum magnam ipsa. Excepturi similique quidem enim
                    laudantium culpa est ex accusantium eos. Nobis provident
                    aspernatur optio possimus autem enim, corporis minima?
                    Pariatur tenetur nulla doloribus fugiat aperiam perspiciatis
                    expedita, sequi repudiandae incidunt corrupti blanditiis,
                    asperiores accusamus magnam voluptatum illo distinctio vitae
                    veniam! Quis delectus consectetur, sunt libero aliquid
                    perspiciatis deserunt ea quisquam illo minima.
                    Exercitationem dolorum inventore error blanditiis rerum
                    atque! Cum et libero architecto consequuntur ab illum Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Sed
                    minima non animi obcaecati molestias! Reprehenderit beatae
                    quam officia nulla. Molestiae animi impedit ratione harum
                    consequatur eligendi dignissimos soluta consectetur eveniet.
                    Eaque nobis obcaecati consequatur eos quisquam asperiores
                    rerum at, voluptatum incidunt dignissimos distinctio! Porro
                    hic id ex architecto doloremque ad repellendus, molestiae
                    similique voluptas, culpa earum quis ipsum perferendis
                    nesciunt! Repellendus quo voluptatibus aliquam totam quod
                    velit placeat dignissimos hic dolorum sit voluptas, et ipsum
                    officia aperiam numquam est doloribus facere aliquid illum
                    optio sapiente quasi fugiat reiciendis! Laudantium, hic.
                    Quod saepe voluptatum similique dolores aut ea rem voluptas
                    omnis dolorum quidem qui, amet, accusantium sequi provident
                    nostrum magnam ipsa. Excepturi similique quidem enim
                    laudantium culpa est ex accusantium eos. Nobis provident
                    aspernatur optio possimus autem enim, corporis minima?
                    Pariatur tenetur nulla doloribus fugiat aperiam perspiciatis
                    expedita, sequi repudiandae incidunt corrupti blanditiis,
                    asperiores accusamus magnam voluptatum illo distinctio vitae
                    veniam! Quis delectus consectetur, sunt libero aliquid
                    perspiciatis deserunt ea quisquam illo minima.
                    Exercitationem dolorum inventore error blanditiis rerum
                    atque! Cum et libero architecto consequuntur ab illum Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Sed
                    minima non animi obcaecati molestias! Reprehenderit beatae
                    quam officia nulla. Molestiae animi impedit ratione harum
                    consequatur eligendi dignissimos soluta consectetur eveniet.
                    Eaque nobis obcaecati consequatur eos quisquam asperiores
                    rerum at, voluptatum incidunt dignissimos distinctio! Porro
                    hic id ex architecto doloremque ad repellendus, molestiae
                    similique voluptas, culpa earum quis ipsum perferendis
                    nesciunt! Repellendus quo voluptatibus aliquam totam quod
                    velit placeat dignissimos hic dolorum sit voluptas, et ipsum
                    officia aperiam numquam est doloribus facere aliquid illum
                    optio sapiente quasi fugiat reiciendis! Laudantium, hic.
                    Quod saepe voluptatum similique dolores aut ea rem voluptas
                    omnis dolorum quidem qui, amet, accusantium sequi provident
                    nostrum magnam ipsa. Excepturi similique quidem enim
                    laudantium culpa est ex accusantium eos. Nobis provident
                    aspernatur optio possimus autem enim, corporis minima?
                    Pariatur tenetur nulla doloribus fugiat aperiam perspiciatis
                    expedita, sequi repudiandae incidunt corrupti blanditiis,
                    asperiores accusamus magnam voluptatum illo distinctio vitae
                    veniam! Quis delectus consectetur, sunt libero aliquid
                    perspiciatis deserunt ea quisquam illo minima.
                    Exercitationem dolorum inventore error blanditiis rerum
                    atque! Cum et libero architecto consequuntur ab illum
                </p>
            </div>
            <button
                style={{
                    padding: '30px 60px',
                    fontSize: '30px',
                    backgroundColor: 'red',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginBottom: '50px',
                }}
            >
                <a
                    href='mailto:0x83be98509aba251f8a167cc176f42dba47737d60@ethermail.io'
                    target='_blank'
                    style={{
                        textDecoration: 'none',
                        color: 'white',
                    }}
                >
                    Contate-nos
                </a>
            </button>
        </div>
    );
};

export default index;
