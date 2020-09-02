import React, { ChangeEvent } from "react";
import Text from "../common/Text";
import Dropdown from "../common/Dropdown";
import { getMockSortParams } from "../../models/mocks";

export interface SortingProps {
  onSortingValueChanged: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Sorting = (props: SortingProps) => {
  return (
    <div className="sortingSection">
      <Text text="SORT BY" className="sortingLabel" />
      <Dropdown
        values={getMockSortParams()}
        onDropdownValueChanged={props.onSortingValueChanged}
      />
    </div>
  );
};

export default Sorting;
