import "./PropsList.css";
import CardList from "../CardList/CardList";
import SupervisorIcon from "/assets/Images/icon-supervisor.svg";
import TeamIcon from "/assets/Images/icon-team-builder.svg";
import KarmaIcon from "/assets/Images/icon-karma.svg";
import CalculatorIcon from "/assets/Images/icon-calculator.svg";

export default function PropsList() {
  let GroupOfCardsInfo = [
    {
      id: 1,
      header: "Supervisor",
      paragraph1: "Monitors activity to identify project",
      paragraph2: "roadblocks",
      img: SupervisorIcon,
      className: "CardOne",
    },
    {
      id: 2,
      header: "Team Builder",
      paragraph1: "Scans our talent network to create the",
      paragraph2: "optimal team for your project",
      img: TeamIcon,
      className: "CardTwo",
    },
    {
      id: 3,
      header: "Karma",
      paragraph1: "Regularly evaluates our talent to ensure",
      paragraph2: "quality",
      img: KarmaIcon,
      className: "CardThree",
    },
    {
      id: 4,
      header: "Calculator",
      paragraph1: "Uses data from past projects to provide",
      paragraph2: "better delivery estimates",
      img: CalculatorIcon,
      className: "CardFour",
    },
  ];

  return (
    <div id="CardsContainer">
      {GroupOfCardsInfo.map((CardInfo) => {
        return (
          <CardList
            key={CardInfo.id}
            header={CardInfo.header}
            paragraph1={CardInfo.paragraph1}
            paragraph2={CardInfo.paragraph2}
            img={CardInfo.img}
            cardStyle={CardInfo.className}
          />
        );
      })}
    </div>
  );
}
