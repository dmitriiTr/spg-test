"use client";
import React, { useState } from "react";
import SelectInput, {
  components,
  PlaceholderProps,
  SingleValueProps,
  Props,
} from "react-select";
import AnimatedContent from "../animatedContent";
import styles from "./index.module.scss";

type Options = { value: string; label: string };

export default function Select(props: Props<Options, false>) {
  const [selectedOption, setSelectedOption] = useState<Options | null>(null);

  return (
    <SelectInput
      {...props}
      instanceId="uniqueId"
      components={{
        SingleValue: (props: SingleValueProps<Options>) => (
          <components.SingleValue {...props}>
            <AnimatedContent>{props.children}</AnimatedContent>
          </components.SingleValue>
        ),
        Placeholder: (props: PlaceholderProps<Options>) => (
          <components.Placeholder {...props}>
            <AnimatedContent>{props.children}</AnimatedContent>
          </components.Placeholder>
        ),
        IndicatorSeparator: () => <div />,
      }}
      isClearable={false}
      isSearchable={false}
      defaultValue={selectedOption}
      onChange={setSelectedOption}
      isMulti={false}
      classNames={{
        control: () => styles.control,
        placeholder: () => styles.placeholder,
        singleValue: () => styles.singleValue,
        container: () => styles.container,
        indicatorsContainer: () => styles.indicatorContainer,
      }}
    />
  );
}
