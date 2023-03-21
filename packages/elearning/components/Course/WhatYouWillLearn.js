import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';

const WhatYouWillLearn = ({ what_you_will_learn }) => {
    const { t } = useTranslation();
    const [isMounted, setIsMounted] = React.useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <>
            {isMounted && (
                <>
                    <h3>
                        {t('course-page-whatwillyoulearn', {
                            defaultValue: 'What will you learn',
                        })}
                    </h3>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: what_you_will_learn,
                        }}
                    ></div>
                </>
            )}
        </>
    );
};

export default WhatYouWillLearn;
