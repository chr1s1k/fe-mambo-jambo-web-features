import clsx from "clsx"
import { PropsWithChildren } from "react"
import "./Card.css"

type Props = {
  title: string
  imageSrc: string
  className?: string
}

export default function Card({ children, title, imageSrc, className }: PropsWithChildren<Props>) {
  return (
    <article className={clsx("card", className)}>
      <h2 className="card__title">{title}</h2>
      <img src={imageSrc} alt="" className="card__image" width={360} height={240} />
      <p className="card__description">{children}</p>
    </article>
  )
}
