import React from "react";
import Text from "../common/Text";
import Dropdown from "../common/Dropdown";
import { getMockSortParams } from "../../models/mocks";

export interface SortingProps {}

const Sorting = (props: SortingProps) => {
  return (
    <div className="sortingSection">
      <Text text="SORT BY" className="sortingLabel" />
      <Dropdown values={getMockSortParams()} />
    </div>
  );
};

export default Sorting;
