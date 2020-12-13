import { createGlobalStyle } from 'styled-components'


//Global css styling
export default createGlobalStyle`
    h1 {
        font-family: Work Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 50px;
        line-height: 55px;

        /* identical to box height */
        text-align: center;

        /* Font black */
        color: #303131;
    }
    p {
        font-family: Work Sans;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 20px;

        /* or 24px */
        text-align: center;

        /* Font black */
        color: #303131;
    }

    label {
        font-family: Work Sans;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;

        /* identical to box height */

        /* Font black */
        color: #303131;
    }
`;