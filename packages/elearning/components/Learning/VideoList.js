import React, {useEffect} from 'react';
import {secondsToHms} from '@/utils/helper';

const VideoList = ({
                       id,
                       title,
                       short_id,
                       video_length,
                       onPlay,
                       activeClass,
                       onClick,
                       groupNames
                   }) => {

    useEffect(() => {

        if (short_id === 1) {
            onPlay(short_id)
            onClick(groupNames, true)
        }

    }, [])

    return (
        <li
            className={activeClass === id ? 'active' : ''}

            onBlur={() => {
                onPlay(id)
                onClick(groupNames, true)
            }}
            onClick={() => {
                onPlay(id)
                onClick(groupNames, true)
            }}
        >
            {short_id}. {title}
            <span className='d-block text-muted fs-13 mt-1 cursor-pointer-one'>
                <i className='bx bx-play-circle'></i>{' '}
                {secondsToHms(video_length)}
            </span>
        </li>
    );
};

export default VideoList;
