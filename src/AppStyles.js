import { createGlobalStyle } from "styled-components";

export const AppStyles = createGlobalStyle`
    html,body{
        height:100%;
        margin:0;
    }
    #root {
        height: 100%;
        overflow:hidden;
    }
    #layout{
        display: flex;
        flex-flow: column;
        height: 100%;
    }
    header {
        flex: 0 1 auto;
    }
    section {
        flex: 1 1 auto;
        overflow-y:auto;
        overflow-x:hidden;
        padding: 0 2rem;
    }
    footer {
        flex:0 1 0px;
    }
    .pagination{
        margin-bottom:0px
    }
`;
