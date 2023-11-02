import { InfoBlockProps } from "../../models/models"


const InfoBlock = ({ title, body, phone, email, website, url }: InfoBlockProps) => {
  return (
    <section className="mb-4 py-3 pl-3 pr-10 border rounded-md bg-slate-50 hover:bg-slate-100 active:bg-slate-50">
      {title && <h2 className="font-semibold">{ title }</h2>}
      {body && <p className="mb-4">{ body }</p>}
      {phone && <p>Phone: { phone }</p>}
      {email && <p>Email: { email }</p>}
      {website && <p>Website: { website }</p>}
      {url && <img className="mx-auto" src={ url } width={400} height={400} alt={ title } />}
    </section>
  )
}

export { InfoBlock }