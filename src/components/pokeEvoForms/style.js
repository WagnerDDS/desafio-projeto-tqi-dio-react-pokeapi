import styled from "styled-components";
import { Tab, Tabs, TabPanel, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export const pokeEvoFormsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

export const myTab = styled(Tab)`
  border-radius: 16px;
  border: 1px solid #ccc;
  padding: 16px;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  background-color: "#fff";
  margin: 8px;
  &:focus {
    outline: none;
  }
  &.is-selected {
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
  }
`;
myTab.tabsRole = "Tab";

export const myTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`;

export const myTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
`;
myTabList.tabsRole = "TabList";

export const myTabPanel = styled(TabPanel)`
  padding: 16px;
  border: 1px solid "#ccc";
  display: none;
  margin-top: -5px;
  &.is-selected {
    display: block;
  }
`;
myTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
