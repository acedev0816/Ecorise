import Select, { SelectProps } from "react-dropdown-select";
import Image from "next/image";
import { HTMLAttributes, useEffect, useState } from "react";
import styles from "./select.module.css";


const getSelectedLabels = (values: any[], options: any[]) => {
  const selOptions = options.filter(
    (v: any) => values.indexOf(v.value) !== -1
  );
  const selLabels = selOptions.map((v: any) => v.label);
  const ret = selLabels.join(", ");
  console.log(
    "getSelectedLabels: values, options, ret",
    values,
    options,
    ret
  );
  return ret;
};

type Props =  SelectProps<any>

const CustomSelect = ({options, multi, values, onChange, ...other}: Props) => {
  const [data, setData] = useState<any[]>([]);
  
  useEffect(()=> {
    setData(values);
  }, [values])

  return (
    <Select
      options={options}
      multi={multi}
      values={data}
      closeOnScroll={true}
      clearOnSelect={true}
      className={`${styles.select}`}
      onChange={(values) => {
        console.log("values", values);
        onChange(values);
      }}
      itemRenderer={({ item, methods }) => (
        <div
          className={`${styles.selectItem}`}
          onClick={() => {
            if (multi)
            {
              if (data.indexOf(item.value) === -1) {
                setData([...data, item.value]);
              } else {
                setData(data.filter((v: any) => v != item.value));
              }
            } else { // single
              methods.clearAll();
              methods.addItem(item.value);
              setData([item.value])
            }
          }}
        >
          <div className={`${styles.selectText}`}>{item.label}</div>
          {data.indexOf(item.value) != -1 && (
            <Image
              src="/checkmark.svg"
              alt="EcoRise"
              width={24}
              height={24}
              className={`${styles.selectLogo}`}
            />
          )}
        </div>
      )}
      contentRenderer={({ props: { values, options } }) => (
        <div className={`${styles.selectContent}`}>
          <div className={`${styles.selectText}`}>
            {values.length
              ? getSelectedLabels(values, options)
              : "Please select"}
          </div>
        </div>
      )}
      {...other}
    />
  );
};

export default CustomSelect;
