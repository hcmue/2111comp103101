import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";

export function TodoAppTimeline() {
    const { data } = useContext(TodoContext);

    return (
        <div style={{ backgroundColor: '#3da3d5' }}>
            <h2>TODO App Timeline</h2>
            <VerticalTimeline>
                {data.map((item) => {
                    return (
                        <VerticalTimelineElement
                            key={item.id}
                            date={item.deadline}
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                            contentStyle={{ color: "rgb(33, 150, 243)", background: "#fff" }}
                            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                            icon={item.isCompleted ? <SchoolIcon /> : <WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                {item.name}
                            </h3>
                            <h5 className="vertical-timeline-element-subtitle">
                                {item.deadline}
                            </h5>
                            {!item.isCompleted && (
                                <button style={{ padding: 9, margin: 3, backgroundColor: '#06d6a0', color: 'white' }}>
                                    Complete
                                </button>
                            )}
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>
        </div>
    );
};
