import React from 'react';
import { secondsToHms } from '@/utils/helper';

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
    return (
        <li
            className={activeClass === id ? 'active' : ''}
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
