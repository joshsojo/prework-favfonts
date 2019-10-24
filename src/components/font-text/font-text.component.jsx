import styled from "styled-components";
const FontText = styled.p`
  @import url('${props => props.link}');
  font-family: '${props => props.font || "Open Sans"}', ${props =>
  props.category || "sans-serif"};
  font-size: ${props => props.size || 32}px;
  line-height: 1.1;
   display: block;
  display: -webkit-box;
      height: 141px;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
`;
export default FontText;
