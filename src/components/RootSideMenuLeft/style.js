import { css } from "@emotion/react";

export const layout = (show) => css`
    transition: all 0.5s ease-in-out;
    opacity: ${show ? 1 : 0};
    position: absolute;
    top: 0;
    left: ${show ? "0px" : "-200px"};
    box-sizing: border-box;
    border-right: 1px solid #dbdbdb;
    padding: 15px 0px;
    z-index: 99;
    width: 200px;
    height: 100%;
    background-color: #fafafa;
`;

export const header = css`
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    padding: 0px 10px;
    width: 100%;
    height: 50px;
`;

export const menuButton = css`
    box-sizing: border-box;
    border: none;
    padding: 10px;
    background-color: transparent;
    cursor: pointer;

    & > * {
        font-size: 16px;
    }
`;

export const profile = css`
    box-sizing: border-box;
    border-bottom: 1px solid #dbdbdb;
    width: 100%;
    height: 150px;
`;


export const authButtons = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    width: 100%;
    height: 100%;

    & > button {
        box-sizing: border-box;
        margin-bottom: 5px;
        border: 1px solid #dbdbdb;
        border-radius: 3px;
        padding: 5px;
        background-color: white;
        font-weight: 600;
        cursor: pointer;
    }

    &:hover {
        background-color: #fafafa;
    }
    &:active {
        background-color: #eeeeee;
    }
`;

export const settings = css`
    display: flex;
    justify-content: flex-end;
    padding: 5px 10px;

    & > * {
        cursor: pointer;
        padding: 5px;
    }
`;


export const proflieBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;



export const proflieImg = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    background-color: white;
`;

export const usernameAndEmail = css`
    display: flex;
    flex-direction: column;
    margin-left: 5px;
    cursor: default;

    & > span:nth-of-type(1) {
        font-weight: 600;
    }
    & > span:nth-of-type(2) {
        font-size: 12px;
    }
`






export const profile2 = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;



export const profileButton = css`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #dbdbdb;
    background-color: transparent;
    cursor: pointer;
    font-size: 28px;
`;

export const b0 = css`
    background-color: transparent;
    cursor: pointer;
    
`;
export const b1 = css`
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    right: 0;
    background-color: transparent;
    border: none;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    
`;
export const b2 = css`
    background-color: transparent;
    border: none;
    cursor: pointer;
`;
export const b3 = css`
    background-color: transparent;
    border: none;
    cursor: pointer;
`;


export const menuList = css`

`;

export const menuLink = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    padding: 0px 20px;
    height: 40px;
    background-color: #fdfdfd;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    color: #222222;
`;