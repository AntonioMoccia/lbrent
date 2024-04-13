import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CarList`.
 */
export type CarListProps = SliceComponentProps<Content.CarListSlice>;

/**
 * Component for "CarList" Slices.
 */
const CarList = ({ slice }: CarListProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for car_list (variation: {slice.variation}) Slices
    </section>
  );
};

export default CarList;
