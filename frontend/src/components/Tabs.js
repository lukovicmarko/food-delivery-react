import React, { useState } from 'react';
import TabButtons from './TabButtons';

const Tabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);

    const changeTab = tab => {
        setActiveTab(tab);
    };

    let content;
    let buttons = [];
    return (
        <div>
            {React.Children.map(children, child => {
                buttons.push(child.props.label)
                if (child.props.label === activeTab) content = child.props.children
            })}

            <TabButtons activeTab={activeTab} buttons={buttons} changeTab={changeTab} />
            <div className="tab-content">{content}</div>

        </div>
    )
}

export default Tabs
