import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
/* import BannerCourses from './BannerCourses'; */
import { useTranslation } from "next-i18next";
import { useSelector, useDispatch } from "react-redux";
import { Pricing } from "react-pricing";
import styles from "../../components/SubscribePlan/SubscribePlanComponent.module.css";
import { useRouter } from "next/router";
import axios from "axios";
import baseUrl from "@/utils/baseUrl";

const MainBanner = ({ user, courses }) => {
  const { t } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const router = useRouter();
  const [subs, setSubs] = useState(null);

  let [yr, setYr] = useState({
    xpathResult1: "",
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  function fetchData() {
    axios
      .get(`${baseUrl}/api/subscriptions`)
      .then((res) => {
        setSubs(res.data);
        // console.log(subs)
      })
      .catch((err) => console.error("Error fetching data:", err));
  }

  useEffect(() => {
    fetchData();
    // Clean up function (optional)
    return () => {
      setSubs(null);
    };
  }, []);

  useEffect(() => {
    setIsMounted(true);

    setTimeout(() => {
      getElementsWithXPath();
    }, 1200);
    // Check if the element was found

    setTimeout(() => {
      if (yr.xpathResult1.singleNodeValue) {
        // Access the element
        const element = yr.xpathResult1.singleNodeValue;
        const spans = Array.from(element.querySelectorAll("div span")).map(
          (e) => {
            if (e.innerHTML === " / yr") {
              return e;
            }
          }
        );

        for (const span of spans) {
          if (span) {
            span.innerHTML = "/ano";
          }
        }
      } else {
        console.log("Element not found.");
      }
    }, 1600);
  }, []);

  function getElementsWithXPath() {
    yr = {
      xpathResult1: document.evaluate(
        '//*[@id="__next"]/div[4]/div/div',
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ),
    };
  }

  const subscribePlan1 = (sub) => {
    console.log(sub);

    const planObj = {
      id: sub.id,
      title: sub.title,
      slug: sub.slug,
      price: sub.price,
      image: sub.image,
      duration: sub.duration,
      quantity: 1,
      hotmartId: "bwwp449q",
      instructor: sub.instructor,
      discount: 0,
      type: sub.type,
    };

    dispatch({
      type: "RESET_CART",
    });

    dispatch({
      type: "ADD_TO_CART",
      data: planObj,
    });

    router.push("/checkout");
  };

  const alreadySubscribe = cartItems.some((item) => {
    return item.slug === "subscription-plan";
  });

  return (
    <>
      {isMounted && (
        <div className="main-banner">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="main-banner-content">
                  <h1>
                    {t("main-banner-title", {
                      defaultValue: "The easiest way to make real ice cream.",
                    })}
                  </h1>
                  <p>
                    {t("main-banner-text", {
                      defaultValue:
                        "Entrepreneurial practical and technical training to teach you how to produce natural and artisanal ice creams from scratch, valuing Brazilian regionalities and teaching you to have autonomy in your business.",
                    })}
                  </p>

                  <motion.div whileTap={{ scale: 0.9 }}>
                    {user ? (
                      <Link href="/courses">
                        <a className="default-btn">
                          <i className="flaticon-user"></i>{" "}
                          {t("main-banner-button-one", {
                            defaultValue: "Access your free class",
                          })}{" "}
                          <span></span>
                        </a>
                      </Link>
                    ) : (
                      <Link href="/authentication">
                        <a className="default-btn">
                          <i className="flaticon-user"></i>{" "}
                          {t("main-banner-button-two", {
                            defaultValue: "Join for free",
                          })}{" "}
                          <span></span>
                        </a>
                      </Link>
                    )}
                  </motion.div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="d-flex">
                  <div className="col-md-6">
                    <div>
                      <div className={styles.wrapper}>
                        <h2>
                          {/*  {t('subcomponent-h2', {
              defaultValue: 'Subscribe to our plans',
            })} */}
                          <br />
                        </h2>
                        <br />

                        {subs && (
                          <div className={styles["pricing-table"]} style={{flexWrap:"nowrap"}}>
                            {subs.slice(0, 2).map((sub) => (
                              <Pricing
                                id="custom-pricing-component"
                                data={sub.perks}
                                price={sub.price}
                                duration="ano"
                                background={sub.background}
                                shadow="#F5BCD7"
                                currency="R$"
                                buttonContent={
                                  alreadySubscribe ? (
                                    <a onClick={() => router.push("/checkout")}>
                                      {t("subcomponent-already-subscribe", {
                                        defaultValue: "View My Subscription",
                                      })}
                                    </a>
                                  ) : (
                                    <a onClick={() => subscribePlan1(sub)}>
                                      {t("subcomponent-subscribe-btn", {
                                        defaultValue: "INSCREVER",
                                      })}
                                    </a>
                                  )
                                }
                                priceText="Até 10x"
                                headerText={sub.slug}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className='col-lg-6 col-md-12'>
                                <div className='main-banner-courses-list'>
                                    <div className='row'>
                                        {courses &&
                                            courses.map((course) => (
                                                <BannerCourses
                                                    key={course.id}
                                                    {...course}
                                                />
                                            ))}
                                    </div>

                                    <div className='banner-shape1'>
                                        <img
                                            src='/sorvete-logo.png'
                                            alt='image'
                                            className='navbar-logo shape-moving'
                                        />
                                    </div>
                                    <div className='banner-shape2'>
                                        <img
                                            src='/sorvete-logo.png'
                                            alt='image'
                                            className='navbar-logo shape-moving'
                                        />
                                    </div>
                                </div>
                            </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MainBanner;
