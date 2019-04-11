import React from 'react';
import classnames from 'classnames';
import './scroll-knapp.less';

interface ScrollKnappProps {
    className?: string;
}

function ScrollKnapp(props: ScrollKnappProps) {
    return (
        <button
            className={classnames('scroll-knapp', props.className)}
            aria-hidden="true"
            onClick={() => window.scrollTo(
                {top: document.body.scrollHeight, behavior: 'smooth'}
            )}
        />
    );
}

export default ScrollKnapp;