import Content from "../Content/Content";
import { SectionTitle, SectionWrapper } from "./styles";

function Section() {

  return (
    <SectionWrapper>
      <SectionTitle>Section Block</SectionTitle>
      <Content />
    </SectionWrapper>
  );
}


export default Section;

// import Content from "../Content/Content";
// import { SectionTitle, SectionWrapper } from "./styles";
// import { SectionProps } from "./types";

// function Section({ data }: SectionProps) {

//   return (
//     <SectionWrapper>
//       <SectionTitle>Section Block</SectionTitle>
//       <Content contentData={data} />
//     </SectionWrapper>
//   );
// }


// export default Section;