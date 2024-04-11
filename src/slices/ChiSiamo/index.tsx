import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ChiSiamo`.
 */
export type ChiSiamoProps = SliceComponentProps<Content.ChiSiamoSlice>;

/**
 * Component for "ChiSiamo" Slices.
 */
const ChiSiamo = ({ slice }: ChiSiamoProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for chi_siamo (variation: {slice.variation}) Slices
    </section>
  );
};

export default ChiSiamo;
