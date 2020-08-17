import React from "react";
import TextComponent from "../common/TextComponent";
import DropdownComponent from "../common/DropdownComponent";
import { getMockSortParams } from "../../models/mocks";

export interface SortingComponentProps {}

const SortingComponent = (props: SortingComponentProps) => {
  return (
    <div className="sortingSection">
      <TextComponent text="SORT BY" className="sortingLabel" />
      <DropdownComponent values={getMockSortParams()} />
    </div>
  );
};

export default SortingComponent;
