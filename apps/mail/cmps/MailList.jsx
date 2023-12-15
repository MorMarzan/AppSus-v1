const { Link } = ReactRouterDOM

import { MailPreview } from "../cmps/MailPreview.jsx";
// export function MailList({ mails, onRemoveMail }) {
export function MailList({ mails }) {

    if (!mails) return <div>Loading...</div>
    if (!mails.length) return <div>No mails match this search</div>
    return (
        <ul className="mail-list">

            {mails.map(mail =>
                <li key={mail.id}>
                    <Link
                        to={`/mail/inbox/${mail.id}`}>
                        <MailPreview mail={mail} />
                    </Link>
                </li>
            )}
        </ul>
    )
}
