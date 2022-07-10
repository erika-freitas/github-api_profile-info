import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
  width: 100%;
  margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  gap: 8px;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  border-radius: 8px;
  border: 1px solid #ccc;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding: 8px;
  user-select: none;
  cursor: pointer;
  z-index: 999;
  background-color: white;

  &:focus {
    outline: none;
  }

  &.is-selected {
    border-bottom: 1px solid white;
  }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  padding: 12px;
  border: 1px solid #ccc;
  display: none;
  margin-top: -5px;

  &.is-selected{
    display: block
  }
`;

WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 16px;
`;