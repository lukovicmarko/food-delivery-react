import React from 'react'

const TabButtons = ({ buttons, changeTab, activeTab }) => {
    return (
        <div className="tab-buttons">
            {buttons.map((button, index) => {
                return <button
                    className={button === activeTab ? 'tab-button active-tab' : 'tab-button'}
                    onClick={() => changeTab(button)}
                    key={index}
                >
                    {button}
                </button>
            })}
        </div>
    )
}

export default TabButtons
