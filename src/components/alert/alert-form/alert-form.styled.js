import styled from 'styled-components'

export const ContainerAlert = styled.div`
    width: ${p => p.width};
    margin : ${p => p.noMargin ? '0px auto' : '12px auto'};
    border-radius: 12px;
    padding: 0px 0px 12px 0px;
    background-color: #FFE7E7;`

export const ViewcontainerAlert = styled.div`
    text-align: center;
    padding: 0px 30px;`


export const IconAlert = styled.p`
    top: -10px;
    color: #fff;
    width: 24px;
    font-size: 16px;
    margin: 0px auto;
    font-weight: bold;
    position: relative;
    border-radius: 15px;
    background-color: #CD5454;
    padding: 0px 7px 2px 9.5px;`

export const TxtAlert = styled.p`
    margin: 0px;
    color: #CD5454;
    font-size: 12px;`