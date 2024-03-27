import styles from './ContactList.module.scss'
import Contact from '../../components/Contact/Contact'
 
export default function ContactList ({ 
    user,
    contacts,
    userId,
    deleteContact
}){
    const userContacts = contacts.map(contact =>
        <Contact
            key={contact._id}
            user={user}
            contact={contact}
            deleteContact={deleteContact}
        />
    )

    return(
        contacts ?
    <div>
        <h3>Contacts List</h3>
        {userContacts}
        </div>
        :
        <h3>No Contacts Yet!</h3>
        ) 
    }

