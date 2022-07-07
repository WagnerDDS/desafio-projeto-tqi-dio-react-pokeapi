import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PokeMoves from "../pokeMoves";
import PokeSprites from "../pokeSprites";
//import * as S from "./style";

function PokeEvoForms() {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Sprites</Tab>
          <Tab>Moves</Tab>
        </TabList>
        <TabPanel>
          <PokeSprites />
        </TabPanel>
        <TabPanel>
          <PokeMoves />
        </TabPanel>
      </Tabs>
    </>
  );
}

export default PokeEvoForms;
