import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';
import { VerticalTimeline, VerticalTimelineElement, WorkIcon, SchoolIcon, StarIcon } from 'react-horizontal-timeline';
import 'react-vertical-timeline-component/style.min.css';
import HorizontalTimeline from 'react-horizontal-timeline';
import * as R from 'ramda';

export function TodoAppTimeline() {
    const { data } = useContext(TodoContext);
    const VALUES = [];
    data.forEach((item) => {
        VALUES.push(R.prop('deadline', item));
    });
    console.log(VALUES);
    const [state, setState] = useState({ value: 0, previous: 0 });
    return (
        <div>
            <div>react-horizontal-timeline: TEST</div>
            <div>HorizontalTimeline</div>
            <div style={{ width: '60%', height: '100px', margin: '0 auto' }}>
                <HorizontalTimeline
                    index={state.value}
                    indexClick={(index) => {
                        setState({
                            ...state,
                            value: index,
                            previous: state.value
                        });
                    }}
                    values={VALUES} />
            </div>
        </div>
    );
};
