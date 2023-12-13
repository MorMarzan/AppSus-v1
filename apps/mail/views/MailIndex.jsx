
// export function MailIndex() {
//     return <div>Mister Email</div>
// }

const { Link, useSearchParams } = ReactRouterDOM

// import { MailFilter } from "../cmps/MailFilter.jsx"
import { MailList } from "../cmps/MailList.jsx"
// import { DataTable } from "../cmps/data-table/DataTable.jsx"
import { mailService } from "../../mail/services/mail.service.js"
import { MailHeader } from "../cmps/MailHeader.jsx"
// import { mailService } from "../services/mail.service.js"
// import { showSuccessMsg } from "../services/event-bus.service.js"

const { useState, useEffect } = React

export function MailIndex() {
    const [mails, setMails] = useState(null)
    // const [searchParams, setSearchParams] = useSearchParams()
    // const [filterBy, setFilterBy] = useState(mailService.getFilterFromQueryString(searchParams))

    useEffect(() => {
        loadMails()
        // setSearchParams(filterBy)
    }, [])
    // }, [filterBy])

    function loadMails() {
        mailService.query()
        // mailService.query(filterBy)
            .then(setMails)
            .catch(err => console.log('err:', err))
    }

    // function onRemoveMail(mailId) {
    //     mailService.remove(mailId)
    //         .then(() => {
    //             // const newMails = mails.filter(mail => mail.id !== mailId)
    //             // setMails(newMails)
    //             setMails(prevMails => {
    //                 return prevMails.filter(mail => mail.id !== mailId)
    //             })
    //             showSuccessMsg(`Mail successfully removed! ${mailId}`)
    //         })
    //         .catch(err => console.log('err:', err))

    // }


    // function onSetFilter(filterBy) {
    //     // setFilterBy(filterBy)
    //     setFilterBy(prevFilter => ({ ...prevFilter, ...filterBy }))

    // }

    // const { txt, minSpeed, maxPrice } = filterBy

    if (!mails) return <div>Loading...</div>
    return (
        <section className="mail-index page main-layout full">
            <div>
            <MailHeader />
            {/* <div>Mister Email</div> */}
            {/* <MailFilter filterBy={{ txt, minSpeed }} onSetFilter={onSetFilter} /> */}
            <MailList mails={mails}/>
            {/* <MailList mails={mails} onRemoveMail={onRemoveMail} /> */}
            {/* <DataTable mails={mails}/> */}
            </div>
        </section>
    )
}

