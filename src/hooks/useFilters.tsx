import { useEffect, useRef, useState } from "react";
import {isEqual} from 'lodash'
export const useFilters = (initialState: { filtersDef: any; items: any[] }) => {
  const [filters, setFilters] = useState(initialState.filtersDef);
  const [data, setData] = useState(initialState.items);

  const validate = () => {
    if (!filters) {
      return;
    }
    let initial = Object.assign(initialState.items);

    filters.forEach((filter: any) => {
      initial = initial.filter((item: any) => {
        return filter.validator(item, filter.value);
      });
    });
      return initial;

  };

  const handleFilterChange = (
    field: string,
    fn: (initalFieldValue: any) => any
  ) => {




     let temp = filters.map((filter:any) => {
      if (filter.field == field) {
        
        filter.value = fn(filter.value);
        return filter;
      }
      return filter;
    });

    setFilters(temp);
    return temp

  };
  useEffect(() => {
    setData(validate())
  }, [filters]);

  return {
    handleFilterChange,
    filters: filters,
    data: data,
  };
};



/**
 * 
 *   

return

        <SearchBar
          onSearchChange={(e) => {
            handleFilterChange(e.target.name, (initalFieldValue: any) => {
              return (initalFieldValue = e.target.value);
            });
          }}
        />
        <fieldset>
          <div>
            <input
              onChange={(e) => {
                handleFilterChange(e.target.name, (initalFieldValue: any) => {
                  return (initalFieldValue = e.target.checked);
                });
              }}
              type="checkbox"
              name="neopatentati"
              id="neopatentati"
            />
            <label htmlFor="neopatentati">neopatentati</label>
          </div>
        </fieldset>


 */
