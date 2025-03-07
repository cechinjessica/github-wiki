import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    background-color: #2d333b;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    h3 {
        font-size: 24px;
        color: #FAFAFA;
    }

    p {
        font-size: 16px;
        color: #FAFAFA60;
        margin-bottom: 10px;
    }

    a {
        color: #58a6ff;
        text-decoration: none;
        font-weight: bold;
    }

    button.remover {
        background: #ff4d4d;
        border: none;
        color: #FFFFFF;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
            background: #ff1a1a;
        }
    }

    hr {
        border: 1px solid #FAFAFA60;
        margin: 20px 0;
    }
`