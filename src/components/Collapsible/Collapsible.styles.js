import styled from 'styled-components';

export const CollapsibleWrapper = styled.div`
    background-color: #fff;
    border-radius: 4px;
    width: 50vw;
    max-width: 800px;
    min-width: 420px;
    margin: 0 auto 30px auto;
    text-align: left;
    padding: 20px;
    position: relative;
    min-height: 100px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.05)
`;

export const Title = styled.h2`
    font-size: 30px;
    padding: 10px 15px 10px 15px;
    font-weight: 300;
    margin-bottom: 10px;
    margin-top: 10px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.05)
`;

export const Panel = styled.div`
    font-size: 16px;
    line-height: 1.5rem;
    box-shadow: 0 1px 1px rgba(0,0,0,0.05)
    div {
        padding: 0 15px 20px 15px;
    }
`;

export const ItemWrapper = styled.div`
    // &.isExpanded {    
    //     ${Panel} {
    //             display: block;

    //     }
    // }

    // ${Panel} {
    //     max-height: 0;
    //     overflow: hidden;
    //     transition: max-height 0.5s ease-out;
    // }
    // &.isExpanded {
    //     ${Panel} {
    //         max-height: 200px;
    //     }
    // }

    ${Panel} {
        overflow: hidden;
        transition: height 0.3s ease-out;
    }
    &.isExpanded {
        ${Title} {
            box-shadow: none;
        }
    }
`;