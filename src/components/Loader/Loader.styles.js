import styled from 'styled-components';
import loaderIcon from './assets/ico_loader.svg'

export const LoaderWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    transform: translate(-50%, -50%);
`;

export const LoaderIcon = styled.div`
    width: 50px;
    height: 50px;
    margin: 10px auto;
    background: url(${loaderIcon}) no-repeat 0 0;
`;