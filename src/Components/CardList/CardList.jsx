import './CardList.css'

export default function CardList(props) {
  return (
        <section className= {props.cardStyle}>
            <h1>{props.header}</h1>
            <p>{props.paragraph1}</p>
            <p>{props.paragraph2}</p>
            <img src={props.img} alt="Not Found" />
        </section>
  )
}