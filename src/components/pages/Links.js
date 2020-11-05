import React, { useState } from 'react'
import ContactLink from '../contactLink'

function Links() {
    const [ContactState, setContactState] = useState([

        {
            link: "https://github.com/jourdancase1",
            icon: "fab fa-github-square",
            text: "Github"
        },
        {
            link: "https://www.linkedin.com/in/jourdan-case",
            icon: "fab fa-linkedin",
            text: "linkedIn"
        },
        {
            link: "mailto:jourdancase11@gmail.com",
            icon: "fas fa-envelope",
            text: "jourdancase11@gmail.com"
        }
    ])
    return (
        
        ContactState.map(contact => (
            
            <ContactLink
            link={contact.link}
            icon={contact.icon}
            text={contact.text} />
            
            ))
    )
}

export default Links;
// budget tracker: 'https://obscure-sea-21560.herokuapp.com/'
// employee directory: "https://jourdancase1.github.io/Employee-Directory/"
// fitness tracker: "https://calm-hollows-35671.herokuapp.com/"