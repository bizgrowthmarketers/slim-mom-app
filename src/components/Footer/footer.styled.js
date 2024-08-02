// footer.styled.js
import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
  font-size: 14px;
  border-top: 1px solid #444;

  a {
    color: #FC842D; /* Initial color of the link */
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease; /* Smooth color transition */

    &:hover {
      color: #FC842D; /* Color of the link on hover */
      text-decoration: underline; /* Optional: underline on hover */
    }
  }
`;

export const EmText = styled.em`
  font-style: italic;
  color: #ffdd57;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #FC842D; /* Change to the color you want on hover */
  }
`;
