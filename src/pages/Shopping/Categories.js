import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Categories.css'
import ReactTooltip from "react-tooltip";
export default function Categories({ icon, text, selectedCategory, setSelectedCategory }) {

 

    const categoryItems = [
        {
            id: 0,
            text: 'Foods',
            icon: <i className="fas fa-tachometer-alt fa-fw me-3" />,
            subItems: [{
                id: 0,
                text: 'Cips',
                icon: <i className="fas fa-tachometer-alt fa-fw" />,
            },
            {
                id: 1,
                text: 'Nuts',
                icon: <i className="fas fa-tachometer-alt fa-fw" />,
            },
            {
                id: 2,
                text: 'Gofret',
                icon: <i className="fas fa-tachometer-alt fa-fw" />,
            }
            ]
        },
        {
            id: 1,
            text: 'Drinks',
            icon: <i className="fas fa-chart-area fa-fw me-3" />,
            subItems: [{
                id: 3,
                text: 'Water',
                icon: <i className="fas fa-tachometer-alt fa-fw" />,
            },
            {
                id: 4,
                text: 'Mineral Water',
                icon: <i className="fas fa-tachometer-alt fa-fw" />,
            },
            {
                id: 5,
                text: 'Energy Drinks',
                icon: <i className="fas fa-tachometer-alt fa-fw" />,
            }
            ]
        },
        {
            id: 2,
            text: 'Backery',
            icon: <i class="fas fa-solid fa-bread-slice me-3" />,
            subItems: []
        }
    ]

    return (
        <div>
            <div className="accordion" id="accordionExample">
                {

                    categoryItems.map((item, index) => {
                        return (
                            <div key={`${item.text}_${item.id}`}
                                style={{ cursor: 'pointer' }}
                                className="accordion-item"
                            >
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#categoryId_${item.id}`}
                                        aria-expanded="false"
                                        aria-controls={`categoryId_${item.id}`}
                                    >
                                        {item.icon} {item.text}
                                    </button>
                                </h2>

                                
                                <div
                                    id={`categoryId_${item.id}`}
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        {item.subItems.map((subItem, subIndex) => (
                                            <div id="truncated-text" 
                                            key={`${subItem.text}_${subItem.id}`}
                                                style={{ cursor: 'pointer' }}
                                                className={`list-group-item list-group-item-action py-2 ripple ${subItem.id === selectedCategory ? "active" : ""} `}
                                                onClick={() => setSelectedCategory(subItem.id)}
                                            >
                                                <span className='px-4'>{subItem.icon}</span>
                                                <span title={subItem.text}>{subItem.text}</span>
                                                </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    // categoryItems.map((item, index) => {
                    //     return (


                    //         <div key={`${item.text}_${item.id}`}
                    //             style={{ cursor: 'pointer' }}
                    //             className={`list-group-item list-group-item-action py-2 ripple ${item.id === selectedCategory ? "active" : ""}`}
                    //             onClick={() => setSelectedCategory(item.id)}>
                    //             {item.icon}
                    //             <span>{item.text}</span>
                    //         </div>
                    //     )
                    // return (
                    //     <Link key={`${item.text}_${index}`} to={item.to}
                    //         className={`list-group-item list-group-item-action py-2 ripple ${index === currentIndex ? "active" : ""}`}
                    //         onClick={() => setCurrentIndex(index)}>
                    //         {item.icon}
                    //         <span>{item.text}</span>
                    //     </Link>
                    // )
                }
            </div>
        </div>
    )
}
