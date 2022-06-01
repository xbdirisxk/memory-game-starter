import { useState } from "react";
import "../index.css";

import Homer from "../images/Homer.png";
import Bart from "../images/Bart.png";
import Marge from "../images/Marge.png";
import MrBurns from "../images/MrBurns.png";
import Lisa from "../images/Lisa.png";
import MoeSzyslak from "../images/Moe_Szyslak.png";
import NedFlanders from "../images/Ned_Flanders.png";
import WaylonSmithers from "../images/Waylon_Smithers.png";
import ApuNahasapeemapetilon from "../images/Apu_Nahasapeemapetilon.png";
import SideShowBob from "../images/C-bob.png";
import EdnaKrabappel from "../images/Edna_Krabappel.png";
import Krustytheclown from "../images/Krustytheclown.png";

const Game = () => {
  const [cards, setCards] = useState([
    { id: 1, name: "Homer Simpson", img: Homer, clicked: false },
    { id: 2, name: "Marge Simpson", img: Marge, clicked: false },
    { id: 3, name: "Bart Simpson", img: Bart, clicked: false },
    { id: 4, name: "Lisa Simpson", img: Lisa, clicked: false },
    { id: 5, name: "Mr. Burns", img: MrBurns, clicked: false },
    { id: 6, name: "Moe Szyslak", img: MoeSzyslak, clicked: false },
    { id: 7, name: "Ned Flanders", img: NedFlanders, clicked: false },
    {
      id: 8,
      name: "Apu Nahas.",
      img: ApuNahasapeemapetilon,
      clicked: false,
    },
    { id: 9, name: "SideShow Bob", img: SideShowBob, clicked: false },
    {
      id: 10,
      name: "Edna Krabappel",
      img: EdnaKrabappel,
      clicked: false,
    },
    {
      id: 11,
      name: "Krustytheclown",
      img: Krustytheclown,
      clicked: false,
    },
    {
      id: 12,
      name: "Waylon Smithers",
      img: WaylonSmithers,
      clicked: false,
    },
  ]);

  return <></>;
};

export default Game;
